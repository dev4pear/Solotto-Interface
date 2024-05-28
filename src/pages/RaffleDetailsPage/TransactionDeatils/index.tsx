import moment from "moment";

const transactions = [
    {
        name: "#5y4683",
        walletAddress: "0xb79....5ea0ba",
        amount: 1277,
        status: 'Paid',
        fee: 1.34,
        timestamp: new Date(),
    },
    {
        name: "#5y4683",
        walletAddress: "0xb79....5ea0ba",
        amount: 1277,
        status: 'Paid',
        fee: 1.34,
        timestamp: new Date(),
    },
    {
        name: "#5y4683",
        walletAddress: "0xb79....5ea0ba",
        amount: 1277,
        status: 'Paid',
        fee: 1.34,
        timestamp: new Date(),
    },
    {
        name: "#5y4683",
        walletAddress: "0xb79....5ea0ba",
        amount: 1277,
        status: 'Paid',
        fee: 1.34,
        timestamp: new Date(),
    },
];

export default function TransactionDetails() {
    return (
        <div className="mt-10 w-full">
            <h1 className="font-semibold text-[25px]">Transaction Detail</h1>
            <div className=" w-full rounded-xl border border-[#454242] overflow-hidden">
                <table className="w-full p-5 [&_th]:p-5 [&_td]:p-5 [&_th]:font-normal [&_td]:border-t [&_td]:border-[#454242]">
                    <thead className="text-[17px] text-left ">
                        <tr>
                            <th>Rank</th>
                            <th>User Name</th>
                            <th>Wallet Address</th>
                            <th>Amounts</th>
                            <th>Status</th>
                            <th>Fees</th>
                            <th className="text-right">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-[17px] opacity-60">
                        {transactions.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.walletAddress}</td>
                                <td>{user.amount.toLocaleString('en-us', { maximumFractionDigits: 2, minimumFractionDigits: 0 })} SOL</td>
                                <td className="text-[#69EE00]">{user.status}</td>
                                <td>${user.fee}</td>
                                <td className="text-right">{moment(user.timestamp).format("MM/DD/YY : HH:mmA")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}