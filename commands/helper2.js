const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helper2',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#FFD6A5') // 🌼 pastel yellow (part 2)
      .setTimestamp()
      .setDescription(`
## <:aa_exclaim:1481030077121564894> Key Responsibilities

<:aa_dot:1482042307338305556> Answer customer questions politely  
<:aa_dot:1482042307338305556> Help users place orders correctly  
<:aa_dot:1482042307338305556> Guide users to the correct channels/pages  
<:aa_dot:1482042307338305556> Assist in tickets when needed  
<:aa_dot:1482042307338305556> Report issues to moderators/admins  

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

      const nextCommand = message.client.commands.get('helper3');
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