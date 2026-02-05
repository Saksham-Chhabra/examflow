// models/Branch.js
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Degree from "./Degree.js";

const Branch = sequelize.define(
  "Branch",
  {
    branch_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "branch",
    timestamps: false,
  }
);

Branch.belongsTo(Degree, { foreignKey: "degree_id" });
Degree.hasMany(Branch, { foreignKey: "degree_id" });

export default Branch;
