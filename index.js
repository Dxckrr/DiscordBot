const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.json')

const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],    //Permisos
    partials: [Object.keys(Partials)],     //

})

client.setMaxListeners(0)




//-----------------A simple function to say 'Hi' -----------------------------//
client.on('messageCreate', async (message) => {
    if (message.content === '!ip') {
        return message.reply({ content: 'Holaaaa' })
    }
    if (message.content === 'hola') {
        return message.reply(`Hola ${message.author}`)          // message.autor = @autor  message.author.username == #authorId
    }
        

})



//---------Turn on the bot ----------------//
client.login(config.token).then((result) => {
    console.log(`${client.user.username} Esta conline`)
}).catch((err) => {
    console.log(err)
})