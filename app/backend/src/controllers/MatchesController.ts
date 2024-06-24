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
  public async finalizedMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const serviceResponse = await this.matchesService.finalizedMatchId(id);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updatedGoals(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.matchesService.updateGoalsMatch(req.params.id, req.body);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async inputMatch(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.matchesService.inputMatch(req.body);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
