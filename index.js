import { Configuration, OpenAIApi} from 'openai'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

const config = new Configuration({
    apiKey: process.env.api_key
})

const openai = new OpenAIApi(config)
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(cors())

app.post('/', async (req, res)=> {
    const {message } = req.body
    if(!message) return res.status(502).json({error:"message can't be empty"})
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 2048,
        temperature: 1
    })
    res.json({
        completion: completion.data.choices[0].text
    })
})

app.listen(port, ()=> {
    console.log(`server run on port ${port}`)
})
