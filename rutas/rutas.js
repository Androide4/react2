//Endpoinst del proyecto
//Endpoint: Ruta REST en un proyecto API backend
//Ej: http://localhost:5000/persona/5
// Un endpoint solo expone info en formato JSON
import {addserie, getserie, getserieById, deleteserie} from "../controllers/SerieController.js"

const rutas = (app)=>{
 app.route('/serie')
 .get(getserie)
 .post(addserie)

 app.route('/serie/:serieid')
 .get(getserieById)
 .delete(deleteserie)
}

export default rutas