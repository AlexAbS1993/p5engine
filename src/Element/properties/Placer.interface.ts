export interface IPlacer {
    isPlaceable(): boolean
    setPlaceable(value: boolean): IPlacer
    isMultiPlaceable(): boolean
    setMultiPlaceable(value: boolean): IPlacer
    setMultiPlaceableLimit(limit: number): IPlacer
    getMultiPlaceableLimit(): number
    place(element: unknown): IPlacer
    unplace(id: string): IPlacer
    getCountOnMe(): number
    onMe(): unknown[]
    setAllowedElementTypes(allowed: string[]): IPlacer
    allowedTypes(): unknown[]
    setBannedElementTypes(banned: string[]): IPlacer
    bannedTypes(): unknown[]
}