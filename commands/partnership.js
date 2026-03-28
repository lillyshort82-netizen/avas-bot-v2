const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'partnership',
  async execute(message) {
    const embed = new EmbedBuilder()
      .setDescription(
`# <:aa_partner:1478808291890041003> ・⸝⸝ partnership form
hello! thank you for your interest in partnering with us! please fill out the form below! <:aa_heart:1478802351279312928> 

<:aa_1:1482044265423962226>・*server name ::*
‎ ‎ <:aa_2:1482044318436036768>・*server invite ::*
<:aa_3:1482044361842757743>・*member count (human) ::*
‎ ‎ <:aa_4:1482044402997264546>・*do you meet the <#1478809569512652965> ? ::*

୨୧ ─────────── ୨୧ ─────────── ୨୧

-# <:aa_exclaim:1481030077121564894> **once submitted please ping your ticket handler!**`
      )
      .setColor("#f7c6d9");

    await message.channel.send({ embeds: [embed] });
  }
};