import { database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const hookHandler = async (req, res) => {
  const dbInstance = collection(database, 'capture-the-flag');

  if (req.method === 'POST') {
    addDoc(dbInstance, {
      centsAmount:  req.body.centsAmount,
      currencyCode: req.body.currencyCode,
      merchantCode: req.body.merchantCode,
      merchantName: req.body.merchantName,
      merchantCity: req.body.merchantCity,
      countryCode:  req.body.countryCode,
    })

    // res.status(response.status);
    // res.json(response.data);
  }
}

export default hookHandler;
