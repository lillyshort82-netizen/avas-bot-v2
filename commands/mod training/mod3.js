const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'mod3',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#95D5B2')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **moderator training - part 3 (tickets & support)**
${user}  

<:aa_heart:1478802351279312928> moderators also help with **tickets and customer support**

<:aa_star:1478802523190984727> **when responding to users:**  
> be polite and patient  
> answer clearly  
> don’t rush or ignore  

<:aa_exclaim:1481030077121564894> **if a user is confused:**  
> explain step-by-step   

<:aa_star:1478802523190984727> **if you don’t know something:**  
> don’t guess  
> ask staff or redirect properly  

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

      const nextCommand = message.client.commands.get('mod4');
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