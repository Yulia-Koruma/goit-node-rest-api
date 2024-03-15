import express from "express";
const ctr = require("../controllers/contactsControllers.js");
const validateBody = require("../helpers/validateBody.js");
const {createContactSchema} = require("../schemas/contactsSchemas.js");
const {updateContactSchema} = require("../schemas/contactsSchemas.js");


const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBode(createContactSchema), ctrl.createContact);

contactsRouter.put("/:id", 
validateDody(updateContactSchema),
ctrl.updateContact);

module.export = contactsRouter;