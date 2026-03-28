const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'delay',
  description: 'Sends delay message',

  async execute(message, args) {
    const customer = message.mentions.users.first();

    if (!customer) {
      return message.reply('please mention the customer 💗');
    }

    const reason = args.slice(1).join(" ") || "no reason provided";

    const embed = new EmbedBuilder()
      .setColor('#FCD34D')
      .setDescription(
`# <:aa:1478812130844213288> **order update**
hey there, ${customer} 💗  

<:aa_exclaim:1478805998180241429> there has been a **small delay** with your order  

<:aa_arrow:1482041725978542101> **reason:** ${reason}

<:aa_heart:1478802351279312928> we’re still working on everything and will have it ready as soon as possible 💗  
<:aa_star:1478802523190984727> thank you so much for your patience — we really appreciate it ✨  

<:aa_star:1478802523190984727> **view your order details here:**  
> *<https://avas-assortments.com/>*`
      )
      .setFooter({ text: 'ava’s assortments 💗' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};