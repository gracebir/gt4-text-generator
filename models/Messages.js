import { mongoose } from '../util/connect'

const Messages = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isAi: {
        type: Boolean,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('messages', Messages)