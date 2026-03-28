const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '75',
  description: 'Sends the 75% completion update embed',

  async execute(message, args) {
    const customer = message.mentions.users.first();

    if (!customer) {
      return message.reply('please mention the customer for this order 💗');
    }

    const embed = new EmbedBuilder()
.setColor('#F8C8DC') // ✅ HERE
      .setDescription(
        `# <:aa:1478812130844213288> **order update!**
hey there, ${customer} ,

<:aa_star:1478802523190984727> your order is now **75% complete**!
we’re almost finished preparing everything 🍓

<:aa_heart:1478802351279312928> please let us know when you’ll be **ready to start payment**!
<:aa_gift:1478805998180241429> once your order is fully complete, we’ll move to the **pickup stage**.

<:aa_star:1478802523190984727> **view your order details here:**
> *<https://avas-assortments.com/>*

thank you for ordering from **ava’s assortments** 💗`
      );

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};