const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'modapp',

  async execute(message) {
    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor('#a8d5ba') // ✨ pastel lilac for mod
      .setTimestamp()

      .setDescription(`
# <:aa_app:1484833442758791179> __moderator application__
> thank you for opening a **moderator application** application for ava’s assortments!
> this role focuses on __maintaining the community__, __enforcing rules__, and __assisting members__.
<:aa_exclaim:1481030077121564894> *please answer the questions below so we can learn more about you*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **your preferred name**
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **discord username + id**
-# (example: username#0000)
<:aa_3:1482044361842757743> ▪ ꒱ **age**
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **timezone**
<:aa_5:1482044444785115206> ▪ ꒱ **how active are you able to be in the server?**
-# (approximate hours per day)
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ **do you have any previous moderation experience?**
-# (if yes, please list servers and roles)
<:aa_7:1482044528587309170> ▪ ꒱ **why would you like to become a moderator?**
‎ ‎ <:aa_8:1482044567422238792> ▪ ꒱ **how would you handle a situation where members are arguing?**
<:aa_9:1482044606001451192> ▪ ꒱ **how would you deal with someone repeatedly breaking the rules?**
‎ ‎ <:aa_1:1482044265423962226><:aa_0:1482044185509892228> ▪ ꒱ **do you know what this role’s responsibilities are?**
<:aa_1:1482044265423962226><:aa_1:1482044265423962226> ▪ ꒱ **anything else you’d like us to know?**

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once you have answered all questions, we will review your application.
-# <:aa_cross:1482041835839946965> **please avoid pinging staff while your application is being reviewed - we will respond as soon as possible!**
      `)

      .setFooter({ text: 'Ava’s Assortments • Applications' })
      .setImage('https://cdn.discordapp.com/attachments/1440707000097832983/1484838589370994818/ChatGPT_Image_Mar_21_2026_08_58_08_AM.png?ex=69bfaf32&is=69be5db2&hm=daa2851f9bae40377be0f359a3df10c9038c04c918c1cbd7d6b6e6a9a8a7b4e6');

    message.channel.send({ embeds: [embed] });
  }
};