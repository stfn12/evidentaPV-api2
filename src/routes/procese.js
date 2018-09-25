import express from  'express';
import Pv from '../models/Pv';
import authenticate from "../middleware/authenticate";
import parseErrors from '../utils/parseError';

const router = express.Router();
router.use(authenticate);

router.get("/search", async (req, res) => {
  await Pv.find().exec()
    .then(procese => res.json({procese}));
});

/*router.post('/', (req,res) =>{
  const {serie, numar, marca, data_intocmire, contravenient, adresa, localitate, suma, mod_intocmire} = req.body.proces;
  const proces = new Pv({serie, numar, marca, data_intocmire, contravenient, adresa, localitate, suma, mod_intocmire});
  proces.save()
    .then(res.json(proces))
    .catch(res.json({errors: {global:'Eroare la introducere PV'}}));
});*/
router.post('/', (req, res) => {
  Pv.create(req.body.proces)
    .then(proces => res.json({proces}))
    .catch(err=> res.status(400).json({errors:parseErrors(err.errors)}))
});

export default router;
