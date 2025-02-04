import mongoose from 'mongoose';

interface Planta {
    nome: string;
    dataChegada: Date;
    origem: string;
    dataUltimaAdubacao: Date; //não obrigatório
    tipoAdubo: string; //não obrigatório
}

const plantaSchema = new mongoose.Schema<Planta>({
    nome: { type: String, required: true},
    dataChegada: { type: Date, default: Date.now},
    origem: { type: String, required: true},
    dataUltimaAdubacao: { type: Date },
    tipoAdubo: { type: String }
});

export const Planta = mongoose.model<Planta>('Planta', plantaSchema);