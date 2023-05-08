export interface Player {
    username: string,
    gamesLost?: number,
    gamesPlayed?: number,
    gamesWon?: number,
    playersBeaten?:[],
    playersLostTo?:[],
}