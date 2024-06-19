

import { CreationOptional, DataTypes, Model } from "sequelize";
import db from '.';
import { Iteams } from "../../Interfaces/ITeams";


export default class Teams extends Model<Iteams> {
  declare id: CreationOptional<number>;
  declare team_name: string;

}

Teams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
}, {
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});

