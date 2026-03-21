const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'mod1',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#CDEAC0')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **moderator training - part 1 (introduction)**
hey there ${user}! welcome to your **moderator training**  

<:aa_heart:1478802351279312928> as a moderator, your role is to help keep ava’s assortments a **safe, welcoming, and an organised environment**  
> you represent the server at all times - your behaviour reflects on the team  

<:aa_exclaim:1481030077121564894> **expectations**  
> be respectful, calm, and professional  
> treat all members fairly  
> follow all server rules yourself  
> communicate clearly with staff and members  

<:aa_star:1478802523190984727> **activity**  
> try to stay active and responsive  
> help when needed — even small things matter

> reply with "next" or react with <:aa_tick:1482041798221369354> to continue
      `)
      .setFooter({ text: 'Ava’s Assortments • Moderator Training' });

    const sentMessage = await message.channel.send({ embeds: [embed] });

    await sentMessage.react('1482041798221369354');

    const msgFilter = m => m.author.id === user.id;
    const msgCollector = message.channel.createMessageCollector({
      filter: msgFilter,
      time: 300000
    });

    const reactFilter = (reaction, userReact) =>
      reaction.emoji.id === '1482041798221369354' && userReact.id === user.id;

    const reactCollector = sentMessage.createReactionCollector({
      filter: reactFilter,
      time: 300000
    });

    msgCollector.on('collect', async m => {
      if (m.content.toLowerCase() === 'next') {
        msgCollector.stop();
        reactCollector.stop();

        const nextCommand = message.client.commands.get('mod2');
        if (nextCommand) {
          await nextCommand.execute(message);
        }
      }
    });

    reactCollector.on('collect', async () => {
      msgCollector.stop();
      reactCollector.stop();

      const nextCommand = message.client.commands.get('mod2');
      if (nextCommand) {
        await nextCommand.execute(message);
      }
    });
  }
};