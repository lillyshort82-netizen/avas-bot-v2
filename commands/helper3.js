const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helper3',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#FFCB77') // 🌼 pastel yellow (part 3)
      .setTimestamp()
      .setDescription(`
## <:aa_cross:1482041835839946965> What You CANNOT Do

<:aa_dot:1482042307338305556> Warn or punish members  
<:aa_dot:1482042307338305556> Handle serious conflicts  
<:aa_dot:1482042307338305556> Give false information  

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

      const nextCommand = message.client.commands.get('helper4');
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