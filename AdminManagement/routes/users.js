"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dbHelpers_1 = require("../dbHelpers/dbHelpers");
const router = express.Router();
router.get('/', (req, res) => {
    const db = (0, dbHelpers_1.readDB)();
    res.json(db.users);
});
router.patch("/:id/roles", (req, res) => {
    const db = (0, dbHelpers_1.readDB)();
    const userId = parseInt(req.params.id, 10);
    const { roles } = req.body;
    const user = db.users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const invalidRoles = roles.filter((r) => !db.roles.some(role => role.id === r));
    if (invalidRoles.length > 0) {
        return res
            .status(400)
            .json({ message: `Invalid role IDs: ${invalidRoles.join(", ")}` });
    }
    user.roles = roles;
    (0, dbHelpers_1.writeDB)(db);
    res.json(user);
});
exports.default = router;
//# sourceMappingURL=users.js.map