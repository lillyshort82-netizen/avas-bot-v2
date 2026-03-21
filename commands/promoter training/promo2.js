const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'promo2',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#C2DCFF')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **pastry promoter training - part 2 (partnerships & promotion)**
${user}  

<:aa_star:1478802523190984727> **when promoting:**  
> use the correct server information and links  
> be respectful and avoid spamming  

<:aa_heart:1478802351279312928> **partnerships**  
> partnerships should be organised and appropriate  
> log or report partnerships correctly

<:aa_exclaim:1481030077121564894> **do NOT:**  
> send invalid links  
> advertise where it is not allowed  
> spam members or servers  
> misrepresent ava’s assortments  

reply with **next** or react with <:aa_tick:1482041798221369354> to continue
      `)
      .setFooter({ text: 'Ava’s Assortments • Pastry Promoter Training' });

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

      const nextCommand = message.client.commands.get('promo3');
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