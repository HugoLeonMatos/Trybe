
import { DataTypes, Model, QueryInterface } from "sequelize";
import { Iteams } from "../../Interfaces/ITeams";


export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Iteams>>('teams', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'team_name'
      }
    })
  },
  down(queryInterface: QueryInterface) {
    queryInterface.dropTable('teams');

  }
}
//log