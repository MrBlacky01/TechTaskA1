import express = require('express');
import { readDB, writeDB } from '../dbHelpers/dbHelpers';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const db = readDB();
    res.json(db.users);
});

router.patch("/:id/roles", (req: express.Request, res: express.Response) => {
    const db = readDB();
    const userId = parseInt(req.params.id, 10);
    const { roles } = req.body as { roles: number[] };

    const user = db.users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const invalidRoles = roles.filter(
        (r: number) => !db.roles.some(role => role.id === r)
    );
    if (invalidRoles.length > 0) {
        return res
            .status(400)
            .json({ message: `Invalid role IDs: ${invalidRoles.join(", ")}` });
    }

    user.roles = roles;
    writeDB(db);

    res.json(user);
});

export default router;