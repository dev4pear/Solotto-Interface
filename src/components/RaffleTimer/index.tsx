export default function RaffleTimer() {
    const remainingTime = (new Date("06/06/2024").getTime() - new Date().getTime()) / 1000 / 60;
    const days = Math.floor(remainingTime / 24 / 60), hours = Math.floor((remainingTime % (24 * 60)) / 60), minutes = Math.floor(remainingTime % 60);
    return (
        <div className='py-1 border-white border-y-2'>
            <div className="font-semibold text-[30px] flex gap-1 h-fit">
                <div className="w-[50px] text-center relative">
                    {String(days).padStart(2, "0")}
                    <div className="text-[12px] overflow-visible whitespace-nowrap text-center opacity-50 font-light">
                        Days
                    </div>
                </div>
                <span>:</span>
                <div className="w-[50px] text-center relative">
                    {String(hours).padStart(2, "0")}
                    <div className="text-[12px] overflow-visible whitespace-nowrap text-center opacity-50 font-light">
                        Hours
                    </div>
                </div>
                <span>:</span>
                <div className="w-[50px] text-center relative">
                    {String(minutes).padStart(2, "0")}
                    <div className="text-[12px] overflow-visible whitespace-nowrap text-center opacity-50 font-light">
                        Minutes
                    </div>
                </div>
            </div>
        </div>
    );
};