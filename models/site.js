import { Schema, model } from "mongoose"

const userSiteTouristique = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    description: {
        type: String,
        required: true,
    },
})

export default model("SiteTouristique", userSiteTouristique)