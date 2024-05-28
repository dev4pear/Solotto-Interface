import UserAvatar1 from 'assets/images/user-avatar-1.png';
import UserAvatar2 from 'assets/images/user-avatar-2.png';
import UserAvatar3 from 'assets/images/user-avatar-3.png';
import GoldeMedal from 'assets/images/golden-medal.png';

const topUsers = [
    {
        name: "1A1zP1e.......5SLmv7DivfNa",
        id: "#65445",
        avatar: UserAvatar1,
        stakedAmount: 1277,
        participationRate: 43,
        totalWins: 40555,
    },
    {
        name: "1A1zP1e.......5SLmv7DivfNa",
        id: "#65445",
        avatar: UserAvatar2,
        stakedAmount: 1277,
        participationRate: 43,
        totalWins: 40555,
    },
    {
        name: "1A1zP1e.......5SLmv7DivfNa",
        id: "#65445",
        avatar: UserAvatar3,
        stakedAmount: 1277,
        participationRate: 43,
        totalWins: 40555,
    },
]
export default function TopUsers() {

    return (
        <div className="mt-10 grid grid-cols-3 gap-5 w-full">
            {topUsers.map((user, index) => (    
            <div key={index} className={`flex flex-col gap-10 p-5 rounded-md bg-pane relative ${!index ? 'border' : ''} border-[#C6972B]`}>
                <div className='flex gap-4 items-center'>
                    <img src={user.avatar} alt='User Avatar' className='rounded-full' width={index ? 45 : 60} height={index ? 45 : 60} />
                    <div>
                        <h1 className='font-semibold text-[15px]'>{user.name}</h1>
                        <p className='text-[15px] opacity-[0.58]'>{user.id}</p>
                    </div>
                </div>
                {!index && <div className="absolute right-5 top-0">
                    <img src={GoldeMedal} width={50} alt='Golde Medal' />
                </div>}
                <div className="flex gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] opacity-50">Staked Amount</p>
                        <p className="text-[16px]">{user.stakedAmount} SOLOTTO</p>
                    </div>
                    <div className="h-full border border-white opacity-[0.12]"></div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] opacity-50">Participation Rate</p>
                        <p className="text-[16px]">{user.participationRate}%</p>
                    </div>
                    <div className="h-full border border-white opacity-[0.12]"></div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[13px] opacity-50">Total Winnings</p>
                        <p className="text-[16px]">{user.participationRate} SOL</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};