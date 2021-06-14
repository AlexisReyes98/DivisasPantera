import { Request, Response } from 'express';

import db from '../database';

class DivController {

    public async getEmpleado(req: Request, res: Response): Promise<any> {
        const { num_e } = req.params;
        const { contra_e } = req.params;
        const var1 = await db.query('SELECT * FROM empleados WHERE num_e = ?', [num_e]);
        const var2 = await db.query('SELECT * FROM empleados WHERE contra_e = ?', [contra_e]);
        console.log(var1.length);
        console.log(var2.length);
        if (var1.length > 0 && var2.length > 0) {
            return res.json(var1[0]+var2[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async getSocio(req: Request, res: Response): Promise<any> {
        const { num_c } = req.params;
        const { contra_s } = req.params;
        const var1 = await db.query('SELECT * FROM empleados WHERE num_e = ?', [num_c]);
        const var2 = await db.query('SELECT * FROM empleados WHERE contra_e = ?', [contra_s]);
        console.log(var1.length);
        console.log(var2.length);
        if (var1.length > 0 && var2.length > 0) {
            return res.json(var1[0]+var2[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

}

const divController = new DivController;
export default divController;