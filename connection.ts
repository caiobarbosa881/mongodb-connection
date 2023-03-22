import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

class Database {
    private static instance: mongoose.Connection;
    
    private constructor() { }

    public static getInstance(): mongoose.Connection {
        if (!Database.instance) {
            Database.instance = mongoose.createConnection(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
        }

        return Database.instance;
    }
}

export default Database.getInstance();