const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'accepted',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first();

    if (!user) {
      return message.channel.send('please mention a user, e.g. `!accepted @user`');
    }

    const embed = new EmbedBuilder()
      .setColor('#CDEAC0') // 🌿 pastel sage green
      .setTimestamp()

      .setDescription(`
# <:aa_tick:1482041798221369354> **application successful!**
hey there, ${user}  

<:aa_star:1478802523190984727> **your application has been successfully accepted!**  
<:aa_heart:1478802351279312928> thank you so much for applying to **ava’s assortments** - we’re so excited to have you join our team  
> we believe you’ll be a great addition and can’t wait to see you grow with us   

<:aa_exclaim:1481030077121564894> **what’s next?**  
> a staff member will guide you through the next steps shortly, so please keep an eye on this ticket 👀

<:aa_star:1478802523190984727> **welcome to the team!**
      `)

      .setFooter({ text: 'Ava’s Assortments • Applications' });

    message.channel.send({ embeds: [embed] });
  }
};