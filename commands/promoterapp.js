const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'promoterapp',
  description: 'Sends pastry promoter application embed',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#a0c4ff')
      .setDescription(
`# <:aa_star:1478802523190984727> **pastry promoter application**

<:aa_heart:1478802351279312928> thank you for opening a **pastry promoter application ticket** for **ava’s assortments**!
this role focuses on **promoting the server and helping it grow**.
please answer the questions below so we can learn more about you 💗  

<:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> 

**1 | discord username + id**  
(example: username#0000)  
**2 | age**  
**3 | timezone**  
**4 | how active are you able to be in the server?**  
(approximate hours per day)  
**5 | do you have previous promoting or partnership experience?**  
if yes, please list servers or examples.  
**6 | why would you like to become a pastry promoter?**  
**7 | how would you promote our server to others?**  
**8 | are you comfortable reaching out to other servers and forming partnerships?**  
**9 | how would you represent ava’s assortments in other communities?**  
**10 | are you able to stay consistent with promotions and quotas?**  
**11 | anything else you’d like us to know?**

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