const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'priority',
  async execute(message) {

    const embed = new EmbedBuilder()
      .setDescription(
`# <:aa_priority:1482052112010706954> ・⸝⸝ priority pass form  
please fill out the form below to purchase a **priority pass**!  

<:aa_exclaim:1481030077121564894> **note:**  
one-time priority is based on order size (see pricing in <#147880131470321275>)  
**permanent priority is priced separately**  

୨୧ ─────────── ୨୧ ─────────── ୨୧  

<:aa_1:1482044265423962226>・*roblox username ::*  
<:aa_2:1482044318436036768>・*priority pass type (one-time / permanent) ::*  
<:aa_3:1482044361842757743>・*order size (if one-time) ::*  

୨୧ ─────────── ୨୧ ─────────── ୨୧  

-# <:aa_exclaim:1481030077121564894> **the pass won’t work until you place your NEXT order!**`
      )
      .setColor("#f7c6d9");

    await message.channel.send({ embeds: [embed] });

  }
};