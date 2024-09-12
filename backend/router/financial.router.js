const financialController = require("../controllers/financial.controller");
const express = require("express");
const router = express.Router();

//create a new financial
router.post("/",financialController.create)

router.get("/", financialController.findAll);

router.get("/user/:userID", financialController.findAllByUserID);

router.get("/:id", financialController.findOne);

router.put("/:id", financialController.update);

router.delete("/:id", financialController.delete);


module.exports = router;