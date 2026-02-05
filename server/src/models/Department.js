// models/Department.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Department = sequelize.define(
  "Department",
  {
    department_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "department",
    timestamps: false,
  }
);

export default Department;
