import Button from 'components/Button';
import RaffleTimer from 'components/RaffleTimer';
import Barcode from 'react-barcode';

export default function RaffleCard({ raffleType }: { raffleType: string }) {
    return (
        <div className='relative font-[montserrat] -mr-8' style={{
            background: "url(assets/RaffleCard.svg)",
            backgroundSize: "cover"
        }}>
            <div className='grid w-full h-full grid-cols-4'>
                <div className='col-span-3 px-6 py-5'>
                    <div className='grid h-full grid-cols-8 border-2 border-white'>
                        <div className='text-white text-[20px] flex items-center justify-center custom-writing-mode rotate-180'>123632489</div>
                        <div className='flex flex-col items-center justify-between col-span-6 gap-2 p-3 border-white border-x-2'>
                            <h1 className='text-primary font-bold text-[20px] uppercase'>{raffleType === 'major' ? 'Major Raffle' : 'Small Raffle'}</h1>
                            <RaffleTimer />
                            <Button className='text-[10px] font-semibold px-5 py-2 rounded-md' primary={raffleType === 'major'}>STAKE NOW</Button>
                        </div>                        
                        <div className='text-white text-[20px] flex items-center justify-center custom-writing-mode'>123632489</div>
                    </div>
                </div>
                <div className='relative flex items-center bg-white'>
                    <div className='flex items-center justify-center -rotate-90 -ml-14'>
                        <Barcode width={0.9} height={32} ean128 value="12 34248 932489" />
                    </div>
                    <div className='absolute right-2 text-black font-semibold text-[25px] flex items-center justify-center custom-writing-mode rotate-180'>ONE RAFFLE</div>
                </div>
            </div>
        </div>
    );
}