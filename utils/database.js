import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectDB = async () => {
    mongoose.set('strict', true);

    if (isConnected) {
        console.log('Mongodb already Connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log("Mongodb Connected")
    } catch (error) {
        console.log(error);
    }
}