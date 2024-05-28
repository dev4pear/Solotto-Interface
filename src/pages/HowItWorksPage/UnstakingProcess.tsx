import { ReactComponent as LayersIcon } from 'assets/icons/Layers.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/Clock.svg';
import { ReactComponent as StackIcon } from 'assets/icons/StackToken.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg';
import UnstakingProcessImg from 'assets/images/unstaking_process.png';
import StepItem, { Step } from './StepItem';
import Button from 'components/Button';

const steps: Array<Step> = [
    {
        title: 'Initiate Unstaking',
        description: "Deciding to unstake your tokens is a significant choice that affects your participation in upcoming raffles.",
        icon: <LayersIcon />
    },
    {
        title: 'Cooldown Period',
        description: 'During this time, your tokens will not participate in any raffles. This period allows for a clear separation of staked entries from the raffle draws, ensuring fairness to all participants.',
        icon: <ClockIcon />
    },
    {
        title: 'Return of Tokens',
        description: 'Once the cooldown period has elapsed, your tokens are automatically returned to your wallet. You are now free to use or restake them as you see fit.',
        icon: <StackIcon />
    }
];
export default function UnstakingProcess() {
    return (
        <div className='flex justify-between flex-wrap gap-5'>
            <div className='w-1/2 flex flex-col gap-16'>
                {steps.map((step, index) => (
                    <StepItem key={step.title} step={step} lastItem={steps.length === index + 1} />
                ))}
            </div>
            <div className='relative h-fit'>
                <img src={UnstakingProcessImg} alt="Unstaking Process" className='w-[656px]' />
                <div className='absolute top-4 -left-4 p-4 rounded-xl flex flex-col gap-4 bg-[#141017] max-w-[218px] drop-shadow-[0px_4px_26px_rgba(255,255,255,0.25)]'>
                    <h1 className='font-semibold test-[23px] text-primary'>Unstake Your Token Now</h1>
                    <div className='relative'>
                        <input type='text' placeholder='About Raffle' className="bg-secondary w-full rounded-md px-5 py-3 pl-10 border border-white/30" />
                        <button className='absolute left-4 top-4'>
                            <SearchIcon />
                        </button>
                    </div>
                    <Button primary className='py-3 font-bold text-[12.5px] rounded-md'>Purchase Token Again!</Button>
                </div>
            </div>
        </div>
    );
};