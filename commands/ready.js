const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ready',
  description: 'Sends ready for payment message',

  async execute(message, args) {
    const customer = message.mentions.users.first();

    if (!customer) {
      return message.reply('please mention the customer 💗');
    }

    const embed = new EmbedBuilder()
      .setColor('#CDEAC0') // 🌿 green = ready/payment stage
      .setDescription(
`# <:aa:1478812130844213288> **order complete!**
hey there, ${customer} 💗  

<:aa_star:1478802523190984727> your order is **finished and ready for pickup**!  

<:aa_heart:1478802351279312928> please let us know when you are **ready to start payment**!  
<:aa_gift:1478805998180241429> once payment is complete, we will send the **pickup neighbourhood**.  

<:aa_star:1478802523190984727> **view your order details here:**  
> *<https://avas-assortments.com/>*  

thank you for ordering from **ava’s assortments** 💗`
      )
      .setFooter({ text: 'ava’s assortments 💗' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};