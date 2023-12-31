
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ChatGPTClass = require('./chatGpt')


const createBotChatGpt = async({provider, database}) =>{
    return new ChatGPTClass(provider, database)
}


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([])
    const adapterProvider = createProvider(BaileysProvider)

    createBotChatGpt({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
