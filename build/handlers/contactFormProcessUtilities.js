"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactFormProcessUtilities = void 0;
class contactFormProcessUtilities {
    static isValidEmail(req, res) {
        const emailValidPatern = /.+@xarxatecactiva\.com$/;
        if (emailValidPatern.test(req.body.mailAddress)) {
            res.send(`<p>Nombre: ${req.body.userName}</p><p>Apellido: ${req.body.userSurname}</p><p>Email: ${req.body.mailAddress}</p>`);
        }
        else {
            res.send(`<p>Este correo no es válido</p>`);
        }
    }
}
exports.contactFormProcessUtilities = contactFormProcessUtilities;
