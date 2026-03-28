const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helper1',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#FFE5B4')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> Helping Hand Training Guide

## <:aa_heart:1478802351279312928> Welcome!
Welcome to the **Helping Hand Team** at Ava’s Assortments!
You are here to support both customers and staff by keeping things running smoothly.

> Please check https://discord.com/channels/1478782008632020994/1485184463528005722 for formats to use!

## <:aa_question:1482059914414129213> What is a Helping Hand?

Helping Hands focus on:
> answering questions  
> guiding customers  
> assisting in tickets  
> supporting chefs & staff  

They are **NOT moderators**

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

      const nextCommand = message.client.commands.get('helper2');
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