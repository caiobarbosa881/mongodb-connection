import { Schema, model, connect} from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true},
    avatar: String,
});

const User = model<IUser>('User', userSchema);

run().catch(err => console.log(err));

async function run(){
    await connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

    const user = new User({
        name: 'Roberto',
        email: 'roberto@email.com',
        avatar: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    });
    await user.save();

    console.log(user.email);
}