import { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import axios from 'axios';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const Dashboard = () => {
  const [teams, setTeams] = useState([]);

  const MINUTE_MS = 300000;

  const queryApi = async () => {
    const response = await axios.get(
      `/api/getResults`
    )

    setTeams(response.data);
  }

  useEffect(() => {
    queryApi();
  }, []);

  setInterval(queryApi, MINUTE_MS);

  const displayTeams = () => {
    return (
      <ul role="list" className="grid grid-cols-3 gap-6 mb-5">
        {teams.map((team) => (
          <TeamCard
            key={team.teamName}
            team={team}
          />
        ))}
      </ul>
    )
  }

  const noTeams = () => {
    return (
      <div className="flex grid place-items-center">
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">No Teams have submitted their answers yet</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return ( <>
    <div className="relative">
      <h1 className='text-4xl font-bold leading-7 text-center mb-3'>T E C H T O P I A</h1>
      <h2 className='text-2xl font-bold leading-7 text-center mb-10'>Capture The Flag</h2>
      { teams.length > 0
        ? displayTeams()
        : noTeams()
      }
    </div>
  </> );
}

export default Dashboard;
