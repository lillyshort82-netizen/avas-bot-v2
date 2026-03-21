const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'mod2',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#B7E4C7')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **moderator training - part 2 (rules & moderation)**
${user}  

<:aa_exclaim:1481030077121564894> your main job is to **enforce the rules fairly and consistently**

<:aa_star:1478802523190984727> **when moderating:**  
> stay calm and neutral  
> don’t take things personally  
> avoid arguing with members  

<:aa_heart:1478802351279312928> **warnings system**  
> give clear warnings before escalating  
> explain what rule was broken  
> document actions  

<:aa_exclaim:1481030077121564894> **do NOT:**  
> abuse your permissions  
> show favouritism  
> punish without reason  

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

      const nextCommand = message.client.commands.get('mod3');
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