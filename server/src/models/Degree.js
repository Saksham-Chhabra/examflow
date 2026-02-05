// models/Degree.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Department from "./Department.js";

const Degree = sequelize.define(
  "Degree",
  {
    degree_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    degree_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "degree",
    timestamps: false,
  }
);

Degree.belongsTo(Department, { foreignKey: "department_id" });
Department.hasMany(Degree, { foreignKey: "department_id" });

export default Degree;
