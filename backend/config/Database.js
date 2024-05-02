import { Sequelize } from "sequelize";

const db = new Sequelize("crud_reactjs", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
