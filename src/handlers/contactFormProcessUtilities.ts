import express from "express";

export class contactFormProcessUtilities{
    static isValidEmail(req: express.Request, res: express.Response){
        const emailValidPatern =/.+@xarxatecactiva\.com$/;
        if (emailValidPatern.test(req.body.mailAddress)){
            res.send(`<p>Nombre: ${req.body.userName}</p><p>Apellido: ${req.body.userSurname}</p><p>Email: ${req.body.mailAddress}</p>`);
        }else{
            res.send(`<p>Este correo no es válido</p>`); 
        }
    }

}