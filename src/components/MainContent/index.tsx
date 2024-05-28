import { Route, Routes } from 'react-router-dom';
import Topbar from "components/Topbar";
import HomePage from '../../pages/HomePage';
import LeaderboardPage from '../../pages/LeaderboardPage';
import RaffleDetailsPage from '../../pages/RaffleDetailsPage';
import SecurityPage from '../../pages/SecurityPage';
import AboutPage from '../../pages/AboutPage';
import Web3TestPage from 'pages/Web3TestPage';
import HowItWorksPage from 'pages/HowItWorksPage';


export default function MainContent() {
    return (
        <div className='relative flex flex-col'>
            <div className='absolute right-5 top-30 rounded-full bg-primary opacity-0.4 blur-[250px] w-[500px] h-[500px]'></div>
            <div className='z-10 flex flex-col'>
                <Topbar />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/home" Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/how-it-works" Component={HowItWorksPage} />
                    <Route path="/leaderboard" Component={LeaderboardPage} />
                    <Route path="/raffle-details" Component={RaffleDetailsPage} />
                    <Route path="/security" Component={SecurityPage} />
                    <Route path="/test" Component={Web3TestPage} />
                </Routes>
            </div>
        </div>
    );
}