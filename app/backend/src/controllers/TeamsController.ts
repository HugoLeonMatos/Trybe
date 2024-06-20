import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) { this.teamService = teamService; }

  public async getAllTeams(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.teamService.getAllTeams();
    return res.status(200).json(serviceResponse.data);
  }

  public async getTeamById(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.teamService.getTeamById(Number(req.params.id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
