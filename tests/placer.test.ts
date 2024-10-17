import { Placer } from "../src/Element/properties/Placer"
import { IPlacer } from "../src/Element/properties/Placer.interface"

const allowedTypes = ['resources', 'unit', 'vehicals']
const mockElement = {
    type: 'vehicals',
    id: '1'
}

describe("Placer - свойство для объекта с широким функционалом, определяющее его поведение в качестве точки для размещения других объектов \n" +
    "и возможности размещаться самому", () => {
        let placer: IPlacer
        beforeEach(() => {
            placer = new Placer()
        })
        test("Placer является инстансом класса Placer", () => {
            expect(placer instanceof Placer).toBe(true)
        })
        test("placer может сообщить о своей возможности принимать на себя другие элементы (фактически, не визуально)", () => {
            expect(placer.isPlaceable()).toBe(false)
        })
        test("placer может установить значение возможности размещения", () => {
            placer.setPlaceable(true)
            expect(placer.isPlaceable()).toBe(true)
        })
        test("placer может сообщить о возможности мультиразмещения. Также способен менять значение", () => {
            expect(placer.isMultiPlaceable()).toBe(false)
            placer.setMultiPlaceable(true)
            expect(placer.isMultiPlaceable()).toBe(true)
            placer.setMultiPlaceableLimit(3)
            expect(placer.getMultiPlaceableLimit()).toBe(3)
        })
        test('placer может расположить в себе элементы', () => {
            placer.place(mockElement)
            expect(placer.getCountOnMe()).toBe(1)
        })
        test('placer может убирать с себя элементы', () => {
            placer.place(mockElement)
            placer.unplace(mockElement.id)
            expect(placer.getCountOnMe()).toBe(0)
        })
        test('placer может отобразить элементы, размещённые на нём', () => {
            placer.place(mockElement)
            expect(placer.onMe()).toBeDefined()
        })
        test('placer может определять тип элементов, которые на нём могут быть размещены', () => {
            placer.setMultiPlaceable(true).setAllowedElementTypes(allowedTypes)
            expect(placer.allowedTypes().length).toBe(allowedTypes.length)
        })
        test('placer может определять тип элементов, которые на нём не могут быть размещены', () => {
            placer.setMultiPlaceable(true).setBannedElementTypes(allowedTypes)
            expect(placer.bannedTypes().length).toBe(allowedTypes.length)
        })
        test('Нарушение лимита ведет к выбросу ошибки', () => {
            placer.setMultiPlaceable(true).setMultiPlaceableLimit(2)
            placer.place(mockElement)
            placer.place(mockElement)
            expect(placer.place.bind(placer, mockElement)).toThrow('Limit')
        })
        test('Нарушение допущенных полей ведет к выбросу ошибки', () => {
            placer.setAllowedElementTypes(allowedTypes)
            expect(placer.place.bind(placer, { type: 'weapon' })).toThrow('Not allowed')
        })
        test('Нарушение забаненных полей ведет к выбросу ошибки', () => {
            placer.setBannedElementTypes(allowedTypes)
            expect(placer.place.bind(placer, { type: allowedTypes[0] })).toThrow('Banned')
        })
        test('Верная передача данных в allowed и banned не приводит к ошибке', () => {
            placer.setAllowedElementTypes(allowedTypes)
            placer.setBannedElementTypes(['weapon'])
            expect(placer.place.bind(placer, { type: allowedTypes[0] })).not.toThrow()
        })
    })