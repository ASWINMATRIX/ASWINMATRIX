const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '917736598606@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        
const array = ['alive','@༄PʀɪɴᴄEʳᶹᵈʰ࿐','Ayin','aliya','am','Aktf','Aa','Alone','Ah','Alo','Aliya','Aliyo','alone','ano','athan','ara','Ardra','ayilla','ayn','annan','bott','Bott','aysheri','Ayyo','Ara','bilal','Bilal','bye','Broken','Black','baby','Bgm','Bro','Back','bad boy','Bad','Bot','bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','broken','brokenlove','Bye','Cr7','Chunke','chunk','chaya','comrade','chota mumbai','care','Chathi','chatho','Chathy','chechi','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cristiano','Cry','Daa','Dude sir','Darling','da','Dai','DD','die','Da','Dora','enthada','eda','Eee','Enne','en','ellarum','En','enne','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Feel','fvrt','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Good mrng','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Haa','Happy','Hallo','Hai','help','Hm','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i','Ikka','i am back','ijathi','jd','Joker','Kycho','Kollam','Kozhi','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kunju','kunna','Kurup','Kutty','Life','Leo','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','love','Myre','Mm','Mamooka','Missing','Mine','maari','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','Messi','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Njn','nokk','n','Nalla','N','Nanban','nanba','Nanba','Nee','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oo','onam','Onam','Ooi','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Para','poyo','pm','Pm','palaji','Poda','Paat','poda','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Prince','prince','Psycho','uyr','Uyir','Uyr','Umma','Rockyser','Rip','rip','rocky','Ramos','rascal','Rashmika','rashmika','rasool','return','Rocky','Rose','Single','Sett','Show','Scn','Song','song','Sad','Sed','sad','Sahva','saji','Sayip','scene','Sed aayi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','sorry','Sry','Subscribe','sulthan','Super','thalapathy','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Vathi','Vaathi','Va','Vaa','vada','Vava','Veeran','venda','Vijay','verithanam','Vidhi','welcome','Wait','waiting','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '917736598606@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./eva/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./eva/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Hi','pro','coming','alive','list','go','menu','koii','update','wait','Mrng','Amalser','like','bad','amal','nice','link','Farhan','Hii','ok','myr','set','ayo','i want','help','working','life','Da','fix','Amalsir','promiss','sed','old','fek','Kozhi','ee','Single','one side','muthe','Aliya','audio','oh','something','Myre','caption','di','love','you','update now','super','iwa','erorr','status','Dii','Di','feel','kuppy','bst','maduthu','niyo','what','but y','chakare','mone','uyir','friends','owner','shit','fan','fans','Broken','E bullet','Hello','over','ayikotte','kollam','muthe','propose','rain','kozhi','Adithhari']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./eva/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./html/photo/Eva.png')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '917736598606@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Amalser','chaya','escape','truth','hm','pottan','oh','nokk','nude','oo','kali','Remove','bot','lost','copy','Da','come','sex','help','sorry','podi','nee','done','kalam','Di','Dey','oho','Welcome','Nanba','ee','Hello','para','kindi','list','check','podey','odiko','save','Hii','oii','sad','sed','thenga','bad','run','remove','love','kick','enth','alive','amal','menu','ella','unmute','mute']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
Asena.addCommand({on: 'text', fromMe: false,onlyGroup: true}, (async (message, match) => {

    if(Config.THERI_KICK){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
        var us = await checkUsAdmin(message)
        var im = await checkImAdmin(message)
        if (!im) return;
        if (us) return;
await message.client.sendMessage(message.jid,Lang.KICK, MessageType.text, {quoted: message.data });  
await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
 Asena.addCommand({on: 'text', fromMe: false, onlyPm: true}, (async (message, match) => {

    if(Config.PLKS){
const array = afnp 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){          
await message.client.sendMessage(message.jid,Lang.KICK2, MessageType.text, {quoted: message.data });               
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));




