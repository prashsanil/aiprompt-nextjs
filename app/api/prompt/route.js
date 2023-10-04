import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (request) => {
    try {
        //connect to db
        await connectDB();

        const prompts = await Prompt.find({}).populate('creator');
        // console.log(prompts);

        return new Response(JSON.stringify(prompts), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch prompts", { status: 500 });
    }
}