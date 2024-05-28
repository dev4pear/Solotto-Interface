import HowWeStartedBgBL from 'assets/images/HowWeStartedBgBL.svg';
import HowWeStartedBgTR from 'assets/images/HowWeStartedBgTR.svg';
import { ReactComponent as InitialIdeaIcon } from 'assets/icons/InitialIdea.svg';
import { ReactComponent as VisionIcon } from 'assets/icons/Vision.svg';
import { ReactComponent as PlatformIcon } from 'assets/icons/Platform.svg';

export default function HowWeStarted() {
  return (
    <div className="relative bg-[#171717] rounded-3xl overflow-hidden px-6 py-10">
      {/* patterns */}
      <img
        alt="bl_bg"
        src={HowWeStartedBgBL}
        className="absolute bottom-0 left-0"
      />
      <img
        alt="bl_bg"
        src={HowWeStartedBgTR}
        className="absolute top-0 right-0"
      />

      <h1 className="font-bold text-[39px] text-white text-center">
        How We Started
      </h1>
      <div className="w-[300px] bg-[#D9D9D9] rounded-full h-2 relative p-0 mx-auto mt-6">
        <div className="w-[250px] bg-primary rounded-full h-2"></div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div>
            <div className="w-[82px] h-[82px] rounded-lg border border-primary bg-[#0B070E] flex items-center justify-center mx-auto">
              <InitialIdeaIcon />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-center text-primary">Initial Idea</h2>
            <p className="w-2/3 mx-auto mt-4 text-base text-center text-white">
              The potential of blockchain technology to enhance transparency and
              fairness in gaming
            </p>
          </div>
          
          <div className='lg:border lg:border-r-0 lg:border-l lg:border-y-0 lg:border-[#78737B]'>
            <div className="w-[82px] h-[82px] rounded-lg border border-primary bg-[#0B070E] flex items-center justify-center mx-auto">
              <VisionIcon />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-center text-primary">Vision</h2>
            <p className="w-2/3 mx-auto mt-4 text-base text-center text-white">
              The lottery industry by integrating blockchain technology, aiming to make lotteries more accssible and trustworthy.
            </p>
          </div>

          <div className='lg:border lg:border-r-0 lg:border-l lg:border-y-0 lg:border-[#78737B]'>
            <div className="w-[82px] h-[82px] rounded-lg border border-primary bg-[#0B070E] flex items-center justify-center mx-auto">
              <PlatformIcon />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-center text-primary">Platform</h2>
            <p className="w-2/3 mx-auto mt-4 text-base text-center text-white">
              The technical and strategic challenges faced while developing the SOLOTTO platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
