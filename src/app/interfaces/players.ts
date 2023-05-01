export interface Player {
    email: string,
    gamesLost: number,
    gamesPlayed: number,
    gamesWon: number,
    password: string,
    playersBeaten:[],
    playersLostTo:[],
}