const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helperquiz',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#E9C46A') // 🌼 deeper pastel yellow (quiz)
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **helping hand training - quiz**

<:aa_exclaim:1481030077121564894> *answer honestly - this helps us understand your knowledge*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **a customer keeps asking the same question even after you’ve answered - what do you do?**  
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **how would you handle a situation where a member needs help with something you are unsure about?**  
<:aa_3:1482044361842757743> ▪ ꒱ **what would you do if two members started arguing in chat?**  
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **a ticket starts going off-topic - how do you handle it?**  
<:aa_5:1482044444785115206> ▪ ꒱ **a customer keeps pinging a chef directly - how would you handle that?**  
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ ** why do you want to be a Helping Hand instead of a moderator?**  

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once completed, a staff member will review your answers 💗  
-# <:aa_exclaim:1481030077121564894> please avoid rushing - thoughtful answers are better than short ones!
      `)
      .setFooter({ text: 'Ava’s Assortments • Helping Hand Training' });

    message.channel.send({ embeds: [embed] });
  }
};