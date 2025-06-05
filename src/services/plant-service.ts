import { PlantModel, IPlant } from '../models/plant-model'
export class PlantService {
    static async criarPlanta(novaPlanta: IPlant): Promise<IPlant> {
        return await PlantModel.create(novaPlanta);
    }

    static async atualizarPlanta(nomePlanta: string, novosDados: Partial<IPlant>): Promise<IPlant> {
        const plantaAtualizada = await PlantModel.findOneAndUpdate({nome: nomePlanta }, novosDados);
        if(!plantaAtualizada) {
            throw new Error(`Nenhuma planta com o nome '${nomePlanta}' foi encontrada :/`);
        }
        return plantaAtualizada;
    } 

    static async mostrarPlanta(nomePlanta: string): Promise<IPlant[]> {
        return await PlantModel.find({ nome: nomePlanta });
    }

    static async mostrarEstufa(): Promise<IPlant[]> {
        return await PlantModel.find();
    }
}