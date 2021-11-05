const { DeleteViewer } = require("../../services/viewer/DeleteViewer")

async function ctrlDeleteViewer(req, res){
  try{
    const {email} = req.params
    console.log('Hola desde el controlador DeleteViewer')
    const x = await DeleteViewer(email)
    return res.status(200).send(x)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }


}

module.exports = { ctrlDeleteViewer }
