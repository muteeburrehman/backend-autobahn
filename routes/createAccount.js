import express from "express"
import {db, queryDatabase} from "../db/db";
import passport from "passport";

export const createRouter = express.Router();

createRouter.get('')