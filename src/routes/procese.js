import express from  'express';
import Pv from '../models/Pv';
import authenticate from "../middleware/authenticate";

const router = express.Router();
router.use(authenticate);

router.get("/search", async (req, res) => {
  let procese = await Pv.find().exec();
  console.log(procese);
  res.json({procese});

  /*res.json({
    procese: [
      {
        id: 1,
        serie: 'E',
        numar: 1222,
        data_intocmire: '09-09-2018',
        marca: 2000,
        contravenient: 'Dobos Stefan',
        adresa: 'Pantelimon Halipa, Iasi',
        localitate: 'Iasi',
        suma: 150,
        mod_intocmire: 'refuz'
      },
      {
        id: 2,
        serie: 'E',
        numar: 1223,
        data_intocmire: '24-09-2018',
        marca: 2000,
        contravenient: 'COntravenient',
        adresa: 'Pantelimon Halipa, Iasi',
        localitate: 'Iasi',
        suma: 300,
        mod_intocmire: 'refuz'
      }
    ]

  })*/
});

export default router;