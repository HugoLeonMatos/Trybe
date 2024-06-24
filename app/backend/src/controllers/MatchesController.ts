import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) { }

  public async getAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    const serviceResponse = await this.matchesService
      .getFilteredMatchesProgress(String(inProgress));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  // public async getFilteredMatches(_req: Request, res: Response): Promise<Response> {
  // const inProgressString = _req.query.inProgress;
  // let inProgress: boolean;
  // if (typeof inProgressString === 'string') {
  //   inProgress = inProgressString === 'true';
  // } else {
  //   inProgress = false;
  // }
  // if (_req.query.inProgress) {
  //   const serviceResponse = await this.matchesService.getFilterMatchesProgress(_req.query.inProgress === 'true');
  // }
  // const serviceResponse = await this.matchesService.getFilterMatchesProgress(inProgress);
  // return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  // }
}
