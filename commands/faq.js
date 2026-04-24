const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require('discord.js');

module.exports = {
  name: 'faq',

  async execute(message) {

    const embed = new EmbedBuilder()
      .setColor('#F7C6D9')
      .setTitle('<:aa_question:1482059914414129213> ﹒faq centre ✦')
      .setDescription('<:000_swirl1:1487811769367007263> ﹒*choose a section below* ♡');

    const menu = new StringSelectMenuBuilder()
      .setCustomId('faq_menu')
      .setPlaceholder('select a faq page...')
      .addOptions([
        {
          label: 'Website + Ordering',
          value: 'website',
          emoji: '🌐'
        },
        {
          label: 'Payments',
          value: 'payments',
          emoji: '💳'
        },
        {
          label: 'Delivery',
          value: 'delivery',
          emoji: '🚚'
        },
        {
          label: 'Priority',
          value: 'priority',
          emoji: '⭐'
        },
        {
          label: 'Help',
          value: 'help',
          emoji: '🆘'
        }
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    await message.channel.send({
      embeds: [embed],
      components: [row]
    });

    await message.delete().catch(() => {});
  }
};
