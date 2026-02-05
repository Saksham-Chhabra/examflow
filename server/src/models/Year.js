// models/Year.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Year = sequelize.define(
  "Year",
  {
    year_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    year_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "year",
    timestamps: false,
  }
);

export default Year;
