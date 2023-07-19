import { database } from '../../firebaseConfig';
import { getFirestore, doc, getDocs, collection  } from 'firebase/firestore';

const getResultsHandler = async (req, res) => {
  const db = getFirestore();
  const colRef = collection(db, 'capture-the-flag');

  if (req.method === 'GET') {
    const docsSnap = await getDocs(colRef);
    let responseData = [];

    docsSnap.forEach(doc => {
      responseData.push(doc.data());
    })

    res.json(responseData);
  }
}

export default getResultsHandler;
