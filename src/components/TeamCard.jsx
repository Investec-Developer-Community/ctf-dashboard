import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

const TeamCard = ({ team }) => {
  const answers = {
    answerOne:    'A',
    answerTwo:    'B',
    answerThree:  'C',
  }

  const challengeIcon = (teamAnswer, actualAnswer) => {
    if (teamAnswer === actualAnswer) {
      return <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
    } else {
      return <XCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
    }
  }

  return ( <>
    <li key={team.teamName} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <h3 className="text-center font-bold text-gray-900">{team.teamName}</h3>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              {challengeIcon(team.answerOne, answers.answerOne)}
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <div className="flex w-0 flex-1">
              <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                {challengeIcon(team.answerTwo, answers.answerTwo)}
              </div>
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <div className="flex w-0 flex-1">
              <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                {challengeIcon(team.answerThree, answers.answerThree)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </> );
}

export default TeamCard;
