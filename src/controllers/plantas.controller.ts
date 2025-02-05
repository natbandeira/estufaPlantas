import { Request, Response } from 'express';
import { Planta } from '../models/Planta.model';

export const addPlanta = async (req: Request, res: Response) => {
    try {
        const novaPlanta = new Planta(req.body);
        await novaPlanta.save();
        res.status(201).json({ message: `A Plantinha ${novaPlanta.nome} foi adicionada com sucesso :D`});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Eita.. não rolou de adicionar essa plantinha agora.'})
    }
};