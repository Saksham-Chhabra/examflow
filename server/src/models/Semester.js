// models/Semester.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Year from "./Year.js";

const Semester = sequelize.define(
  "Semester",
  {
    semester_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    semester_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "semester",
    timestamps: false,
  }
);

Semester.belongsTo(Year, { foreignKey: "year_id" });
Year.hasMany(Semester, { foreignKey: "year_id" });

export default Semester;
