import express from  'express';
import Chitanta from '../models/Chitanta';
import authenticate from "../middleware/authenticate";
import parseErrors from '../utils/parseError';

const router = express.Router();
router.use(authenticate);

router.get("/search", async (req, res) => {
  await Chitanta.find().sort({numar: 1}).exec()
    .then(chitante => res.json({chitante}));
  //.then(procese=> console.log(procese))
});

router.post('/', async (req, res) => {
  await Chitanta.create(req.body.chitanta)
    .then(chitanta => res.json({chitanta}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

router.put('/:id', async (req,res) => {
  await Chitanta.findOneAndUpdate({_id: req.body.chitanta._id}, req.body.chitanta)
    .then(() => Chitanta.findOne({_id: req.body.chitanta._id})
      .then(chitanta => res.json({chitanta})))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

router.delete('/:id', async(req, res) =>{
  await Chitanta.remove({_id: req.body.chitanta._id})
    .then(chitanta => res.json({chitanta}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

/*router.post('/', (req,res) =>{
  const {serie, numar, marca, data_intocmire, contravenient, adresa, localitate, suma, mod_intocmire} = req.body.proces;
  const proces = new Pv({serie, numar, marca, data_intocmire, contravenient, adresa, localitate, suma, mod_intocmire});
  proces.save()
    .then(res.json(proces))
    .catch(res.json({errors: {global:'Eroare la introducere PV'}}));
});*/



export default router;
