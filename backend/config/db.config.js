require("dotenv").config();

module.exports = {
  HOST: "ep-wild-bonus-a1v232jb-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "t9QTYDnRq8yc",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
