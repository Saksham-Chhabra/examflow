// models/Subject.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Branch from "./Branch.js";
import Semester from "./Semester.js";

const Subject = sequelize.define(
  "Subject",
  {
    subject_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "subject",
    timestamps: false,
  }
);

Subject.belongsTo(Branch, { foreignKey: "branch_id" });
Branch.hasMany(Subject, { foreignKey: "branch_id" });

Subject.belongsTo(Semester, { foreignKey: "semester_id" });
Semester.hasMany(Subject, { foreignKey: "semester_id" });

export default Subject;
