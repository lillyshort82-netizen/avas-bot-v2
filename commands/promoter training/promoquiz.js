const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'promoquiz',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#5C9DFF')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727> **pastry promoter training - quiz**

<:aa_exclaim:1481030077121564894> *answer honestly - this helps us understand your knowledge*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **what should you do before promoting in another server?**  
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **how would you handle a partnership request from a server that is currently blacklisted?**  
<:aa_3:1482044361842757743> ▪ ꒱ **what would you do if a partner asks a question you don’t know the answer to?**  
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **how should you represent ava’s assortments when promoting?**  
<:aa_5:1482044444785115206> ▪ ꒱ **what should you avoid doing as a pastry promoter?**  
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ **how would you respond to someone interested in partnering?**  

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once completed, a staff member will review your answers 💗  
-# <:aa_exclaim:1481030077121564894> please avoid rushing - thoughtful answers are better than short ones!
      `)
      .setFooter({ text: 'Ava’s Assortments • Pastry Promoter Training' });

    message.channel.send({ embeds: [embed] });
  }
};