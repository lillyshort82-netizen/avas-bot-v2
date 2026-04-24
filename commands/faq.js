const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require('discord.js');

module.exports = {
  name: 'faq',

  async execute(message) {
    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor('#F7C6D9')
      .setTitle('<:aa_question:1482059914414129213> ﹒faq centre ✦')
      .setDescription('<:000_swirl1:1487811769367007263> ﹒*choose a section below to view answers* ♡');

    const menu = new StringSelectMenuBuilder()
      .setCustomId('faq_menu')
      .setPlaceholder('select a faq page...')
      .addOptions([
        { label: 'Website + Ordering', value: 'website', emoji: '🌐' },
        { label: 'Payments + Fees', value: 'payments', emoji: '💳' },
        { label: 'Pickup + Delivery', value: 'delivery', emoji: '🚚' },
        { label: 'Priority + Memberships', value: 'priority', emoji: '🎁' },
        { label: 'Help + Tickets', value: 'help', emoji: '🆘' }
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [row]
    });

    const collector = sentMessage.createMessageComponentCollector({
      time: 0
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.isStringSelectMenu()) return;
      if (interaction.customId !== 'faq_menu') return;

      const pages = {
        website: {
          color: '#F7C6D9',
          title: '<:aa_shop:1478804321289371694> ﹒website + ordering ✦',
          desc:
`<:000_swirl1:1487811769367007263> ﹒*for anything order-related, check our [*website*](https://avas-assortments.com/)* ♡

<:aa_dot:1482042307338305556> ﹒**how do i order / view items?**
𓂃 *browse, customise & place your order on the [*website*](https://avas-assortments.com/)*

<:aa_dot:1482042307338305556> ﹒**where is my order / updates?**
𓂃 *track everything live on your order dashboard via the [*website*](https://avas-assortments.com/)*`
        },

        payments: {
          color: '#DFA3B6',
          title: '<:aa_money:1482055752477577346> ﹒payments + fees ✦',
          desc:
`<:000_swirl2:1487812296905330829> ﹒*simple & flexible* ♡

<:aa_dot:1482042307338305556> ﹒**BBC** 💸 ・ **robux** 💎 ・ **bloxbux** 🪙 ・ **nitro** ✨
<:aa_dot:1482042307338305556> ﹒combine **BBC + robux**
<:aa_dot:1482042307338305556> ﹒fees, discounts & totals show before checkout

<:aa_exclaim:1481030077121564894> ﹒*never pay without an order* ♡`
        },

        delivery: {
          color: '#CDE7D8',
          title: '<:aa_wand:1487809466433933382> ﹒pickup + delivery ✦',
          desc:
`<:aa_dot:1482042307338305556> ﹒**standard pickup** — *meet in-game at our bakery*
<:aa_arrow:1482041725978542101> ﹒receive a **pickup time & location**
<:aa_arrow:1482041725978542101> ﹒collect within your **3 day timeframe**

<:aa_dot:1482042307338305556> ﹒**account delivery** — *items delivered directly to an account*
<:aa_star:1478802523190984727> ﹒*recommended for large orders*
<:aa_exclaim:1481030077121564894> ﹒*keep account details safe & do not share them*`
        },

        priority: {
          color: '#E8F5EE',
          title: '<:aa_star:1478802523190984727> ﹒priority + memberships ✦',
          desc:
`<:000_swirl1:1487811769367007263> ﹒*speed up & unlock perks* ♡

<:aa_dot:1482042307338305556> ﹒**priority pass** — move up the queue
<:aa_dot:1482042307338305556> ﹒**memberships** — permanent perks & discounts
<:aa_dot:1482042307338305556> ﹒freebies, rewards & exclusive benefits

<:aa_petal:1491830954866638858> ﹒*applied automatically at checkout* ♡`
        },

        help: {
          color: '#F7C6D9',
          title: '<:aa_question:1482059914414129213> ﹒help + tickets ✦',
          desc:
`<:000_swirl2:1487812296905330829> ﹒*please check the [*website*](https://avas-assortments.com/) first* ♡

<:aa_dot:1482042307338305556> ﹒open a ticket if your order has an issue
<:aa_dot:1482042307338305556> ﹒staff can help with payments, delivery or account issues
<:aa_dot:1482042307338305556> ﹒giveaways & extras will be posted separately 🎁`
        }
      };

      const selected = pages[interaction.values[0]];

      const newEmbed = new EmbedBuilder()
        .setColor(selected.color)
        .setTitle(selected.title)
        .setDescription(selected.desc);

      await interaction.update({
        embeds: [newEmbed],
        components: [row]
      });
    });
  }
};
