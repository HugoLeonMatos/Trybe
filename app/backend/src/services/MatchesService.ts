import { ServiceResponse } from '../Interfaces/ServiceResponse';
import Matches from '../database/models/Matches';
import IMatches, { IMatcheCreated, IMatchesGoals } from '../Interfaces/IMatches';
import Teams from '../database/models/Teams';
import { messgeError } from '../utils/mapStatusHTTP';

export default class MatchesService {
  constructor(
    private Model = Matches,
    private TeamsModel = Teams,
  ) { }

  public async getFilteredMatchesProgress(inProgress: string)
    : Promise<ServiceResponse<IMatches[]>> {
    const whereClause: { inProgress?: boolean } = {};

    if (inProgress === 'true') {
      whereClause.inProgress = true;
    } else if (inProgress === 'false') {
      whereClause.inProgress = false;
    }

    const matchesFiltered = await this.Model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: whereClause,
    });

    return { status: 'SUCCESSFUL', data: matchesFiltered };
  }

  public async finalizedMatchId(id: string): Promise<ServiceResponse<object>> {
    const affectedRows = await this.Model.update({ inProgress: false }, { where: { id } });
    // console.log('matchId', MatchId);
    // return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
    if (affectedRows[0] === 1) {
      return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Match already finished' } };
  }

  public async updateGoalsMatch(id: string, body: IMatchesGoals): Promise<ServiceResponse<object>> {
    const { homeTeamGoals, awayTeamGoals } = body;
    const affectedRows = await this.Model
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    if (affectedRows[0] === 1) {
      return { status: 'SUCCESSFUL', data: { message: 'gols atualizados' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'gols ja foram atualizados' } };
  }

  public async inputMatch(body: IMatcheCreated): Promise<ServiceResponse<object>> {
    const findTeamHome = await this.TeamsModel.findByPk(body.homeTeamId);
    const findTeamAway = await this.TeamsModel.findByPk(body.awayTeamId);
    if (body.homeTeamId === body.awayTeamId) {
      return { status: 'UNPROCESSABLE_ENTITY', data: { message: messgeError } };
    } if (!findTeamHome || !findTeamAway) {
      return {
        status: 'NOT_FOUND', data: { message: 'There is no team with such id!' },
      };
    }
    const affectedRows = await this.Model.create({ ...body, inProgress: true });
    return { status: 'CREATED', data: affectedRows };
  }
}
