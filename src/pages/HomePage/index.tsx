import { ReactComponent as NextIcon } from 'assets/icons/Next.svg';
import Button from 'components/Button';
import RaffleCard from './RaffleCard';
import SolottoFutureImage from 'assets/images/solotto_future.png';
import SolottoSwapImage from 'assets/images/solotto_swap.png';
import { ReactComponent as SwapIcon } from 'assets/icons/Swap.svg';
import { ReactComponent as MetaMaskIcon } from 'assets/icons/MetaMask.svg';
import { ReactComponent as MetaWalletIcon } from 'assets/icons/MetaWallet.svg';
import PriceInput from 'components/Swap/PriceInput';
import { IconButton } from '@radix-ui/themes';
import OutlinedButton from 'components/Button/OutlinedButton';

const linkItems = [
  {
    title: 'Stake and Play',
    description:
      'Participating in SOLOT’s raffles is simple. Just stake your SOLOT tokens and you are instantly eligible to participate in the raffles. No additional steps needed!',
    link: '',
    linkName: 'Stake Now',
  },
  {
    title: 'Opportunities to Win',
    description:
      'With six raffles conducted every day and a special big pot raffle once a month, the chances to win are abundant and continuous.',
    link: '',
    linkName: 'Get Raffle',
  },
  {
    title: 'Claim and Celebrate',
    description:
      'Our system automatically credits your wins to your wallet, making the excitement of victory immediate and hassle-free.',
    link: '',
    linkName: 'Get Reward',
  },
];

export default function HomePage() {
  return (
    <div className="m-8 mt-24">
      <div className="flex flex-wrap justify-between gap-5">
        <div className="max-w-[638px]">
          <h1 className="font-bold text-[54px]">Welcome to SOLOTTO</h1>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-[54px]">The Future of</h1>
            <img alt="Future" src={SolottoFutureImage} width={220} height={85} />
          </div>
          <h1 className="font-bold text-[54px] text-primary">
            Blockchain Lotteries
          </h1>
          <p className="mt-5 font-light text-[16px] opacity-[0.82]">
            Discover the thrill of the SOLOT lottery system, an innovative
            platform that brings transparency, fairness, and excitement directly
            to you through the power of the Solana blockchain. By integrating
            cutting-edge technology, SOLOT offers a seamless lottery experience
            that ensures every participant has a fair chance to win.
          </p>
          <Button
            className="mt-5 text-[15px] font-semibold rounded-xl w-[220px] py-5"
            primary
          >
            Stake Now
          </Button>
        </div>
        <div className="relative flex flex-col gap-5">
          <RaffleCard raffleType="small" />
          <RaffleCard raffleType="major" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-24">
        {linkItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 pl-3 transition-all border-l-4 cursor-pointer border-secondary hover:border-primary group"
          >
            <h2 className="text-[25px] font-semibold transition-all group-hover:text-primary">
              {item.title}
            </h2>
            <p className="text-[16px] font-light opacity-[0.82]">
              {item.description}
            </p>
            <div className="flex items-end flex-grow">
              <div className="flex gap-2 items-center text-[16px] font-light transition-all group-hover:text-primary">
                {item.linkName}{' '}
                <NextIcon className="transition-all group-hover:[&_path]:fill-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Begin Slotto Swap Section*/}
      <div className="grid grid-cols-1 gap-8 mt-24 lg:grid-cols-2 md:gap-15">
        <img alt="Swap" src={SolottoSwapImage} width="100%" className='max-w-[587px] mx-auto' />
        {/* Begin Slotto Swap Card */}
        <div className="border border-[#4C4C4C] bg-[#171717] max-w-[500px] mx-auto">
          <div className="bg-primary rounded-b-2xl h-[30px] flex items-center justify-center">
            <p className="text-sm font-bold text-white">SOLOTTO SWAP</p>
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center justify-center text-lg text-white">
              <p>Most Trusted Swap by SOLOTTO.</p>
              <p>Keep your slippage low.</p>
            </div>

            <PriceInput />

            <div className='relative w-full'>
              <div className='absolute mx-[55%] -my-6'>
                <IconButton variant='solid' className='transition-all cursor-pointer !bg-[#212429] !rounded-full !w-[72px] !h-[72px] hover:shadow-[0_0_8px] hover:shadow-primary'>
                  <SwapIcon />
                </IconButton>
              </div>
            </div>

            <PriceInput />

            <div className="mt-4">
              <div id="swap-info-header">
                <h6 className='text-base'>FETCHING THE BEST PRICE</h6>
              </div>
              <div id="swap-info-body" className='mt-4 text-sm font-light'>
                <div className='flex items-center justify-between'>
                  <p>Price Confirmed:</p>
                  <p>0.0001 ETH per SHIB</p>
                </div>
                <hr className='text-[#736B6B] mt-2' />
                <div className='flex items-center justify-between mt-2'>
                  <p>Estimated Gas Fee:</p>
                  <p>0.005 ETH</p>
                </div>
                <hr className='text-[#736B6B] mt-2' />
                <div className='flex items-center justify-between mt-2'>
                  <p>Transaction Speed:</p>
                  <p>{"Instant (<1 min)"}</p>
                </div>
                <hr className='text-[#736B6B] mt-2' />
                <div className='flex items-center justify-between mt-2'>
                  <p>Slippage:</p>
                  <p>0.5%</p>
                </div>
                <hr className='text-[#736B6B] mt-2' />
              </div>
            </div>

            <div className='grid grid-cols-1 gap-3 mt-6 md:grid-cols-2'>
              <OutlinedButton size="4">
                <MetaMaskIcon />
                CONNECT METAMASK
              </OutlinedButton>
              <OutlinedButton size="4">
                <MetaWalletIcon />
                CONNECT METAMASK
              </OutlinedButton>
            </div>
          </div>
          <div className="bg-primary rounded-t-3xl h-[64px] flex items-center justify-center cursor-pointer hover:brightness-75 transition-all">
            <p className="text-xl font-bold text-white">SWAP NOW</p>
          </div>
        </div>
        {/* End Slotto Swap Card */}
      </div>
      {/* End Slotto Swap Section */}
    </div>
  );
}
