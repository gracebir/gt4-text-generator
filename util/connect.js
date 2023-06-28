import mongoose from "mongoose";
const mongo_uri = process.env.mongo_uri

mongoose.connect(mongo_uri, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    console.log('we are connected')
)

export {
    mongoose
}