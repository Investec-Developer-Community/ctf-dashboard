#  🚩 A Simple Capture The Flag Dashboard

Welcome to the simple leaderboard component of our [Programmable Banking Card Capture the Flag Challenge](https://coda.io/@programmble-banking/capture-the-flag-challenge-team)! This is where you can see how you stack up against the competition.

![Dashboard](/docs/ctf-readme.png)

## Dependencies

- You can edit the `const answers` variable in the `TeamCard.jsx` file with your specific answers

## 🌐 Overview
The leaderboard is a crucial part of our game, providing a real-time ranking of all participating teams. It's all about friendly competition and seeing who can solve the puzzles the fastest!

## 🛠️ How it Works
Each time a team captures a flag, their score is updated on the leaderboard. The faster you solve the puzzles, the higher you'll climb!

A team will submit their challenge or answers to the endpoint which will push them to the Firebase collection and then update the Dashboard

## 🚀 Getting Started

First, run the development server:

```bash
npm install
# then
npm run dev
```

**Update the .env.example file to just .env and update with your own values from Firebase**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🍴 Fork the Repo

Want to see how the mock transactions are set up? Fork the repo on Postman [here](https://www.postman.com/investec-open-api/workspace/team-workspace/collection/27630431-eb1d0bdf-da73-4b08-b3b0-dd01319c3aed?action=share&creator=26868804).

## 🤝 Contributing

We're always looking for ways to improve and expand the game. If you have any ideas or want to contribute, feel free to submit a pull request or open an issue. Let's make this game even better together!

## 📝 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Happy gaming! 🎉
