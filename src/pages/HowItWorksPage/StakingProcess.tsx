import { ReactComponent as WalletIcon } from 'assets/icons/Wallet.svg';
import { ReactComponent as AcquireIcon } from 'assets/icons/Acquire.svg';
import { ReactComponent as StakeIcon } from 'assets/icons/Stake.svg';
import { ReactComponent as EarnIcon } from 'assets/icons/Earn.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg';
import StakeBox from 'assets/images/stake_box.png';
import StepItem from './StepItem';
import Button from 'components/Button';

const steps = [
    {
        title: 'Create a Wallet:',
        description: "Set up a Solana-compatible wallet if you don't have one.",
        icon: <WalletIcon />
    },
    {
        title: 'Acquire SOLOT Tokens:',
        description: 'Purchase SOLOT tokens through approved exchanges or directly via our website.',
        icon: <AcquireIcon />
    },
    {
        title: 'Stake Your Tokens:',
        description: 'Visit your dashboard on our site to stake any amount of SOLOT tokens.',
        icon: <StakeIcon />
    },
    {
        title: 'Hold to Earn:',
        description: 'The longer you hold your stake, the more chances you get in multiple raffles, enhancing your opportunities to win. ',
        icon: <EarnIcon />
    },
];
export default function StakingProcess() {
    return (
        <div className='flex justify-between gap-5 flex-wrap'>
            <div className='w-1/2 flex flex-col gap-16'>
                {steps.map((step, index) => (
                    <StepItem key={step.title} step={step} lastItem={steps.length === index + 1} />
                ))}
            </div>
            <div className='relative h-fit'>
                <img src={StakeBox} alt="Stake Box" className='w-[434px] h-[434px]' />
                <div className='absolute -bottom-3 -left-[100px] p-4 rounded-xl flex flex-col gap-4 bg-[#141017] max-w-[186px] drop-shadow-[0px_4px_26px_rgba(255,255,255,0.25)]'>
                    <h1 className='font-semibold test-[23px] text-primary'>Ready to Stake Your Token Now</h1>
                    <div className='relative'>
                        <input type='text' placeholder='About Raffle' className="bg-secondary w-full rounded-md px-5 py-3 pl-10 border border-white/50" />
                        <button className='absolute left-4 top-4'>
                            <SearchIcon />
                        </button>
                    </div>
                    <Button primary className='px-10 py-3 font-bold text-[12.5px] rounded-md'>Stake Now</Button>
                </div>
            </div>
        </div>
    );
};