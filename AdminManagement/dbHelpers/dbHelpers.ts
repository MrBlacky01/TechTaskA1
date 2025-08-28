import { DB } from "./dbContext";
import * as fs from "fs";
import * as path from 'path';

const DATA_FILE = path.join(__dirname, "../dbEmulation/data.json");

export function readDB(): DB {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
}

export function writeDB(db: DB): void {
    fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}