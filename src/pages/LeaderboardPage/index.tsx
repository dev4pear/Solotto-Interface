import Button from "components/Button";
import GeneralInfo from "./GeneralInfo";
import RankingTable from "./RankingTable";
import TopUsers from "./TopUsers";

export default function LeaderboardPage() {
    return (
        <div className="m-8 mt-24 flex flex-col items-center">
            <h1 className="font-bold text-[59px] text-center">Leaderboard</h1>
            <p className="font-light text-[16px] text-center max-w-[640px] opacity-[0.82]">
                Welcome to SOLOT, the premier blockchain lottery system built on the innovative Solana platform.
                SOLOT is designed to democratize lottery experiences.
            </p>
            <GeneralInfo />
            <TopUsers />
            <RankingTable />
            <Button primary className="py-4 px-10 text-[13px] font-semibold rounded-md mt-5">Scroll More</Button>
        </div>
    )
}