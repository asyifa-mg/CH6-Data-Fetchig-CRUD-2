import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Doctor = db.define(
  "doctors",
  {
    name: DataTypes.STRING,
    spesialis: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  },
  {
    freezeTableName: true,
  }
);

export default Doctor;

(async () => {
  await db.sync();
})();
