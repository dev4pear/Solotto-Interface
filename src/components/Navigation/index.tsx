import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HomeWhiteIcon } from 'assets/icons/HomeWhite.svg';
import { ReactComponent as HomeGrayIcon } from 'assets/icons/HomeGray.svg';
import { ReactComponent as CycleWhiteIcon } from 'assets/icons/CycleWhite.svg';
import { ReactComponent as CycleGrayIcon } from 'assets/icons/CycleGray.svg';
import { ReactComponent as ProtectWhiteIcon } from 'assets/icons/ProtectWhite.svg';
import { ReactComponent as ProtectGrayIcon } from 'assets/icons/ProtectGray.svg';
import { ReactComponent as DetailsGrayIcon } from 'assets/icons/DetailsGray.svg';
import { ReactComponent as DetailsWhiteIcon } from 'assets/icons/DetailsWhite.svg';
import { ReactComponent as AboutGrayIcon } from 'assets/icons/AboutGray.svg';
import { ReactComponent as AboutWhiteIcon } from 'assets/icons/AboutWhite.svg';
import { ReactComponent as TokenomicsGrayIcon } from 'assets/icons/TokenomicsGray.svg';
import { ReactComponent as TokenomicsWhiteIcon } from 'assets/icons/TokenomicsWhite.svg';
import { ReactComponent as PublicSaleGrayIcon } from 'assets/icons/PublicSaleGray.svg';
import { ReactComponent as PublicSaleWhiteIcon } from 'assets/icons/PublicSaleWhite.svg';
import { ReactComponent as RaffleHistoryGrayIcon } from 'assets/icons/RaffleHistoryGray.svg';
import { ReactComponent as RaffleHistoryWhiteIcon } from 'assets/icons/RaffleHistoryWhite.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/ArrowDown.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg';

const items = [
    {
        name: 'Home',
        path: '/',
        icons: [
            <HomeWhiteIcon />,
            <HomeGrayIcon />,
        ],
    },
    {
        name: 'About',
        path: '/about',
        icons: [
            <AboutWhiteIcon />,
            <AboutGrayIcon />,
        ],
    },
    {
        name: 'How it works',
        path: '/how-it-works',
        children: [
            'Benefits of SOLOTTO',
            'Staking Process',
            'Raffles & Unstaking',
        ],
        icons: [
            <CycleWhiteIcon />,
            <CycleGrayIcon />,
        ],
    },
    {
        name: 'Tokenomics',
        path: '/tokenomics',
        icons: [
            <TokenomicsWhiteIcon />,
            <TokenomicsGrayIcon />,
        ],
    },
    {
        name: 'Public Sale',
        path: '/public-sale',
        icons: [
            <PublicSaleWhiteIcon />,
            <PublicSaleGrayIcon />,
        ],
    },
    {
        name: 'Leaderboard',
        path: '/leaderboard',
        icons: [
            <ProtectWhiteIcon />,
            <ProtectGrayIcon />,
        ],
    },
    {
        name: 'Raffle Details',
        path: '/raffle-details',
        children: [
            'Raffle Details',
            'Transaction Taxes',
        ],
        icons: [
            <DetailsWhiteIcon />,
            <DetailsGrayIcon />,
        ],
    },
    {
        name: 'Raffle History',
        path: '/raffle-history',
        children: [
            'Raffle Details',
            'Transaction Taxes',
        ],
        icons: [
            <RaffleHistoryWhiteIcon />,
            <RaffleHistoryGrayIcon />,
        ],
    },
    {
        name: 'Security',
        path: '/security',
        icons: [
            <ProtectWhiteIcon />,
            <ProtectGrayIcon />,
        ],
    }
];

export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="mt-8 pr-[6px]">
            <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                    <NavLink key={item.name} to={item.path}>
                        <div key={item.name} className={`flex gap-8 cursor-pointer group transition-all`} onClick={() => setActiveIndex(index)}>
                            <div className={`w-[5px] rounded-r-md group-hover:bg-primary transition-all ${activeIndex === index ? 'bg-primary' : ''}`}></div>
                            <div className={`flex flex-col items-center gap-3 w-full p-3 rounded-md ${activeIndex === index ? 'bg-primary' : ''}`}>
                                <div className={`flex items-center w-full gap-[10px]`}>
                                    <div className={`transition-all group-hover:brightness-[1000] ${activeIndex === index ? '[&_path]:fill-white brightness-[1000]' : ''}`}>{item.icons[activeIndex === index ? 0 : 1]}</div>
                                    <div className={`flex items-center justify-between w-full`}>
                                        <div className={`font-iner text-[14px] transition-all group-hover:text-white ${activeIndex === index ? '' : 'text-secondary'}`}>{item.name}</div>
                                        <div>
                                            {(item.children?.length && activeIndex === index) ?
                                                <ArrowDownIcon className='transition-all group-hover:brightness-[1000] [&_path]:fill-white' /> :
                                                <ArrowRightIcon className={`transition-all group-hover:brightness-[1000] ${activeIndex === index ? '[&_path]:fill-white' : ''}`} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                {item.children && <div className={`flex flex-col gap-2 ${activeIndex === index ? '' : 'hidden'}`}>
                                    {(item.children || []).map((child) => (
                                        <div key={child} className='text-[10px]'>{child}</div>
                                    ))}
                                </div>}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}