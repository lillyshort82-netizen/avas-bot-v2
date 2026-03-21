const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'trainingstart',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#F8C8DC')
      .setTimestamp()
      .setDescription(`
# <:aa_star:1478802523190984727>  **training start**
hey there, ${user}  

<:aa_heart:1478802351279312928> you’re all set to begin your training!  
please let us know when you are ready to start  

<:aa_exclaim:1481030077121564894> once you’re ready, a staff member will guide you through the process  
> take your time , there’s no rush ✨
      `)
      .setFooter({ text: 'Ava’s Assortments • Training' });

    message.channel.send({ embeds: [embed] });
  }
};