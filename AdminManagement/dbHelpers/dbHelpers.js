"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDB = exports.readDB = void 0;
const fs = require("fs");
const path = require("path");
const DATA_FILE = path.join(__dirname, "../dbEmulation/data.json");
function readDB() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
}
exports.readDB = readDB;
function writeDB(db) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}
exports.writeDB = writeDB;
//# sourceMappingURL=dbHelpers.js.map