import WinnerImage from 'assets/images/winner.png';
import GroupImage from 'assets/images/Group.png';
import HowWeStarted from './HowWeStarted';
import Lotteries from './Lotteries';

export default function AboutPage() {
  return (
    <div className="m-8 mt-24">
      <div className="flex flex-wrap justify-between gap-5">
        <div className="max-w-[638px]">
          <h1 className="font-bold text-[59px]">
            Where Luck Meets Technology{' '}
            <span className="text-primary">About Us</span>
          </h1>
          <p className="mt-5 font-light text-[16px] opacity-[0.82]">
            Discover who we are, what drives us, and how we are revolutionizing
            the lottery experience with blockchain technology.
          </p>
          <div className="mt-9">
            <div className="flex items-stretch">
              <span className="bg-primary w-[6px] rounded-full"></span>
              <div className="px-4 py-1 bg-transparent">
                <h6 className="text-2xl font-bold text-primary">Community</h6>
                <p className="mt-2 text-base text-white">
                  Building a strong, supportive community of players and
                  advocates.
                </p>
              </div>
            </div>
            <div className="flex items-stretch mt-9">
              <span className="bg-primary w-[6px] rounded-full"></span>
              <div className="px-4 py-1 bg-transparent">
                <h6 className="text-2xl font-bold text-primary">
                  Transparency
                </h6>
                <p className="mt-2 text-base text-white">
                  Upholding fairness and transparency in every draw and
                  transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto">
          <img src={WinnerImage} alt="winner" width="100%" />
          <button className='absolute px-12 py-2 text-base font-bold text-black -translate-x-1/2 rounded-md bottom-12 left-1/2 buy-now-button hover:shadow-sm hover:shadow-yellow-100'>
            Buy now
          </button>
        </div>
      </div>
      <div className="mt-24">
        <HowWeStarted />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-24 lg:grid-cols-2">
        <img
          src={GroupImage}
          alt="group"
          width="100%"
          className="max-w-[500px] mx-auto"
        />
        <div>
          <h1 className="text-[39px] text-white font-semibold">
            To Be the Global Leader in{' '}
            <span className="text-primary">Blockchain Lotteries</span>
          </h1>
          <p className="mt-4 text-sm font-light">
            Our goal is to integrate cutting-edge technology with traditional
            lattery systems to create seamless and exciting gameplay.
          </p>
          <div className="mt-6">
            <Lotteries
              items={[
                {
                  title: 'Innovative Gaming Experience',
                  description:
                    'SOLOTTO is committed to making lottery participation accessible to a worldwide audience. By leveraging blockchain technology, we remove geographical and regulatory barriers, allowing users from different parts of the world to participate securely and effortlessly. Our system supports multiple currencies and offers a simple, user-friendly interface, making global participation a reality.',
                },
                {
                  title: 'Community and Growth',
                  description:
                    'SOLOTTO is committed to making lottery participation accessible to a worldwide audience. By leveraging blockchain technology, we remove geographical and regulatory barriers, allowing users from different parts of the world to participate securely and effortlessly. Our system supports multiple currencies and offers a simple, user-friendly interface, making global participation a reality.',
                },
                {
                  title: 'Global Accessibility',
                  description:
                    'SOLOTTO is committed to making lottery participation accessible to a worldwide audience. By leveraging blockchain technology, we remove geographical and regulatory barriers, allowing users from different parts of the world to participate securely and effortlessly. Our system supports multiple currencies and offers a simple, user-friendly interface, making global participation a reality.',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
