import { drizzle } from 'drizzle-orm/libsql';
import { teamsTable } from '../../db/schema';
const db = drizzle(process.env.DB_FILE_NAME!);

const getResultsHandler = async (req, res) => {

  if (req.method === 'GET') {
    const teams = await db.select().from(teamsTable);
    let responseData = [];
    let sample = [];
    teams.forEach(team => {
        let timeStamp = team.timestamp;
        let teamName = team.team_name;
        if (timeStamp && teamName) {
            if (!sample[teamName]) {
                sample[teamName] = team;
            } else {
                if (sample[teamName].timeStamp < timeStamp) {
                    sample[teamName] = team;
                }
            }
        }
        // console.log(timeStamp, teamName);
      
    })
    for (let key in sample) {
        responseData.push(sample[key]);
    }

    res.json(responseData);
  }
}

export default getResultsHandler;
