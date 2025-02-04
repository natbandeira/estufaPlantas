import { Router, Request, Response } from "express";

const router = Router();

router.post('/addPlanta', (req: Request, res: Response) => {
    try{        
        const novaPlanta = req.body;
        //lógica banco de dados
        res.status(201).json({ message: 'Plantinha adicionada com sucesso :D'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Não foi possível adicionar a plantinha no momento X_X'});
    }
});

router.get('/mostraPlantas', (req: Request, res: Response) => {
    try{
        // Lógica para buscar todas as plantas no banco de dados
        const todasPlantas = ''; // salva as plantas em uma const 
        res.status(201).json(todasPlantas);
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Não foi possível ver todas suas plantas :X'});
    }
});

router.put('/:id/adubacao', (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const infoAdubacao = req.body;
        // Lógica para atualizar a planta com o ID especificado no banco de dados
        res.status(200).json({ message: 'Plantinha atualizada com sucesso :D'});
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao atualizar a adubação :('});
    }
});