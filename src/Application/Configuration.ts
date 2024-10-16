import { displaySizesType, IAppConfiguration } from "./Configuration.interface";

export class Configuration implements IAppConfiguration {
    private width: number = 0
    private heigth: number = 0
    setDisplaySizes(width: number, height: number): IAppConfiguration {
        this.width = width
        this.heigth = height
        return this
    }
    getDisplaySizes(): displaySizesType {
        return {
            heigth: this.heigth,
            width: this.width
        }
    }

}