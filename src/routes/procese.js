import express from  'express';
import Pv from '../models/Pv';
import authenticate from "../middleware/authenticate";
import parseErrors from '../utils/parseError';

const router = express.Router();
router.use(authenticate);

router.get("/search", async (req, res) => {
    await Pv.find().sort({ data_intocmire: -1 }).exec()
      .then(procese => res.json({ procese }));
});

router.get("/searchDate", async (req, res) => {
  if(req.query.from === null || req.query.to ===null){
    await Pv.find().sort({ data_intocmire: -1 }).exec()
      .then(procese => res.json({ procese }));
  }
  else {
    await Pv.find({ data_intocmire: { $gte: req.query.from, $lte: req.query.to } })
      .sort({ data_intocmire: -1 }).exec()
      .then(procese => res.json({ procese }));
  }
});

router.post('/', async (req, res) => {
  await Pv.create(req.body.proces)
    .then(proces => res.json({proces}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

router.put('/:id', async (req,res) => {
  await Pv.findOneAndUpdate({_id: req.body.proces._id}, req.body.proces)
    .then(() => Pv.findOne({_id: req.body.proces._id})
      .then(proces => res.json({proces})))
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
