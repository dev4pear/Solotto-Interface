import moment from "moment";

const users = [
    {
        name: "Blademier",
        stakedAmount: 1277,
        participationRate: 43,
        bestWin: new Date(),
        raffleWon: 534,
        totalWins: 40555,
    },
    {
        name: "Robert Fox",
        stakedAmount: 877,
        participationRate: 43,
        bestWin: new Date(),
        raffleWon: 443,
        totalWins: 40555,
    },
    {
        name: "Robert Fox",
        stakedAmount: 877,
        participationRate: 43,
        bestWin: new Date(),
        raffleWon: 443,
        totalWins: 40555,
    },
    {
        name: "Robert Fox",
        stakedAmount: 877,
        participationRate: 43,
        bestWin: new Date(),
        raffleWon: 443,
        totalWins: 40555,
    },
];
export default function RankingTable() {

    return (
        <div className="mt-10 w-full rounded-xl border border-[#454242] overflow-hidden">
            <table className="w-full p-5 [&_th]:p-5 [&_td]:p-5 [&_th]:font-normal [&_td]:border-t [&_td]:border-[#454242]">
                <thead className="text-[17px] text-left ">
                    <tr>
                        <th>Rank</th>
                        <th>User Name</th>
                        <th>Staked SOLOTTO</th>
                        <th>Win Per Raffle</th>
                        <th>Win Once Every</th>
                        <th>Raffle Won</th>
                        <th className="text-right">Total Winnings</th>
                    </tr>
                </thead>
                <tbody className="text-[17px] opacity-60">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.stakedAmount.toLocaleString('en-us', { maximumFractionDigits: 2, minimumFractionDigits: 0 })} SOLOT</td>
                            <td>{user.participationRate.toLocaleString('en-us', { maximumFractionDigits: 2, minimumFractionDigits: 0 })}%</td>
                            <td>{moment(user.bestWin).format('hh:mm')}</td>
                            <td>{user.raffleWon}</td>
                            <td className="text-right">{user.totalWins.toLocaleString('en-us', { maximumFractionDigits: 2, minimumFractionDigits: 0 })} SOL</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}