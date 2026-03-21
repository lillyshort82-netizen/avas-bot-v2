const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'promo1',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#D6E8FF')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **pastry promoter training - part 1 (introduction)**
hey there ${user}! welcome to your **pastry promoter training**  

<:aa_heart:1478802351279312928> as a pastry promoter, your role is to help **advertise ava’s assortments**, form **partnerships**, and help the server **grow in a positive way**  
> you represent the server whenever you are promoting, so your behaviour reflects on the team  

<:aa_exclaim:1481030077121564894> **expectations**  
> be respectful, friendly, and professional  
> represent the server well  
> communicate clearly with members and other servers  
> follow all promotion rules and server guidelines  

<:aa_star:1478802523190984727> **activity**  
> try to stay active and contribute where you can  
> even small promotions and partnerships help the server grow  

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

      const nextCommand = message.client.commands.get('promo2');
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