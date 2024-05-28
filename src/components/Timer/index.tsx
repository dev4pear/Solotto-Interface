export default function Timer() {
    const remainingTime = (new Date("06/06/2024").getTime() - new Date().getTime()) / 1000 / 60;
    return (
        <div className="flex font-semibold text-[30px] gap-1 h-fit">
            {
                [
                    Math.floor(remainingTime / 24 / 60),
                    Math.floor((remainingTime % (24 * 60)) / 60),
                    Math.floor(remainingTime % 60),
                ].map((value, index) => (
                    <div key={`timer-${index}`}>
                        <div className="w-[50px] text-center relative">
                            {String(value).padStart(2, "0")}
                            <span className="absolute left-0 bottom-0 text-[12px] w-[50px] text-center opacity-50">
                                {["Days", "Hours", "Minutes"][index]}
                            </span>
                            <div className="h-2"></div>
                        </div>
                        {index < 2 ? ":" : ""}
                    </div>
                ))
            }
        </div>
    );
};