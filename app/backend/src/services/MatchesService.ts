import { ServiceResponse } from '../Interfaces/ServiceResponse';
import Matches from '../database/models/Matches';
import IMatches from '../Interfaces/IMatches';
import Teams from '../database/models/Teams';

export default class MatchesService {
  constructor(
    private Model = Matches,
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.Model.findAll({
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return { status: 'SUCCESSFUL', data: allMatches };
  }
}
