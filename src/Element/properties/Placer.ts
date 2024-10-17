import { IPlacer } from "./Placer.interface";

export class Placer implements IPlacer {
    private placeabal: boolean = false
    private multiPlaceable: boolean = false
    private multiPlaceableLimit: number = Infinity
    private elements: unknown[] = []
    private allowedTypesArray: string[] = []
    private bannedTypesArray: string[] = []
    isPlaceable(): boolean {
        return this.placeabal
    }
    setPlaceable(value: boolean): IPlacer {
        this.placeabal = value
        return this
    }
    isMultiPlaceable(): boolean {
        return this.multiPlaceable
    }
    setMultiPlaceable(value: boolean): IPlacer {
        this.multiPlaceable = value
        return this
    }
    setMultiPlaceableLimit(limit: number): IPlacer {
        this.multiPlaceableLimit = limit
        return this
    }
    getMultiPlaceableLimit(): number {
        return this.multiPlaceableLimit
    }
    place(element: any): IPlacer {
        if (this.isMultiPlaceable()) {
            this.checkLimit()
        }
        if (this.bannedTypesArray.length > 0) {
            this.checkBanned(element.type)
        }
        if (this.allowedTypesArray.length > 0) {
            this.checkAllowed(element.type)
        }
        this.elements.push(element)
        return this
    }
    unplace(id: string): IPlacer {
        this.elements = this.elements.filter((el: any) => el.id !== id)
        return this
    }
    getCountOnMe(): number {
        return this.elements.length
    }
    onMe(): unknown[] {
        return this.elements
    }
    setAllowedElementTypes(allowed: string[]): IPlacer {
        this.allowedTypesArray = allowed
        return this
    }
    allowedTypes(): unknown[] {
        return this.allowedTypesArray
    }
    setBannedElementTypes(banned: string[]): IPlacer {
        this.bannedTypesArray = banned
        return this
    }
    bannedTypes(): unknown[] {
        return this.bannedTypesArray
    }
    private checkLimit() {
        if (this.elements.length === this.multiPlaceableLimit) {
            throw new Error("Limit")
        }
        else {
            return
        }
    }
    private checkAllowed(type: string) {
        if (this.allowedTypesArray.some(t => t === type)) {
            return
        }
        else {
            throw new Error('Not allowed')
        }
    }
    private checkBanned(type: string) {
        if (this.bannedTypesArray.some(t => t === type)) {
            throw new Error("Banned")
        }
        else {
            return
        }
    }
}