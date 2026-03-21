const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'modquiz',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#52B788') // 🌿 darkest pastel green
      .setTimestamp()

      .setDescription(`
# <:aa_star:1478802523190984727> **moderator training - quiz**
${user}

<:aa_exclaim:1481030077121564894> *answer honestly - this helps us understand your knowledge*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **what would you do if two members are arguing in chat?**  
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **how would you handle someone repeatedly breaking the rules?**  
<:aa_3:1482044361842757743> ▪ ꒱ **what should you do if you don’t know the answer to a question?**  
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **how should you treat members as a moderator?**  
<:aa_5:1482044444785115206> ▪ ꒱ **when should you escalate a situation to higher staff?**  
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ **how would you respond to a confused or impatient customer?**  

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once completed, a staff member will review your answers 💗  
-# <:aa_exclaim:1481030077121564894> please avoid rushing - thoughtful answers are better than short ones!
      `)

      .setFooter({ text: 'Ava’s Assortments • Moderator Training' });

    message.channel.send({ embeds: [embed] });
  }
};