const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'delivered',
  description: 'Sends delivered / completed order message',

  async execute(message, args) {
    const customer = message.mentions.users.first();

    if (!customer) {
      return message.reply('please mention the customer 💗');
    }

    const embed = new EmbedBuilder()
      .setColor('#D8B4F8') // 💜 lilac
      .setDescription(
`# <:aa:1478812130844213288> **order complete!**
hey there, ${customer} 💗  

<:aa_star:1478802523190984727> your order has been **successfully delivered**!  

<:aa_heart:1478802351279312928> thank you so much for ordering from **ava’s assortments** — we truly appreciate your support 💗  
<:aa_gift:1478805998180241429> we hope you love everything! feel free to come back anytime or place another order ✨  

<:aa_exclaim:1478805998180241429> if you have a moment, we’d really appreciate a **quick review** 💗  
-# <:aa_arrow:1482041725978542101> **you can leave one on the website - it really helps us grow!**  

<:aa_star:1478802523190984727> **website:**  
> *<https://avas-assortments.com/>*  

thank you again for choosing us 💗`
      )
      .setFooter({ text: 'ava’s assortments 💗' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};