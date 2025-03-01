import mongoose from 'mongoose'

const contactSchema=new mongoose.Schema({
    names:{
        type:String,
        required:[true,'Name Field is Required'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Email Filed is Required'],
        trium:true
    },
    message:{
        type:String,
        required:[true,'Message Field is Required'],
        trim:true    
    }
},{timestamps:true})


export default mongoose.model('Contact',contactSchema)