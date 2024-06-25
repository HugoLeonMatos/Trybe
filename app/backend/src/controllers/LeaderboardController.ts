import { Request, Response } from 'express';
import { Intermatches, Iteams } from '../Interfaces/ITeams';
import MatchesService from '../services/MatchesService';
import TeamService from '../services/TeamService';
import { pegaJogosCasa } from '../Interfaces/ILeaderborder';

export default class LeaderboardController {
  constructor(
    private matchesService = new MatchesService(),
    private teamService = new TeamService(),
  ) { }

  public async pegaJogosCasa(): Promise<pegaJogosCasa> {
    const casaJogos = (await this.matchesService.getFilteredMatchesProgress('false'));
    // console.log('caajogos.data', casaJogos.data[0]);
    const retorno = casaJogos.data.map((matches: Intermatches) => (
      {
        name: matches.homeTeamId,
        againstGoals: matches.awayTeamGoals,
        goalPro: matches.homeTeamGoals,
        win: matches.homeTeamGoals > matches.awayTeamGoals ? 1 : 0,
        loss: matches.awayTeamGoals > matches.homeTeamGoals ? 1 : 0,
        draw: matches.homeTeamGoals === matches.awayTeamGoals ? 1 : 0,
      }));
    return retorno;
  }

  public async tabelaComJogosCasaok(_req: Request, res: Response): Promise<Response> {
    const partidasCasa: any = await this.pegaJogosCasa();
    const resultJogos: any = (await this.teamService.getAllTeams()).data.map((time: Iteams) => {
      const resultado = partidasCasa.reduce((acc: any, curr: any) => {
        if (curr.name === time.id) {
          return ({
            name: time.teamName,
            totalPoints: (curr.win ? 3 : 0) + (curr.draw ? 1 : 0),
            totalGames: 1,
            totalLosses: curr.loss + curr.loss,
            totalVictories: curr.win + curr.win,
            totalDraws: curr.draw + curr.draw,
            goalsFavor: curr.goalPro + curr.goalPro,
            goalsOwn: curr.againstGoals + curr.againstGoals,
          });
        } return acc;
      }, {}); return resultado;
    });
    return res.status(200).json(resultJogos);
  }
}
