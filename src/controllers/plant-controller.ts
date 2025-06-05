import { Request , Response } from 'express';
import { IPlant } from '../models/plant-model'
import { PlantService } from '../services/plant-service';

export class PlantController {
    // ok
    async criarPlanta (req: Request, res: Response): Promise<void> {
        try {
            const novaPlanta : IPlant = await PlantService.criarPlanta(req.body);
            res.status(201).json({
                message: `Plantinha "${novaPlanta.nome}" cadastrada com sucesso :D`,
                data: novaPlanta
            })
       } catch (error) {
            res.status(500).json({
                message: 'Falha ao registrar a plantinha x_x',
                error: (error as Error).message
            })
       }
    };

    async atualizarPlanta (req: Request, res: Response): Promise<void> {
        try {
            const { nomePlanta } = req.params;
            const { novosDados } = req.body;
            const plantaAtualizada = await PlantService.atualizarPlanta(nomePlanta, novosDados);
            res.status(200).json({
                message: `Plantinha "${nomePlanta}" ataulizada com sucesso :D`
            })
        } catch (error) {
            console.error('Falha ao atualizar a plantinha x_x');
            res.status(500).json({
                message: 'Falha ao atualizar a plantinha x_x',
                error: (error as Error).message
            })
        }
    }
    // ok 
    async mostrarPlanta (req: Request, res: Response): Promise<void> {
        try {
            const nomePlanta = req.params.nomePlanta;
            const planta = await PlantService.mostrarPlanta(nomePlanta);
            res.status(200).json(planta);
        } catch (error) {
            console.error('Falha ao mostrar plantinha x_x');
            res.status(500).json({
                message: 'Falha ao mostrar plantinha x_x',
                error: (error as Error).message
            })
        }
    }
    // ok
    async mostrarEstufa (req: Request, res: Response): Promise<void> {
        try {
            const plantasEstufa = await PlantService.mostrarEstufa();
            res.status(200).json(plantasEstufa);
        } catch (error) {
            console.error('Falha ao mostrar plantinhas da estufa x_x');
            res.status(500).json({
                message: 'FFalha ao mostrar plantinhas da estufa x_x',
                error: (error as Error).message
            })
        }
    }
}
