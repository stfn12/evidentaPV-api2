import express from  'express';
import Controlor from '../models/Controlor';
import authenticate from "../middleware/authenticate";
import parseErrors from '../utils/parseError';
import Chitanta from "../models/Chitanta";

const router = express.Router();
router.use(authenticate);

router.get("/search", async (req, res) => {
  await Controlor.find().sort({marca:1}).exec()
    .then(controlori => res.json({controlori}))
});

router.post('/', async (req, res) => {
  await Controlor.create(req.body.controlor)
    .then(controlor => res.json({controlor}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

router.put('/:id', async (req,res) => {
  await Controlor.findOneAndUpdate({_id: req.body.controlor._id}, req.body.controlor)
    .then(() => Controlor.findOne({_id: req.body.controlor._id})
      .then(controlor => res.json({controlor})))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

router.delete('/:id', async(req, res) =>{
  await Controlor.remove({_id: req.body.controlor._id})
    .then(controlor => res.json({controlor}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});



export default router;
