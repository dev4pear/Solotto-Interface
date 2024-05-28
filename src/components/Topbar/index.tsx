import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg';
import { ReactComponent as NotificationIcon } from 'assets/icons/Notification.svg';
import { ReactComponent as UserIcon } from 'assets/icons/User.svg';
// import Button from 'components/Button';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Topbar() {
    return (
        <div className="m-8 flex items-center justify-between">
            <div className="relative w-[390px] rounded-md flex">
                <input
                    type="text"
                    placeholder="Search SOLOT Lottery here..."
                    className="bg-secondary w-[390px] rounded-md absolute h-full px-5 outline-none"
                />
                <button className='bg-primary p-4 rounded-md m-[2px] ml-auto z-[100]'>
                    <SearchIcon />
                </button>
            </div>

            <div className='flex gap-4 items-center'>
                <NotificationIcon className='cursor-pointer' />
                <UserIcon className='cursor-pointer' />
                <WalletMultiButton>
                    {/* <Button primary className='px-10 py-3 font-semibold text-[12px] rounded-md'>Connect Wallet</Button> */}
                </WalletMultiButton>
            </div>
        </div>
    );
};