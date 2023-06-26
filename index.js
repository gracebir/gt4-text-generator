import { Configuration, OpenAIApi} from 'openai'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

const config = new Configuration({
    organization: process.env.organization_id,
    apiKey: process.env.api_key
})

const openai = new OpenAIApi(config)
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(cors())

app.post('/', async (req, res) => {
    const { message } = req.body
    const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [
            {
                role: "user", content: `${message}`
            }
        ]
    })
    res.json({
        completion: completion.data.choices[0].message
    })
}) 


app.listen(port, ()=> {
    console.log(`server run on port ${port}`)
})
