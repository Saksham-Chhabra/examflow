// models/Exam.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Exam = sequelize.define(
  "Exam",
  {
    exam_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    exam_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    academic_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "exam",
    timestamps: false,
  }
);

export default Exam;
