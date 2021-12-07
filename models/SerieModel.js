import  mongoose  from "mongoose";



const Schema = mongoose.Schema

//definir la estructura de las entidades
//a regi

const SerieSchema = new Schema(
    {
        nombre:{
            type: String,
            required: "nombre vacio"
        },
        apellido:{
            type: String,
            required: "apellido vacio"
        },
        especie:{
            type: String
        },
        edad:{
            type: String
        },
        dimension:{
            type: String
        },
        ocupacion:{
            type: String
        },
        fecha_creacion:{
            type: Date,
            default: Date.now
        }
    }
)
export default SerieSchema