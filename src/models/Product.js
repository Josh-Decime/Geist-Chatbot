import { generateId } from "@/utils/GenerateId.js"

export class Product {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.description = data.description
        // additionalAiInfo is for information the AI might need to know but is not displayed in the item description
        this.additionalAiInfo = data.additionalAiInfo
        this.price = data.price
        this.img = data.img
    }
}