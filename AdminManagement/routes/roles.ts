import express = require('express');
import { readDB } from '../dbHelpers/dbHelpers';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const db = readDB();
    res.json(db.roles);
});

export default router;