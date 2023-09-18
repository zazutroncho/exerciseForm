import express from 'express';
import {Handler} from '../handlers/Handler.js';
import {contactFormProcessUtilities} from '../handlers/contactFormProcessUtilities.js';

const router = express.Router();

router.get("/hola", Handler.salute);
router.post("/contactForm", contactFormProcessUtilities.isValidEmail);

export {router};