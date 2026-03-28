const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helperapp',
  description: 'Sends helping hand application embed',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#ffd6a5')
      .setDescription(
`# <:aa_star:1478802523190984727> **helping hand application**

<:aa_heart:1478802351279312928> thank you for opening a **helping hand application ticket** for **ava’s assortments**!  
this role focuses on **assisting customers and supporting staff**.  
please answer the questions below so we can learn more about you 💗  

<:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> 

**1 | discord username + id**  
(example: username#0000)  
**2 | age**  
**3 | timezone**  
**4 | how active are you able to be in the server?**  
(approximate hours per day)  
**5 | do you have any previous experience helping customers or staff?**  
(if yes, please explain)  
**6 | why would you like to become a helping hand?**  
**7 | how would you respond to a confused or impatient customer?**  
**8 | are you comfortable answering questions and guiding users?**  
**9 | how would you support chefs or moderators if needed?**  
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