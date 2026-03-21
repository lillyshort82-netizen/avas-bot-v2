const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'mod4',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#74C69D')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **moderator training - part 4 (final check)**
${user}  

<:aa_exclaim:1481030077121564894> before you’re fully ready, make sure you understand:

<:aa_star:1478802523190984727> **checklist**  
> server rules  
> how to warn members  
> how to handle conflict  
> how to respond in tickets  
> when to escalate situations  

<:aa_star:1478802523190984727> once completed, a staff member will review your training  

> reply with **next** or react with <:aa_tick:1482041798221369354> to continue
      `)
      .setFooter({ text: 'Ava’s Assortments • Moderator Training' });

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

      const nextCommand = message.client.commands.get('modquiz');
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