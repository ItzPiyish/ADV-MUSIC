const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1236906908162719774/1236920865862451200/Music_GIF_-_Music_-_Discover__Share_GIFs.gif?ex=6639c3d3&is=66387253&hm=2f7118e4f9a290a38bf73f944239dd52fa2dd53809379d9f9d21624656179e79&', 
        url: 'https://discord.gg/j4PnmsF4MD'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Itz_Genius](https://youtube.com/@androiddiscordtips50?si=fXZZtJUkvD4orLcn)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&`);

    const button1 = new ButtonBuilder()
      .setLabel('Contact Me')
      .setURL('https://cdn.discordapp.com/attachments/708704067928719362/1236926986371465216/image.png?ex=6639c986&is=66387806&hm=a947300b9f6ffd7cd02691c85c4359c2bbe1341026b30209d3081a0e777acbe3&')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/J7XNKb4MqS')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/ItzPiyish/ADV-MUSIC')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
