import { CreationOptional, DataTypes, Model } from 'sequelize';
import db from '.';
import { Iteams } from '../../Interfaces/ITeams';

export default class Teams extends Model<Iteams> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

Teams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});
