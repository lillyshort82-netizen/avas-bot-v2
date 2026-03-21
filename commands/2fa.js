const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '2fa',

  async execute(message) {
    message.delete().catch(() => {});

    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor('#F8C8DC') // 💗 light pastel pink
      .setTimestamp()

      .setDescription(`
# <:aa_exclaim:1481030077121564894>  **staff security requirement**
${user}  

before beginning your **staff duties**, all staff members must have **two-factor authentication (2FA)** enabled on their discord account.  
this is required to keep the server and staff team secure.

<:aa_heart:1478802351279312928> **how to enable 2FA**
1. open **discord settings**
2. go to **my account**
3. click **enable two-factor authentication**
4. follow the steps using an authenticator app (such as google authenticator or authy)

once enabled, please confirm and send a screenshot here 💗
      `)

      .setFooter({ text: 'Ava’s Assortments • Staff Security' });

    message.channel.send({ embeds: [embed] });
  }
};