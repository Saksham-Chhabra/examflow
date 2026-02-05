// models/TimeSlot.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const TimeSlot = sequelize.define(
  "TimeSlot",
  {
    slot_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "time_slot",
    timestamps: false,
  }
);

export default TimeSlot;
