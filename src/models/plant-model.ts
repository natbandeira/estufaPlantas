// representa os dados 
// define a estrutura das plantas e cria Schema do MongoDB

import mongoose, { Schema , Document } from 'mongoose';

// interface para a classe Plant
export interface IPlant {
    nome: string;
    nomeCientifico?: string;
    dataChegada: string;
    origem: string;
    dataUltimaAdubacao?: string;
    tipoAdubo?: string;
    dataUltimoTratamento?: string;
    tipoTratamento?: string;
    nomePraga?: string;
    plantaAtiva?: boolean;
}

// interface para representar o documento no MongoDB
export interface IPlantDocument extends Document {
    nome: string;
    nomeCientifico?: string;
    dataChegada: string;
    origem: string;
    dataUltimaAdubacao?: string;
    tipoAdubo?: string;
    dataUltimoTratamento?: string;
    tipoTratamento?: string;
    nomePraga?: string;
    plantaAtiva?: boolean;
}

// schema do Mongoose
const PlantSchema: Schema = new Schema<IPlantDocument>({
    nome: { type: String, required: true },
    nomeCientifico: { type: String},
    dataChegada: { type: String, required: true },
    origem: { type: String, required: true },
    dataUltimaAdubacao: { type: String },
    tipoAdubo: { type: String },
    dataUltimoTratamento: { type: String },
    tipoTratamento: { type: String },
    nomePraga: { type: String },
    plantaAtiva: { type: Boolean },
}, {
  timestamps: true // add createdAt e updatedAt automaticamente
});

export const PlantModel = mongoose.model<IPlantDocument>('Plant', PlantSchema);