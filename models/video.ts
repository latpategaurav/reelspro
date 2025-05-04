import bcrypt from "bcryptjs";
import { timeStamp } from "console";
import mongoose, { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";


export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920
} as const

export interface IVideo{
    title: string;
    description: string;
    _id?: mongoose.Types.ObjectId;
    videoUrl: string ;
    thumbnailUrl: string ;
    control?:boolean;
    transformation?:{
        height: number,
        width: number,
        quality?: number 
    }
   
}

const videoSchema = new Schema<IVideo>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    videoUrl: {type: String, required: true},
    thumbnailUrl: {type: String, required: true},
    control: {type: Boolean, required: true}
})
   