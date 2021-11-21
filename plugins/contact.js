const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:PrinceRudh [OWNER]\n' // full name
            + 'ORG:PrinceRudh;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917736598606:+917736598606\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "EvaMwol [OWNER]", vcard: vcard}, MessageType.contact)
}))
