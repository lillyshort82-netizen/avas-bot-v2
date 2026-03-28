const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helper4',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#F4A261') // 🌼 darker pastel yellow (part 4)
      .setTimestamp()
      .setDescription(`
## <:aa_heart:1478802351279312928> Example Responses

**Order Help**
> “Hi there! I’d be happy to help you with your order 💗  
> You can place an order through our website here: [link]”

**Redirecting**
> “Hey! This would be better handled in <#channel> — I’ll guide you there!”

**Unsure Situation**
> “Let me get a moderator to assist you with this!”

reply with **next** or react with <:aa_tick:1482041798221369354> to continue
      `)
      .setFooter({ text: 'Ava’s Assortments • Helping Hand Training' });

    const sentMessage = await message.channel.send({ embeds: [embed] });

    const tickEmoji = message.guild.emojis.cache.get('1482041798221369354');
    if (tickEmoji) {
      await sentMessage.react(tickEmoji);
    }

    const msgFilter = (m) =>
      m.author.id === user.id && m.content.toLowerCase().trim() === 'next';

    const msgCollector = message.channel.createMessageCollector({
      filter: msgFilter,
      time: 300000
    });

    const reactFilter = (reaction, reactor) =>
      reaction.emoji.id === '1482041798221369354' && reactor.id === user.id;

    const reactCollector = sentMessage.createReactionCollector({
      filter: reactFilter,
      time: 300000
    });

    const goNext = async () => {
      msgCollector.stop();
      reactCollector.stop();

      const nextCommand = message.client.commands.get('helperquiz');
      if (nextCommand) {
        await nextCommand.execute(message);
      }
    };

    msgCollector.on('collect', async () => {
      await goNext();
    });

    reactCollector.on('collect', async () => {
      await goNext();
    });
  }
};