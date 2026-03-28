const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'adminapp',
  description: 'Sends admin application embed',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#BFA2DB')
      .setDescription(
`# <:aa_star:1478802523190984727> **admin application**

<:aa_heart:1478802351279312928> thank you for opening an **admin application ticket** for **ava’s assortments**!  
this role is for **discord server administration only** and does **not include access to the website**.  
please answer the questions below so we can learn more about you 💗  

<:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> <:faeries_idash:1403040647098667058> <:aa_heart:1478802351279312928> 

**1 | discord username + id**  
(example: username#0000)  
**2 | age**  
**3 | timezone**  
**4 | how active are you able to be in the server?**  
(approximate hours per day)  
**5 | do you have previous moderation/admin experience?**  
if yes, please list the servers and roles.  
**6 | why would you like to become an admin for ava’s assortments?**  
**7 | what do you think the responsibilities of a server admin are?**  
**8 | how would you handle a situation where two members are arguing in chat?**  
**9 | how would you deal with someone repeatedly breaking the rules?**  
**10 | are you comfortable helping with tickets, member questions, and keeping chats safe and friendly?**  
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