import { PlantModel, IPlant } from '../models/plant-model'
export class PlantService {
    // ok
    static async criarPlanta(novaPlanta: IPlant): Promise<IPlant> {
        return await PlantModel.create(novaPlanta);
    }
    // todo
    static async atualizarPlanta(nomePlanta: string, novosDados: Partial<IPlant>): Promise<IPlant> {
        const plantaAtualizada = await PlantModel.findOneAndUpdate(nomePlanta, novosDados, {new: true});
        if(!plantaAtualizada) {
            throw new Error(`Nenhuma planta com o nome '${nomePlanta}' foi encontrada :/`);
        }
        return plantaAtualizada;
    } 
    // ok
    static async mostrarPlanta(nomePlanta: string): Promise<IPlant[]> {
        return await PlantModel.find({ nome: nomePlanta });
    }
    // ok
    static async mostrarEstufa(): Promise<IPlant[]> {
        return await PlantModel.find();
    }
}