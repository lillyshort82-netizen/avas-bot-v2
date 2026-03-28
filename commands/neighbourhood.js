const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'nbh',
  async execute(message) {

    const embed = new EmbedBuilder()
      .setDescription(
`# <:aa_nbh:1482049780950499463>・⸝⸝ neighbourhood code

<:aa_dot:1482042307338305556> ***pick-ups*** :: __dvreaming__

୨୧ ─────────── ୨୧ ─────────── ୨୧

-# <:aa_exclaim:1481030077121564894> **this is the only neighbourhood we use!**`
      )
      .setColor("#f7c6d9");

    await message.channel.send({ embeds: [embed] });

  }
};