require('dotenv').config();
const fs = require('fs');
const path = require('path');

const {
  Client,
  GatewayIntentBits,
  Collection,
  EmbedBuilder
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent
  ]
});

const prefix = '!';
client.commands = new Collection();

const loadCommands = (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      loadCommands(filePath);
    } else if (file.endsWith('.js')) {
      const command = require(filePath);
      client.commands.set(command.name, command);
    }
  }
};

loadCommands(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift()?.toLowerCase();

  if (!commandName) return;

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.channel.send('there was an error running that command 💔').catch(() => {});
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isStringSelectMenu()) return;

  if (interaction.customId !== 'faq_menu') return;

  const page = interaction.values[0];

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

  const selected = pages[page];

  const embed = new EmbedBuilder()
    .setColor(selected.color)
    .setTitle(selected.title)
    .setDescription(selected.desc);

  await interaction.update({ embeds: [embed] });
});

client.login(process.env.TOKEN);
