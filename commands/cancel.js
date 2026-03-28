const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'cancel',
  description: 'Sends cancel message',

  async execute(message, args) {
    const customer = message.mentions.users.first();

    if (!customer) {
      return message.reply('please mention the customer 💗');
    }

    const reason = args.slice(1).join(" ") || "no reason provided";

    const embed = new EmbedBuilder()
      .setColor('#F87171')
      .setDescription(
`# <:aa:1478812130844213288> **order update**
hey there, ${customer} 💗  

<:aa_exclaim:1478805998180241429> your order has been **cancelled**  

<:aa_arrow:1482041725978542101> **reason:** ${reason}

<:aa_heart:1478802351279312928> if you have any questions or would like to place a new order, feel free to let us know 💗  
<:aa_star:1478802523190984727> we’re always happy to help ✨  

<:aa_star:1478802523190984727> **website:**  
> *<https://avas-assortments.com/>*`
      )
      .setFooter({ text: 'ava’s assortments 💗' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};