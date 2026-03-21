const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'helperapp',

  async execute(message) {
    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor('#FFD6A5')
      .setTimestamp()

      .setDescription(`
# <:aa_app:1484833442758791179> __helping hand application__
> thank you for opening a **helping hand application** application for ava’s assortments!
> this role focuses on __assisting customers__ and __supporting staff__.
<:aa_exclaim:1481030077121564894> *please answer the questions below so we can learn more about you*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **your preferred name**
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **discord username + id**
-# (example: username#0000)
<:aa_3:1482044361842757743> ▪ ꒱ **age**
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **timezone**
<:aa_5:1482044444785115206> ▪ ꒱ **how active are you able to be in the server?**
-# (approximate hours per day)
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ **do you have any previous experience helping customers or staff?**
-# (if yes, please explain)
<:aa_7:1482044528587309170> ▪ ꒱ **do you know what this role’s responsibilities are?**
‎ ‎ <:aa_8:1482044567422238792> ▪ ꒱ **how would you respond to a confused or impatient customer?**
<:aa_9:1482044606001451192> ▪ ꒱ **how would you support chefs or other staff if needed?**
‎ ‎ <:aa_1:1482044265423962226><:aa_0:1482044185509892228> ▪ ꒱ **strengths & weaknesses**
<:aa_1:1482044265423962226><:aa_1:1482044265423962226> ▪ ꒱ **anything else you’d like us to know?**

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once you have answered all questions, we will review your application.
-# <:aa_cross:1482041835839946965> **please avoid pinging staff while your application is being reviewed - we will respond as soon as possible!**
      `)

      .setFooter({ text: 'Ava’s Assortments • Applications' })

      // 👇 optional bottom image
      .setImage('https://cdn.discordapp.com/attachments/1440707000097832983/1484831282222465094/ChatGPT_Image_Mar_21_2026_08_29_02_AM.png?ex=69bfa864&is=69be56e4&hm=f980339de75ab60cc31479b3f222efe24fcf637118f9e1d4c5874c93fe1c71cb');

    message.channel.send({ embeds: [embed] });
  }
};