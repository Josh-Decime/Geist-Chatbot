import { generateId } from "@/utils/GenerateId.js"
import imageNotFound from "@/assets/img/Image-Not-Found.png"

export class Product {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.description = data.description
        // additionalAiInfo is for information the AI might need to know but is not displayed in the item description
        this.additionalAiInfo = data.additionalAiInfo
        this.price = data.price
        this.img = data.img || imageNotFound
        this.inventoryAmount = data.inventoryAmount || null
    }
} 