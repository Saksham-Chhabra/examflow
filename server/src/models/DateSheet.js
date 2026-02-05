// models/DateSheet.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Subject from "./Subject.js";
import Exam from "./Exam.js";
import TimeSlot from "./TimeSlot.js";

const DateSheet = sequelize.define(
  "DateSheet",
  {
    datesheet_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    exam_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "datesheet",
    timestamps: false,
  }
);

DateSheet.belongsTo(Subject, { foreignKey: "subject_id" });
DateSheet.belongsTo(Exam, { foreignKey: "exam_id" });
DateSheet.belongsTo(TimeSlot, { foreignKey: "slot_id" });

export default DateSheet;
