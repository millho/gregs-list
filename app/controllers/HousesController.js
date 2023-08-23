import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseTemplate)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        _drawHouses()
    }

    createHouse() {
        window.event.preventDefault()
        const formEvent = window.event.target
        const formData = getFormData(formEvent)
        formEvent.reset()
        housesService.createHouse(formData)
    }

}