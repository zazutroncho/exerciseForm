import express from "express";

export class Handler {
    static salute(req: express.Request, res: express.Response){
        res.send("Hola Mundo");
    }
}