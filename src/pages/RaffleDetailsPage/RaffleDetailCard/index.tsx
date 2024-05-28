import SmallRaffleCardImg from 'assets/images/small_raffle_card.png';
import MajorRaffleCardImg from 'assets/images/major_raffle_card.png';
import RaffleTimer from 'components/RaffleTimer';

export default function RaffleDetailCard({ raffleType }: { raffleType: string }) {
    return (
        <div className="rounded-xl bg-black overflow-hidden flex flex-col">
            <div className="flex items-center justify-center bg-primary h-20">
                <h1 className="font-semibold text-[20px]">
                    {raffleType === 'major' ? 'MAJOR RAFFLE' : 'SMALL RAFFLE'}
                </h1>
            </div>
            <div className="border border-x-secondary border-y-0 px-10 py-5 flex flex-col flex-grow justify-between">
                {raffleType === 'small' &&
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-semibold text-[20px]">Frequency of Draws</h1>
                            <ul className="list-disc list-inside ml-2">
                                <li className="font-light text-[16px] my-2">Daily Draws: Small Raffles are held multiple times a day at scheduled intervals.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px]">Small Raffle Rewards</h1>
                            <ul className="list-disc list-inside ml-2">
                                <li className="font-light text-[16px] my-2">Immediate SOL Rewards: Winners receive SOL tokens directly to their wallets.</li>
                                <li className="font-light text-[16px] my-2">Bonus Tokens: Occasionally, bonus SOL tokens to use in future raffles.</li>
                                <li className="font-light text-[16px] my-2">Special Prizes: Exclusive digital assets or NFTs that can be used within our platform or traded.</li>
                            </ul>
                        </div>
                    </div>
                }
                {raffleType === 'major' &&
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-semibold text-[20px]">Frequency of Draws</h1>
                            <ul className="list-disc list-inside ml-2">
                                <li className="font-light text-[16px] my-2">Monthly Draws: Held at the end of each month, giving you plenty of time to decide your strategy and stake your tokens.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px]">Major Raffle Rewards</h1>
                            <ul className="list-disc list-inside ml-2">
                                <li className="font-light text-[16px] my-2">Large SOL Amounts: Significant sums of SOL tokens directly credited to your wallet.</li>
                                <li className="font-light text-[16px] my-2">Exclusive NFTs: Rare digital assets that can be traded or held as valuable collectibles.</li>
                                <li className="font-light text-[16px] my-2">Special Prizes: Partnerships with other platforms may also bring in unique rewards such as hardware wallets, merchandise, or access to exclusive events</li>
                            </ul>
                        </div>
                    </div>
                }
                <div className="grid gap-5 grid-cols-2 mt-5">
                    <img src={raffleType === "small" ? SmallRaffleCardImg : MajorRaffleCardImg} alt='raffle card' />
                    <div className='flex items-center justify-center'>
                        <RaffleTimer />
                    </div>
                </div>
            </div>
            <button className={`w-full flex items-center justify-center h-20 rounded-b-xl border border-primary ${raffleType === 'major' ? 'bg-primary' : 'text-primary'} font-bold text-[20px]`}>
                STAKE NOW
            </button>
        </div>
    );
}