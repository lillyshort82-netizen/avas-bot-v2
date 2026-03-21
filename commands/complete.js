const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'complete',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first();

    if (!user) {
      return message.channel.send('please mention a user, e.g. `!complete @user`');
    }

    const embed = new EmbedBuilder()
      .setColor('#D8B4F8') // 💜 lilac
      .setTimestamp()

      .setDescription(`
# <:aa:1478812130844213288> order complete!
hey there, ${user}

<:aa_star:1478802523190984727> your order has been **successfully delivered**!

<:aa_heart:1478802351279312928> thank you so much for ordering from **ava’s assortments** - we truly appreciate your support 
> we hope you love everything! feel free to come back anytime or place another order ✨

<:aa_gift:1478805998180241429> if you have a moment, we’d really appreciate a quick review 
-# <:aa_arrow:1482041725978542101> you can leave one on the website below!

<:aa_star:1478802523190984727> website:
> <https://avas-assortments.com/>
      `)

      .setFooter({ text: 'Ava’s Assortments • Orders' });

    message.channel.send({ embeds: [embed] });
  }
};