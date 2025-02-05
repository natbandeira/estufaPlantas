import mongoose from 'mongoose';

interface Planta {
    nome: string;
    dataChegada: Date;
    origem: string;
    //não obrigatório
    dataUltimaAdubacao: Date; 
    tipoAdubo: string; 
    dataUltimoTratamento: Date; 
    tipoTratamento: string; 
    nomePraga: string; 
}

const plantaSchema = new mongoose.Schema<Planta>({
    nome: { type: String, required: true},
    dataChegada: { type: Date, default: Date.now},
    origem: { type: String, required: true},
    dataUltimaAdubacao: { type: Date },
    tipoAdubo: { type: String },
    dataUltimoTratamento: { type: Date },
    tipoTratamento: {type: String },
    nomePraga: { type: String}
});
                        
export const Planta = mongoose.model<Planta>('Planta', plantaSchema);