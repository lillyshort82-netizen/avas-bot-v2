const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'commands',

  async execute(message) {
    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor('#8CABCF')
      .setTimestamp()
      .setDescription(`
# <:aa_pin:1482068887205056572> **staff commands**
## <:aa_heart:1478802351279312928> **applications**
> <:aa_dot:1482042307338305556> ***!accepted*** :: __accept a user’s application__  
> <:aa_dot:1482042307338305556> ***!adminapp*** :: __send the admin application__  
> <:aa_dot:1482042307338305556> ***!courierapp*** :: __send the courier application__  
> <:aa_dot:1482042307338305556> ***!helperapp*** :: __send the helping hand application__  
> <:aa_dot:1482042307338305556> ***!modapp*** :: __send the moderator application__  
> <:aa_dot:1482042307338305556> ***!promoterapp*** :: __send the pastry promoter application__  

## <:aa_heart:1478802351279312928> **training core**
> <:aa_dot:1482042307338305556> ***!trainingstart @user*** :: __begin training for a user__  
> <:aa_dot:1482042307338305556> ***!trained @user*** :: __mark training as completed__  
> <:aa_dot:1482042307338305556> ***!2fa*** :: __send 2FA security requirement__  

## <:aa_heart:1478802351279312928> **moderator training**
> <:aa_dot:1482042307338305556> ***!mod1 @user*** :: __send moderator training part 1__  
> <:aa_dot:1482042307338305556> ***!mod2 @user*** :: __send moderator training part 2__  
> <:aa_dot:1482042307338305556> ***!mod3 @user*** :: __send moderator training part 3__  
> <:aa_dot:1482042307338305556> ***!mod4 @user*** :: __send moderator training part 4__  
> <:aa_dot:1482042307338305556> ***!modquiz @user*** :: __send moderator training quiz__  

## <:aa_heart:1478802351279312928> **pastry promoter training**
> <:aa_dot:1482042307338305556> ***!promo1 @user*** :: __send promoter training part 1__  
> <:aa_dot:1482042307338305556> ***!promo2 @user*** :: __send promoter training part 2__  
> <:aa_dot:1482042307338305556> ***!promo3 @user*** :: __send promoter training part 3__  
> <:aa_dot:1482042307338305556> ***!promo4 @user*** :: __send promoter training part 4__  
> <:aa_dot:1482042307338305556> ***!promoquiz @user*** :: __send promoter training quiz__  

## <:aa_heart:1478802351279312928> **helping hand training**
> <:aa_dot:1482042307338305556> ***!helper1*** :: __send helping hand training part 1__  
> <:aa_dot:1482042307338305556> ***!helper2*** :: __send helping hand training part 2__  
> <:aa_dot:1482042307338305556> ***!helper3*** :: __send helping hand training part 3__  
> <:aa_dot:1482042307338305556> ***!helper4*** :: __send helping hand training part 4__  
> <:aa_dot:1482042307338305556> ***!helperquiz*** :: __send helping hand training quiz__  

## <:aa_heart:1478802351279312928> **order updates**
> <:aa_dot:1482042307338305556> ***!75 @user*** :: __send 75% completion update__  
> <:aa_dot:1482042307338305556> ***!cancel @user reason*** :: __cancel an order__  
> <:aa_dot:1482042307338305556> ***!complete @user*** :: __mark order as complete__  
> <:aa_dot:1482042307338305556> ***!delay @user reason*** :: __notify of an order delay__  
> <:aa_dot:1482042307338305556> ***!delivered @user*** :: __confirm order delivery__  
> <:aa_dot:1482042307338305556> ***!nbh*** :: __send neighbourhood details__  
> <:aa_dot:1482042307338305556> ***!priority @user*** :: __sends the priority purchasing format__  
> <:aa_dot:1482042307338305556> ***!ready @user*** :: __notify order is ready__  

## <:aa_heart:1478802351279312928> **partnerships**
> <:aa_dot:1482042307338305556> ***!partnership*** :: __send partnership information / format__  

## <:aa_heart:1478802351279312928> **utility**
> <:aa_dot:1482042307338305556> ***!ping*** :: __check if the bot is online__  
      `)
      .setFooter({ text: 'Ava’s Assortments • Staff Commands' });

    message.channel.send({ embeds: [embed] });
  }
};