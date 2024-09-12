const Financial = require("../models/financial.model");

// Create a new Financial record
exports.create = async (req, res) => {
  const { userID, date, description, amount, category, paymentMethod } =
    req.body;
  const newRecord = {
    userID,
    date,
    description,
    amount,
    category,
    paymentMethod,
  };
  Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .send({
          message:
            error.message ||
            "Some error occurred while saving the financial Record",
        });
    });
};

// Retrieve all financial records
exports.findAll = async (req, res) => {
  await Financial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while retrieving the financial Records",
      });
    });
};

// Retrieve all financial records by userID
exports.findAllByUserID = async (req, res) => {
  const userID = req.params.userID;
  await Financial.findAll({ where: { userID: userID } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while retrieving the financial Records by userID",
      });
    });
};

//Find a sigle final with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  await Financial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Financial record with id=${id}.`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: `Error retrieving Financial record with id=${id}`,
        error: error.message,
      });
    });
};


// Update a Financial record by id
exports.update = async (req, res) => {
    const id = req.params.id;

    await Financial.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Financial record was updated successfully."
            });
        } else {
            res.status(404).send({
                message: `Cannot update Financial record with id=${id}. Maybe Financial record was not found or req.body is empty!`
            });
        }
    })
    .catch(error => {
        res.status(500).send({
            message: `Error updating Financial record with id=${id}`,
            error: error.message
        });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await Financial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Financial record was deleted successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Financial record with id=${id}. Maybe Financial record was not found!`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: `Could not delete Financial record with id=${id}`,
        error: error.message,
      });
    });
};
