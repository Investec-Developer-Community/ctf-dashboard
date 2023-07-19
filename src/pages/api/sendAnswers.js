import { database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const sendAnswersHandler = async (req, res) => {
  const dbInstance = collection(database, 'capture-the-flag');

  if (req.method === 'POST') {
    addDoc(dbInstance, {
      teamName:     req.body.teamName,
      answerOne:    req.body.answerOne,
      answerTwo:    req.body.answerTwo,
      answerThree:  req.body.answerThree,
    })

    res.status(response.status);
  }
}

export default sendAnswersHandler;
