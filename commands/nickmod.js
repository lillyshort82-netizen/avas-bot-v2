const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'nickmod',

  async execute(message, args) {
    message.delete().catch(() => {});

    // staff only
    if (!message.member.roles.cache.some(role => role.name === '𓆩 ───── staff ───── 𓆪')) {
      return;
    }

    const member = message.mentions.members.first();
    if (!member) {
      return message.channel.send('usage: `!nickmod @user name timezone`').catch(() => {});
    }

    // remove mention from args
    const filteredArgs = args.filter(arg => !arg.startsWith('<@'));

    if (filteredArgs.length < 2) {
      return message.channel.send('usage: `!nickmod @user name timezone`').catch(() => {});
    }

    const displayName = filteredArgs[0];
    const timezone = filteredArgs.slice(1).join(' ');

    const newNickname = `${displayName} ୨୧ mod ､､ ${timezone}`;

    // roles to auto add
    const rolesToAdd = [
      '1478792139281403994',
      '1478792255828393984',
      '1478785149721252061'
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
        .setColor('#A8D5BA')
        .setTimestamp()
        .setDescription(`
# <:aa_tick:1482041798221369354> **moderator setup complete**
hey there, ${member}

<:aa_star:1478802523190984727> **nickname updated**
> ${newNickname}

<:aa_heart:1478802351279312928> **details**
> **name** :: ${displayName}
> **role** :: mod
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