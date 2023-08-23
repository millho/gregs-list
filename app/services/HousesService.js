import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
    createHouse(formData) {
        let newHouse = new House(formData)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }
}

export const housesService = new HousesService