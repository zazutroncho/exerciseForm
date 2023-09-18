"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const Handler_js_1 = require("../handlers/Handler.js");
const contactFormProcessUtilities_js_1 = require("../handlers/contactFormProcessUtilities.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/hola", Handler_js_1.Handler.salute);
router.post("/contactForm", contactFormProcessUtilities_js_1.contactFormProcessUtilities.isValidEmail);
