import { Configuration } from "../src/Application/Configuration"
import { IAppConfiguration } from "../src/Application/Configuration.interface"

describe("Объект конфигурации отвечает за конфиг приложения. В него записываются данные, связанные с константами для последующего использования", () => {
    let configuration: IAppConfiguration
    const displayHeight = 720
    const displayWidth = 1280
    beforeEach(() => {
        configuration = new Configuration()
    })
    test('Конфигуратор является инстансом Configuration', () => {
        expect(configuration instanceof Configuration).toBe(true)
    })
    test('Конфигуратор может хранить и записывать данные о размере экранов пользовательского окна', () => {
        configuration.setDisplaySizes(displayWidth, displayHeight)
        let sizes = configuration.getDisplaySizes()
        expect(sizes.width).toBe(displayWidth)
        expect(sizes.heigth).toBe(displayHeight)
    })
})