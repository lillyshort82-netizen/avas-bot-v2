const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'promoterapp',

  async execute(message) {
    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor('#a0c4ff')
      .setTimestamp()

      .setDescription(`
# <:aa_app:1484833442758791179> __pastry promoter application__
> thank you for opening a **pastry promoter application** application for ava’s assortments!
> this role focuses on __advertising the server__, __forming partnerships__, and __helping the community grow__.
<:aa_exclaim:1481030077121564894> *please answer the questions below so we can learn more about you*

 ⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_1:1482044265423962226> ▪ ꒱ **your preferred name**
‎ ‎ <:aa_2:1482044318436036768> ▪ ꒱ **discord username + id**
-# (example: username#0000)
<:aa_3:1482044361842757743> ▪ ꒱ **age**
‎ ‎ <:aa_4:1482044402997264546> ▪ ꒱ **timezone**
<:aa_5:1482044444785115206> ▪ ꒱ **how active are you able to be in the server?**
-# (approximate hours per day)
‎ ‎ <:aa_6:1482044478494736551> ▪ ꒱ **do you have any previous experience with promotion, partnerships, or advertising?**
-# (if yes, please explain)
<:aa_7:1482044528587309170> ▪ ꒱ **why would you like to become a pastry promoter?**
‎ ‎ <:aa_8:1482044567422238792> ▪ ꒱ **how would you promote ava’s assortments?**
<:aa_9:1482044606001451192> ▪ ꒱ **how would you respond to questions from interested members or potential customers?**
‎ ‎ <:aa_1:1482044265423962226><:aa_0:1482044185509892228> ▪ ꒱ **do you know what this role’s responsibilities are?**
<:aa_1:1482044265423962226><:aa_1:1482044265423962226> ▪ ꒱ **anything else you’d like us to know?**

⏔⏔<:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>⏔⏔ <:aa_heart:1478802351279312928>

<:aa_star:1478802523190984727> once you have answered all questions, we will review your application.
-# <:aa_cross:1482041835839946965> **please avoid pinging staff while your application is being reviewed - we will respond as soon as possible!**
      `)

      .setFooter({ text: 'Ava’s Assortments • Applications' })
      .setImage('https://cdn.discordapp.com/attachments/1440707000097832983/1484836663476621352/ChatGPT_Image_Mar_21_2026_08_50_28_AM.png?ex=69bfad67&is=69be5be7&hm=edb11e03108510146ab87ca7a7c51ac7cb8564c04b2fc99e3cce7377b56fcb54');

    message.channel.send({ embeds: [embed] });
  }
};