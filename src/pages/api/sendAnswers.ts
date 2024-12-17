import { drizzle } from 'drizzle-orm/libsql';
import { teamsTable } from '../../db/schema';
const db = drizzle(process.env.DB_FILE_NAME!);

const sendAnswersHandler = async (req, res) => {

  if (req.method === 'POST') {
    const team = {
        team_name: req.body.teamName,
        answer_one: req.body.answerOne,
        answer_two: req.body.answerTwo,
        answer_three: req.body.answerThree,
        answer_four: req.body.answerFour,
      };
      await db.insert(teamsTable).values(team);

    res.status(200).json({ message: "submitted" });
  }
}


export default sendAnswersHandler;
