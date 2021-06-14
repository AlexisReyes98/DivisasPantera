import { Router } from 'express';

import divController from '../Controllers/divController';

class DivRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:num:e, contra-e', divController.getEmpleado);
        this.router.get('/:num:c, contra-s', divController.getSocio);
    }

}

export default new DivRoutes().router;