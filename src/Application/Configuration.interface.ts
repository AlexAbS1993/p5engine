export type displaySizesType = {
    width: number,
    heigth: number
}

export interface IAppConfiguration {
    setDisplaySizes(width: number, height: number): IAppConfiguration
    getDisplaySizes(): displaySizesType
}