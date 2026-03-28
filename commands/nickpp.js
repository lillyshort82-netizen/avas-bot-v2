const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'nickpp',

  async execute(message, args) {
    message.delete().catch(() => {});

    // 🔒 staff only
    if (!message.member.roles.cache.some(role => role.name === '𓆩 ───── staff ───── 𓆪')) {
      return;
    }

    const member = message.mentions.members.first();
    if (!member) {
      return message.channel.send('usage: `!nickpp @user name timezone`').catch(() => {});
    }

    const filteredArgs = args.filter(arg => !arg.startsWith('<@'));

    if (filteredArgs.length < 2) {
      return message.channel.send('usage: `!nickpp @user name timezone`').catch(() => {});
    }

    const displayName = filteredArgs[0];
    const timezone = filteredArgs.slice(1).join(' ');

    // ⭐ YOUR EXACT FORMAT
    const newNickname = `${displayName} ˖᯽ ݁pastry promoter ､､ ${timezone}`;

    // ⭐ YOUR ROLE IDS
    const rolesToAdd = [
      '1478792139281403994',
      '1480493834780545115'
    ];

    const addedRoles = [];

    try {
      await member.setNickname(newNickname);

      for (const roleId of rolesToAdd) {
        const role = message.guild.roles.cache.get(roleId);
        if (role && !member.roles.cache.has(role.id)) {
          await member.roles.add(role);
          addedRoles.push(role.name);
        }
      }

      const embed = new EmbedBuilder()
        .setColor('#FFD6A5')
        .setTimestamp()
        .setDescription(`
# <:aa_tick:1482041798221369354> **pastry promoter setup complete**
hey there, ${member}

<:aa_star:1478802523190984727> **nickname updated**
> ${newNickname}

<:aa_heart:1478802351279312928> **details**
> **name** :: ${displayName}
> **role** :: pastry promoter  
> **timezone** :: ${timezone}

<:aa_exclaim:1481030077121564894> **roles added**
> ${addedRoles.length ? addedRoles.join(', ') : 'no new roles added'}
        `)
        .setFooter({ text: 'Ava’s Assortments • Staff Setup' });

      await message.channel.send({ embeds: [embed] });

    } catch (error) {
      console.error(error);
      message.channel.send('could not update that member 💔').catch(() => {});
    }
  }
};