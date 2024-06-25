export interface Iteams {
  id: number,
  teamName: string,
}

export interface teamName {
  teamName:string,
}

export interface Intermatches {
  id: number,
  homeTeamId: number | teamName,
  homeTeamGoals: number,
  awayTeamId: number | string,
  awayTeamGoals: number,
  inProgress: string,
  homeTeam: string,
  awayTeam: string,
}
