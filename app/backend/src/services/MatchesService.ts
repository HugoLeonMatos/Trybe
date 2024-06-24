import { ServiceResponse } from '../Interfaces/ServiceResponse';
import Matches from '../database/models/Matches';
import IMatches from '../Interfaces/IMatches';
import Teams from '../database/models/Teams';

export default class MatchesService {
  constructor(
    private Model = Matches,
  ) { }

  // public async getAllMatches(inProgress: string): Promise<ServiceResponse<IMatches[]>> {
  //   const allMatches = await this.Model.findAll({
  //     include: [{ model: Teams, as: 'homeTeam', attributes: ['teamName'], },
  //     { model: Teams, as: 'awayTeam', attributes: ['teamName'], },],
  //   });
  //   return { status: 'SUCCESSFUL', data: allMatches };
  // }

  // public async getFilterMatchesProgress(inProgress: string): Promise<ServiceResponse<IMatches[]>> {
  //   let matchesFiltered: Matches[];

  //   if (inProgress === 'true') {
  //     matchesFiltered = await this.Model.findAll({
  //       include: [
  //         { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
  //         { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  //       ],
  //       where: { inProgress: true },
  //     });
  //   } else if (inProgress === 'false') {
  //     matchesFiltered = await this.Model.findAll({
  //       include: [
  //         { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
  //         { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  //       ],
  //       where: { inProgress: false },
  //     });
  //   } else {
  //     matchesFiltered = await this.Model.findAll({
  //       include: [
  //         { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
  //         { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  //       ],
  //     });
  //   }
  //   return { status: 'SUCCESSFUL', data: matchesFiltered };
  // }

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
}
