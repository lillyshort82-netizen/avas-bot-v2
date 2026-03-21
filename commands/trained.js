const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'trained',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#F8C8DC') // 💗 light pastel pink
      .setTimestamp()

      .setDescription(`
# <:aa_tick:1482041798221369354>  **training complete**
${user}  

<:aa_heart:1478802351279312928> **well done!**  
thank you for completing your training   
you are now ready to begin your role and support the server 💗  

<:aa_gift:1478805998180241429> *you may receive a special reward if you go above & beyond!*👀
      `)

      .setFooter({ text: 'Ava’s Assortments • Training' });

    message.channel.send({ embeds: [embed] });
  }
};