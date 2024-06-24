export default interface IMatches {
  id: number,
  homeTeamId: number,
  awayTeamGoals: number,
  awayTeamId: number,
  homeTeamGoals: number,
  inProgress: boolean,
}

export interface IMatchesGoals {
  awayTeamGoals: number,
  homeTeamGoals: number,
}

export interface IMatcheCreated {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}
