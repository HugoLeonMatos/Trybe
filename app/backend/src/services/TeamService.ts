import { ServiceResponse } from '../Interfaces/ServiceResponse';
import Teams from '../database/models/Teams';

import { Iteams } from '../Interfaces/ITeams';
// import { ITeamModel } from '../Interfaces/ITeamsModel';
// import { NewEntity } from '../Interfaces/index';

export default class TeamService {
  constructor(
    private Model = Teams,
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<Iteams[]>> {
    const allTeams = await this.Model.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<Iteams>> {
    const team = await this.Model.findByPk(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
