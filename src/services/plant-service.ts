// interagir diretamente com o banco: criando, atualizando ou listando as plantas

import { PlantModel, IPlant } from '../models/plant-model'

export class PlantService {
    static async criarPlanta(novaPlanta: IPlant): Promise<IPlant> {
        return await PlantModel.create(novaPlanta);
    }

    static async listarPlantas(): Promise<IPlant[]> {
        return await PlantModel.find();
    }

    // static async atualizarPlanta(nomePlanta: string, novosDados: Partial<IPlant>): Promise<IPlant> {
    //     const plantaAtualizada = await PlantModel.findOneAndUpdate(nomePlanta, novosDados, {new: true});
    //     if(!plantaAtualizada) {
    //         throw new Error(`Nenhuma planta com o nome '${nomePlanta}' foi encontrada :/`);
    //     }
    //     return plantaAtualizada;
    // }
}