require('dotenv').config();
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

async function connectMongo(){
    try {
        await client.connect();
        console.log('Conectado ao MongoDB :D');
        return client.db("Estufa2025");
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB.. X_X', error);
    }
}

connectMongo();
