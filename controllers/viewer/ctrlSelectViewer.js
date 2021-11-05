const { SelectViewer } = require("../../services/viewer/SelectViewer")

async function ctrlSelectViewer(req, res){
  try{
    const { genre } = req.query
    console.log('Hola desde el controlador SelectProfile')
    const x = await SelectViewer(genre)
    return res.status(200).send(x)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }


}

module.exports = { ctrlSelectViewer }
