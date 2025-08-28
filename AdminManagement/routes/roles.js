"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dbHelpers_1 = require("../dbHelpers/dbHelpers");
const router = express.Router();
router.get('/', (req, res) => {
    const db = (0, dbHelpers_1.readDB)();
    res.json(db.roles);
});
exports.default = router;
//# sourceMappingURL=roles.js.map