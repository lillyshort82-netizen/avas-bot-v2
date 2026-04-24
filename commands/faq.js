const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");

const WEBSITE = "https://avas-assortments.com/";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("faq")
    .setDescription("Send the AA FAQ dropdown panel"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#F7C6D9")
      .setTitle("<:aa_question:1482059914414129213> ﹒faq centre ✦")
      .setDescription(
        "<:000_swirl1:1487811769367007263> ﹒*choose a section below to view answers* ♡"
      );

    const menu = new StringSelectMenuBuilder()
      .setCustomId("faq_menu")
      .setPlaceholder("select a faq page...")
      .addOptions([
        {
          label: "Website + Ordering",
          description: "How to order, view items and track orders",
          value: "website",
          emoji: "🌐"
        },
        {
          label: "Payments + Fees",
          description: "Payment methods, totals and discounts",
          value: "payments",
          emoji: "💳"
        },
        {
          label: "Pickup + Delivery",
          description: "Standard pickup and account delivery",
          value: "delivery",
          emoji: "🚚"
        },
        {
          label: "Priority + Memberships",
          description: "Queue boosts, memberships and perks",
          value: "priority",
          emoji: "🎁"
        },
        {
          label: "Help + Tickets",
          description: "When to open a ticket",
          value: "help",
          emoji: "🆘"
        }
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    await interaction.reply({
      embeds: [embed],
      components: [row]
    });
  }
};