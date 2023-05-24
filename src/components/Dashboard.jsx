import { useEffect } from 'react';
import TeamCard from './TeamCard';
import axios from 'axios';

const Dashboard = () => {
  const teams = [
    {
      name: 'Catch Me If You Can',
      firstChallenge: false,
      secondChallenge: false,
      thirdChallenge: false
    },
    {
      name: 'Hackberry Fin',
      firstChallenge: true,
      secondChallenge: false,
      thirdChallenge: false
    },
    {
      name: 'The Solo No Hopes',
      firstChallenge: true,
      secondChallenge: false,
      thirdChallenge: true
    },
    {
      name: 'Obi One Challenge',
      firstChallenge: false,
      secondChallenge: false,
      thirdChallenge: true
    },
    {
      name: 'Obi One Challenge',
      firstChallenge: false,
      secondChallenge: false,
      thirdChallenge: true
    },
    {
      name: 'Obi One Challenge',
      firstChallenge: false,
      secondChallenge: false,
      thirdChallenge: true
    },
    {
      name: 'Obi One Challenge',
      firstChallenge: false,
      secondChallenge: false,
      thirdChallenge: true
    },
  ]

  const MINUTE_MS = 300000;

  const queryApi = () => {
    const response = axios.post(
      `/api/hook`,
      {
        centsAmount: "10100",
        currencyCode: "zar",
        merchantCode: 7996,
        merchantName: "USkaka",
        merchantCity: "Durban",
        countryCode: "ZA"
      }
    )
    console.log(response);
  }

  useEffect(() => {
    queryApi();
  }, []);

  setInterval(queryApi, MINUTE_MS);

  return ( <>
    <div className="relative">
      <h1 className='text-4xl font-bold leading-7 text-center mb-3'>T E C H T O P I A</h1>
      <h2 className='text-2xl font-bold leading-7 text-center mb-10'>Capture The Flag</h2>
      <ul role="list" className="grid grid-cols-3 gap-6 mb-5">
        {teams.map((team) => (
          <TeamCard
            key={team.name}
            team={team}
          />
        ))}
      </ul>
    </div>
  </> );
}

export default Dashboard;
