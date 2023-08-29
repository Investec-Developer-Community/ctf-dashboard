import { database } from '../../firebaseConfig';
import { getFirestore, doc, getDocs, collection  } from 'firebase/firestore';

const getResultsHandler = async (req, res) => {
  const db = getFirestore();
  const colRef = collection(db, 'capture-the-flag');

  if (req.method === 'GET') {
    const docsSnap = await getDocs(colRef);
    let responseData = [];
    let sample = [];
    docsSnap.forEach(doc => {
        let timeStamp = doc.get('timeStamp');
        let teamName = doc.get('teamName');
        if (timeStamp && teamName) {
            if (!sample[teamName]) {
                sample[teamName] = doc.data();
            } else {
                if (sample[teamName].timeStamp < timeStamp) {
                    sample[teamName] = doc.data();
                }
            }
        }
        // console.log(timeStamp, teamName);
      
    })
    for (let key in sample) {
        responseData.push(sample[key]);
    }
    // responseData.push(doc.data());
    res.json(responseData);
  }
}

export default getResultsHandler;
