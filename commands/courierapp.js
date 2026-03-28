const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'courierapp',
  description: 'Sends cherry courier application embed',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#c55267')
      .setDescription(
`# <:aa_star:1478802523190984727> **cherry courier application**

<:aa_heart:1478802351279312928> thank you for opening a **cherry courier application ticket** for **ava’s assortments**!  
this role focuses on **delivering items from chef plots to customers**.  
please answer the questions below so we can learn more about you 💗  

<:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> 

**1 | discord username + id**  
(example: username#0000)  
**2 | age**  
**3 | timezone**  
**4 | how active are you able to be?**  
(approximate hours per day)  
**5 | do you have experience with bloxburg deliveries or similar roles?**  
(if yes, please explain)  
**6 | why would you like to become a cherry courier?**  
**7 | how would you ensure deliveries are done quickly and correctly?**  
**8 | how would you handle a mistake during a delivery?**  
**9 | are you able to communicate clearly with chefs and customers?**  
**10 | anything else you’d like us to know?**

<:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> 

<:aa_star:1478802523190984727> once you have answered all questions, **i will review your application**.  
please avoid pinging staff while your application is being reviewed — we will respond as soon as possible!  

thank you for supporting **ava’s assortments** 🍰`
      )
      .setFooter({ text: 'ava’s assortments 💗' })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });

    message.delete().catch(() => {});
  },
};