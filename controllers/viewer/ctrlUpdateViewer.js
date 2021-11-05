const { updateViewer } = require("../../services/viewer/updateViewer")

async function ctrlUpdateViewer(req, res){
  try{
    const { name, lastName} = req.body
    const {email} = req.params
    console.log('Hola desde el controlador UpdateViewer')
    const x = await updateViewer({name, lastName, email})
    return res.status(200).send(x)

  }catch(error){
    return res.status(error.status || 500).send ({message: error.message})
  }


}

module.exports = { ctrlUpdateViewer }
