import AboutImage1 from 'assets/images/about-1.png';
import AboutImage2 from 'assets/images/about-2.png';
import AboutImage3 from 'assets/images/about-3.png';
import AboutImage4 from 'assets/images/about-4.png';
import Button from "components/Button";
import { useState } from 'react';
import StakingProcess from './StakingProcess';
import UnstakingProcess from './UnstakingProcess';

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="m-8 mt-24">
            <div className="flex flex-wrap justify-between gap-5">
                <div className="max-w-[638px]">
                    <div className="font-bold text-[59px]">
                        Benefits of SOLOTTO <span className="text-primary">Lotteries</span>
                    </div>
                    <p className='mt-5 font-light text-[16px] opacity-[0.82]'>
                        Welcome to SOLOT, the premier blockchain lottery system built on the innovative Solana platform. SOLOT is designed to democratize
                        lottery experiences by offering a transparent, secure, and fair system. Here, every stake counts not just towards potential winnings,
                        but towards fostering a robust community of participants eager to engage in the blockchain space. Discover how SOLOT combines the
                        excitement of lottery with the integrity of blockchain technology.
                    </p>
                    <div className='flex gap-5 mt-5'>
                        <Button className='text-[15px] font-semibold rounded-xl w-[220px] py-5'>Read Whitepaper</Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='grid grid-cols-2 gap-8 z-[100]'>
                        <img src={AboutImage1} alt='about 1' width={213} />
                        <img src={AboutImage2} alt='about 2' width={213} />
                        <img src={AboutImage3} alt='about 3' width={213} />
                        <img src={AboutImage4} alt='about 4' width={213} />
                    </div>
                </div>
            </div>
            <div className='relative flex mt-24'>
                <div className='z-10 flex gap-8'>
                    {['Staking Process', 'Unstaking Process'].map((tab, index) => (
                        <div
                            key={tab}
                            className={
                                `py-3 text-[23px] cursor-pointer border-b  ${activeTab === index ? 'text-primary border-primary' : 'opacity-30 border-none'
                                }`
                            }
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <hr className='absolute bottom-0 left-0 w-full text-white/50' />
            </div>
            <div className='mt-16'>
                {activeTab === 0 ? <StakingProcess /> : <UnstakingProcess />}
            </div>
        </div>
    )
}