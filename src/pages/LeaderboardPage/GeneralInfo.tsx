import Timer from "components/Timer";

export default function GeneralInfo() {
    return (
        <div className="mt-10 grid grid-cols-4 w-full gap-5">
            <div className="flex flex-col justify-between bg-pane rounded-md p-5">
                <h1 className="font-bold text-[59px] text-left">1288</h1>
                <p className="text-[18px] opacity-50 text-left">Total Registered: 1277</p>
            </div>
            <div className="flex flex-col justify-between bg-pane rounded-md p-5">
                <h1 className="font-bold text-[59px] text-left">1288</h1>
                <p className="text-[18px] opacity-50 text-left">Staked SOLOT Tokens</p>
            </div>
            <div className="col-span-2 flex flex-col justify-between bg-pane rounded-md p-5 gap-10">
                <div className="flex justify-between">
                    <h1 className="font-semibold text-[28px] text-left">Remaining time for completion</h1>
                    <Timer />
                </div>
                <p className="text-[18px] opacity-50 text-left">The more you staked, more prizes you will win</p>
            </div>
        </div>
    )
}