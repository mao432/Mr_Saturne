const Discord = require("discord.js");

var prefix = "^^";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("Fait : ^^Aide | En cour de développement", {
        type:"STREAMING",
        url:"https://www.twitch.tv/test"
    });
    console.log("Connection en cour ...");
    console.log(bot.user.username);
    console.log(bot.user.id);
    console.log("Le bot est en ligne !!");
    console.log("----------------------");
});
//Constance / Variable :
const couleur = [
  '00FFBD',
  'FF00B2',
  '00F725',
  'BD0101',
  'FF0000',
]

// Commande Divers:

bot.on('message', function (message) {
    if (message.content == 'salut') {
      message.delete()
    const embed = new Discord.MessageEmbed()
      .setColor("6A3497")
      .setTitle(`salut ça va ??`)
      .setImage("https://cdn.discordapp.com/emojis/665623515898052630.gif?v=1")
      .setFooter(`${message.author.username}`, "https://cdn.discordapp.com/attachments/715671122581913601/715884867283320932/mr_saturne.jpg")  
      message.channel.send(embed)
      .then (r => {
        r.react('👍')
        r.react('👎'); 
      })
    } 
    else if (message.content === `${prefix}Info`) {
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("FF00B2")
        .setTitle(`Info de : ${message.author.username}`)  
        .addField("Dernier Message :", `${message.author.lastMessage}`, false)
        .addField("Dernier Message Id :", `${message.author.lastMessageID}`, false)        
        .addField("Tag de l'utilisateur :", `${message.author.tag}`, false)  
        .addField("Dâte de la Création du Compte :", `${message.author.createdAt}`, false)  
        .addField("Arrivé sur le serveur :", `${message.guild.joinedAt}`, false)   
        .setImage(`${message.author.displayAvatarURL()}`) 
        message.channel.send(embed)    
    }
    if (message.content === `${prefix}Serveur`) {
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("00FFBD")
        .setTitle(`Nom du Serveur : ${message.guild.name}`)
        .addField("Id du Serveur :", `${message.guild.id}`, false) 
        .addField("Fondateur du Serveur discord :", `${message.guild.owner}`, false) 
        .addField("Id Fondateur du Serveur discord :", `${message.guild.ownerID}`, false)  
        .addField("Région du Serveur discord :", `${message.guild.region}`, false)  
        .addField("Dâte de la création du Serveur:", `${message.guild.createdAt}`, false) 
        .addField("Nombre de membre du Serveur:", `${message.guild.memberCount} Personnes`, false) 
        .setImage(`${message.guild.iconURL()}`)           
        message.channel.send(embed) 
    }
    else if (message.content === `${prefix}Support`) {
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("00F725")
        .setTitle("Voici le Support :")
        .setDescription("🔮 Si tu as besoin d'aide viens sur notre Discord 🔮\n\n😄 tu pourras proposé des idée , des améliorations à faire et bien plus... 😄  ")
        .addField("Discord du Support :", "https://discord.gg/TGrgU4e", false)
        .addField("Lien d'invitation du Bot :", "https://discord.com/api/oauth2/authorize?client_id=695576731683127328&permissions=8&scope=bot", false)  
        .addField("Mise à Jour du Bot :", "à Venir ...", false)     
        .setImage("https://cdn.discordapp.com/attachments/715671122581913601/715884867283320932/mr_saturne.jpg")
        .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        message.channel.send(embed) 
    }
    else if (message.content === `${prefix}Partenaire`) {
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("A60202")
        .setTitle("Voici nos Partenaire :")
        .setDescription("Si tu veux être partenaire rejoint le discord du support commande ^^Support")
        .addField("Discord Gigi Squad :" , "https://discord.gg/jqUtfDf" , true)
        .addField("Discord papolon Army ☮:" , "https://discord.gg/59KUFGQ" , true)
        .setImage("https://cdn.discordapp.com/attachments/715671122581913601/715884867283320932/mr_saturne.jpg")
        .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        message.channel.send(embed) 
    }
    if (message.content === `${prefix}Fichier`) {
      message.delete()
    const embed = new Discord.MessageEmbed()
      .setColor("6A3497")
      .setTitle(`⛔ Dsl mais les Fichier ne sont pas admis ici !! ⛔`)
      .setImage("https://cdn.discordapp.com/attachments/716395976205533244/721997558897049621/non-mais-ca-va-pas-la-tete-avec-donald.gif")
      .setFooter(`Mr Saturne `, "https://cdn.discordapp.com/attachments/715671122581913601/715884867283320932/mr_saturne.jpg")  
      message.channel.send(embed)
    }
////////////////

// Commande Modération:

    if (message.content === `${prefix}Fermer`) {
      message.delete()
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("📌 tu n'as pas la permission ...")
      let channel = message.channel;
      channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false })
      const embed = new Discord.MessageEmbed()
      .setColor("40A497")
      .setTitle("🔒 ... Salon Verrouiller ... 🔒")  
      .setFooter(`Salon Verrouiller par ${message.author.username}`, "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
      .setTimestamp()
      message.channel.send(embed)
    }

    if (message.content === `${prefix}Ouvert`) {
      message.delete()
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("📌 tu n'as pas la permission ...")
      let channel = message.channel;
      channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true })
      const embed = new Discord.MessageEmbed()
      .setColor("40A497")
      .setTitle("🔓 ... Salon Déverrouiller  ... 🔓")  
      .setFooter(`Salon Déverrouiller  par ${message.author.username}`, "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
      .setTimestamp()
      message.channel.send(embed)
    }
let command = message.content.split(" ")[0];

let args = message.content.split(" ").slice(1);

    if (command === `${prefix}Say`) {
      message.delete()
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("📌 tu n'as pas la permission ...")
      var Couleur = couleur[Math.floor(Math.random() * couleur.length)]
      const embed = new Discord.MessageEmbed()
      .setColor(Couleur)
      .setTitle(args.join(" "))
      .setFooter(`message envoyer par ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setTimestamp()
      message.channel.send(embed)
    } 
    if (command === `${prefix}Message`) {
      message.delete()
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("📌 tu n'as pas la permission ...")
      message.channel.send(args.join(" "))
    }
    if (command === `${prefix}Vote`) {
      message.delete()
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("📌 tu n'as pas la permission ...")
      const embed = new Discord.MessageEmbed()
      .setColor("FF0068")
      .setTitle(args.join(" "))
      .setFooter(`Vote proposé par ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setTimestamp()
      message.channel.send(embed)
      .then (r => {
        r.react('✔')
        r.react('❌'); 
      })
    }
    if(command === `${prefix}Kick`) {
      message.delete()
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("📌 tu n'as pas la permission ...")
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.kick(reason);
      const embed = new Discord.MessageEmbed()
      .setColor("FF0068")
      .setTitle(`${member.user.username} à été Kick par ${message.author.username} `)
      .setDescription('Raison du Kick : ' + reason)
      .setTimestamp()
      message.channel.send(embed)
    }
    if(command === `${prefix}Ban`) {
      message.delete()
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("📌 tu n'as pas la permission ...")
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.ban(reason);
      const embed = new Discord.MessageEmbed()
      .setColor("FF0068")
      .setTitle(`${member.user.username} à été Banni par ${message.author.username} `)
      .setDescription('Raison du Ban : ' + reason)
      .setTimestamp()
      message.channel.send(embed)
    }   
////////////////

//Fun : 
  if (message.content === `${prefix}Epileptique`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setImage("https://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/img-53703314d1.gif?v=18")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `${prefix}Tg`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setImage("https://cdn.discordapp.com/attachments/617642024987787287/647126073904988210/image0.gif")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `${prefix}Cheh`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setImage("https://thumbs.gfycat.com/SecondPhysicalCuscus-size_restricted.gif")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `${prefix}FBI`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setImage("https://cdn.discordapp.com/attachments/685160674166440116/688309911461036034/ZigzagVagueGeese-size_restricted.gif")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `${prefix}Apéro`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setTitle("Tous à l'apéritif !!!")
    .setImage("https://cdn.discordapp.com/emojis/723169505009860608.gif?v=1")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `${prefix}Choqué`) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setTitle("Je suis choqué")
    .setImage("https://cdn.discordapp.com/emojis/723169504884162578.gif?v=1")
    .setFooter(`Envoyer par ${message.author.username}`)
    message.channel.send(embed)
  }
  if (message.content === `Dés`) {
    message.delete()
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    const embed = new Discord.MessageEmbed()
    .setColor("40A497")
    .setTitle(`${message.author.username}`)
    .setDescription(`🎲 Vous avez lancé le Dé et vous êtes tombé sur le chiffre 🎲 : `  +  diceRoll)
    message.channel.send(embed)
  }

// Carte :

  const rando_imgs = [
    'https://cdn.discordapp.com/emojis/723903815413268511.png?v=1', //8
    'https://cdn.discordapp.com/emojis/723903815211941959.png?v=1', //9
    'https://cdn.discordapp.com/emojis/723903815362936872.png?v=1',
    'https://cdn.discordapp.com/emojis/723903815362936833.png?v=1', //roi
    'https://cdn.discordapp.com/emojis/723903815463731272.png?v=1', //valet
    'https://cdn.discordapp.com/emojis/723903815211941938.png?v=1', //as
    'https://cdn.discordapp.com/emojis/723906200822874152.png?v=1', // 7
    'https://cdn.discordapp.com/emojis/723906200759959622.png?v=1', //6
    'https://cdn.discordapp.com/emojis/723906200718278757.png?v=1', //5
    'https://cdn.discordapp.com/emojis/723906200835588116.png?v=1', //4
    'https://cdn.discordapp.com/emojis/723906200365826121.png?v=1', //3
    'https://cdn.discordapp.com/emojis/723906200495980595.png?v=1', //2
  ]
//
  if (message.content === `Carte`) {
    message.delete()
    var Couleur = couleur[Math.floor(Math.random() * couleur.length)]
    var Imagevar = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    const embed = new Discord.MessageEmbed()
    .setColor(Couleur)
    .setTitle(`${message.author.username}`)
    .setDescription(`Tu as pioché une carte, Tu es tombé sur :`)
    .setImage(Imagevar)
    message.channel.send(embed)
  }
//Autre :
if (message.content == 'pds') {
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("40A497")
  .setTitle(`${message.author.username}`)
  .setDescription('🧰 Vien de prendre son Service !!! 🔨')
  .setTimestamp()
  message.channel.send(embed)
}

if (message.content == 'fds') {
   message.delete()
   const embed = new Discord.MessageEmbed()
   .setColor("FF0000")
   .setTitle(`${message.author.username}`)
   .setDescription('🧰 Vien de prendre ça Fin de son Service !!! 🔨')
   .setTimestamp()
  message.channel.send(embed)
}

//////////////

if (message.content === `${prefix}RaidmodeON`){
  message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("0040FF")
    .setTitle("⛔ Le Raidmode a été activé ⛔")         
    .setFooter(`Raidmode activé par ${message.author.username}`, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed)
}
if (message.content === `${prefix}RaidmodeOFF`){
  message.delete()
    const embed = new Discord.MessageEmbed()
    .setColor("0040FF")
    .setTitle("⛔ Le Raidmode a été activé ⛔")         
    .setFooter(`Raidmode activé par ${message.author.username}`, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed)
}

//////////////

if (message.content === `${prefix}Bienvenue`) {
  message.delete()
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("📌 tu n'as pas la permission ...")
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("0040FF")
  .setTitle(`Salut Bienvenue sur notre serveur ${message.guild.name} 

Fait ta vérification pour rejoindre notre Serveur et
Pour pouvoir voir le reste du Serveur !!
  `)
  .setDescription(`

  Pour pouvoir accéder au reste du serveur il faut :

  * Faire le formulaire de vérification :

  ...Bienvenue sur Vice City...

  Prénom :
  Age :
  Garçon / Fille :
  Pseudo Roblox :
  Depuis quand connaissez vous Vice City ? :
  Comment avez vous connu ce serveur ? :
  Etes vous hackeur ou avez vous déjà hacker ? :
  Sais tu ce que c'est un Exploit ? :
  Avez vous eu des problème avec d'autre serveur ? :
  Avez vous déjà eu des warn, kick ou ban :
  Nom + prénom RP :

  Nous te remercions d'avance :D !!!
  `)
  .setImage("https://cdn.discordapp.com/emojis/665622099783581719.gif?v=1")
  .setFooter(`message envoyer par ${message.author.username}`)
 message.channel.send(embed)
}

////////////////
//Aide:

     if (message.content === `${prefix}Aide`){
      message.delete()
      var Couleur = couleur[Math.floor(Math.random() * couleur.length)]
        const embed = new Discord.MessageEmbed()
        .setColor(Couleur)
        .setThumbnail("https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setAuthor("Mr.Saturne", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setTitle("📜 Voici la Page d'Aide : 📜")         
        .setDescription("Voici ma liste des commandes : , Mon prefix est : ^^")
        .addField("Modération", "Voir les commandes de Modération", false)
        .addField("Divers", "Voir les commandes Divers", false)       
        .addField("Fun", "Voir les commandes de Fun", false)
        .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        
        message.channel.send(embed)
    }

//Modération
    if (message.content === `${prefix}Modération`){
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("FFFF00")
        .setThumbnail("https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setAuthor("Mr.Saturne", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setTitle("⚖ Bienvenue dans mes commandes de Modération ⚖")         
        .setDescription("Voici ma liste des commandes : , Mon prefix est : ^^")
        .addField("Kick", "à venir", true)
        .addField("Ban", "à venir", true)       
        .addField("Warn", "à venir", true)
        .addField("Unwarn", "à venir", true)
        .addField("Mute", "à venir", true)
        .addField("UnMute", "à venir", true)
        .addField("Say", "Envoie un embed , un message au nom du bot", true)
        .addField("Message", "Envoie un message au nom du bot", true)
        .addField("Fermer", "Permet de Verrouiller le salon", true)
        .addField("Ouvert", "Permet de Déverrouiller le salon", true)
        .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        
        message.channel.send(embed)
    }

//Divers:

    if (message.content === `${prefix}Divers`){
      message.delete()
        const embed = new Discord.MessageEmbed()
        .setColor("FF0000")
        .setThumbnail("https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setAuthor("Mr.Saturne", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
        .setTitle("🎆 Bienvenue dans mes commandes de Divers 🎆")         
        .setDescription("Voici ma liste des commandes : , Mon prefix est : ^^")
        .addField("Info", "Avoir ces Informations", false)
        .addField("Vote", "Permet de faire un vote", false)        
        .addField("Serveur", "Avoir les Information du serveur", false)       
        .addField("Support", "Avoir les Information du Support", false)
        .addField("à faire sans le prefix : salut", "Le bot te répond salut comment tu va", false)
        .addField("à faire sans le prefix : pds", "Le bot te dit que tu as prit ton Service !!", false)
        .addField("à faire sans le prefix : fds", "Le bot te dit que tu as prit ta fin Service !!", false)
        .addField("Partenaire", "Montrer Nos partenaire", false)       
        .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")

        message.channel.send(embed)
    }

//Fun:

    if (message.content === `${prefix}Fun`){
      message.delete()
       const embed = new Discord.MessageEmbed()
       .setColor("5E610B")
       .setThumbnail("https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
       .setAuthor("Mr.Saturne", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
       .setTitle("🎈 Bienvenue dans mes commandes de Fun 🎈")         
       .setDescription("Voici ma liste des commandes : , Mon prefix est : ^^")
       .addField("Epileptique", "Envoie un Gif pour les Epileptiques", false)
       .addField("Tg", "Envoie un Gif pour dire ta gueulle", false)   
       .addField("Cheh", "Envoie un Gif pour dire Cheh", false) 
       .addField("FBI", "Envoie un Gif FBI", false)   
       .addField("Apéro","Envoie un Gif pour réunir tout le monde à l'apéritif", false)
       .addField("Choqué","Envoie un Gif pour dire que tu es choqué", false)
       .addField("à faire sans le prefix : Dés","Lance un Dé", false)
       .setFooter("Bot créer par Mao 😎", "https://cdn.discordapp.com/attachments/710990961588699209/715572876446793768/images_4.jpg")
       message.channel.send(embed)
    }

//Lyon RP :
  if (message.content === `${prefix}Melvin`) {
    message.delete()
  const embed = new Discord.MessageEmbed()
    .setColor("00A2FF")
    .setTitle(`Salut à tous Voici ma chaine Youtube MelviNes :`)
    .setDescription('https://www.youtube.com/channel/UCmftZjvKrST1vPlU7-oc4gA')
    .setFooter(`Chaine Youtube : MelviNes Like , Abonne toi !! `)  
    message.channel.send(embed)
  }  
////////////////
});

bot.login(process.env.TOKEN);
