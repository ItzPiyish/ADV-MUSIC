const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'later';
        const InstagramLink = 'later';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Piyush aka Itz_Genius. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [Contact Me](})\n )`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

   DISCORD SERVER : https://discord.gg/j4PnmsF4MD
   

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/j4PnmsF4MD ]
*/
