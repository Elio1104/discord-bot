const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Choix de la faction')
            .setDescription('Réagissez en fonction de la faction que vous souhaitez rejoindre 👇')
            .setColor(0x1E90FF)
            .addFields(
                { value:`<@&833425243053752360>`, name: '<:triforce:833757314317287424>',inline: true},
                { value: `<@&833425233535959101>`, name:'<:mario:833757228921520208>',inline:true},
                { value: "<@&833425240767987712>", name  :'<:smash:833757020880240660>',inline:true},
                { value :'<@&833425242373881876>', name: '<:pokeball:833757111561224304>', inline:true},
            )
            .setAuthor('Fusajiro Yamaauchi', 'https://cdn.discordapp.com/attachments/750360471508353155/833805575497449472/220px-Fusajiro_Yamauchi.png')
            .setImage('https://cdn.discordapp.com/attachments/750360471508353155/833805789352165386/Nintendo-Logo-1970-1975.png'))
    },
    name: 'embed'
}