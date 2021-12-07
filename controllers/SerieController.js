//import { request, response } from "express";
import  mongoose  from "mongoose";
import SerieSchema from "../models/SerieModel.js";

//DAO de contacto
const Serie = mongoose.model('Persona' , SerieSchema)

//accion de controlador: insertar nueva persona 
export const addserie = (request, response) => {
    //crear nueva persona
    let nuevaSerie = new Serie(request.body)
    //grabar la nueva persona
    nuevaSerie.save((error, Serie)=>{
      if(error){
          response.send(error)
      }else{
          response.json(Serie)
      }
    })
}

//accion para seleccionar todas las personas
export const getserie = (request, response)=>{
    Serie.find({} , (error,Serie)=>{
    if(error){
        response.send(error)
    }else{
        response.json(Serie)
    }
 })
}

//accion de detalle de persona
export const getserieById = (request, response)=>{
    Serie.findById(request.params.serieid, (error, Serie)=>{
        if(error){
            response.send(error)
        }else{
            response.json(Serie)
        }
    })
}

//accion borrar:
export const deleteserie = (request , response ) => {
    Serie.deleteOne( { _id: request.params.serieid } , (error , Serie ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "Personaje borrado borrada"})
           } 
    })
}