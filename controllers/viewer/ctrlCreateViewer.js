const { CreateViewer } = require("../../services/viewer/CreateViewer")

async function ctrlCreateViewer(req, res){
  try{
    const { name, lastName, genero, email} = req.body
    console.log('Hola desde el controlador CreateViewer')
    const x = await CreateViewer({name, lastName, genero, email})
    return res.status(200).send(x)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }


}

module.exports = { ctrlCreateViewer }
