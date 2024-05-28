import SecurityImg from 'assets/images/security.png';
import CryptoTechImg from 'assets/images/crypto_tech.png';
import SecureNetworksImg from 'assets/images/secure_networks.png';
import Button from 'components/Button';

const measures = [
    {
        title: 'Encryption Technologies',
        description: 'Our SSL technology to create a secure connection between your device and our servers, encrypting all data in transit.',
    },
    {
        title: 'Regular Security Audits',
        description: 'Our systems undergo regular security audits conducted by independent third-party security firms.',
    },
    {
        title: 'Blockchain Security',
        description: 'Our platform ensures that all transactions are transparent, tamper-proof, and irreversible.',
    },
    {
        title: 'Data Privacy',
        description: 'We adhere to the General Data Protection Regulation (GDPR), ensuring that your personal information is handled',
    }
]

export default function SecurityPage() {
    return (
        <div className="flex flex-col items-center m-8 mt-24">
            <div className="flex flex-wrap justify-between w-full gap-5">
                <div className="max-w-[638px] w-full">
                    <h1 className="font-bold text-[54px]">Ensuring the Security of Your
                        <span className="text-primary"> Digital Assets</span>
                    </h1>
                    <p className='mt-5 font-light text-[16px] opacity-[0.82]'>
                        Welcome to the SOLOTTO  Security Center, where safeguarding your digital assets and personal information is our top priority. Our
                        advanced security measures are designed to provide maximum protection for your transactions and interactions on our blockchain platform.
                    </p>
                    <h1 className="mt-5 font-semibold text-[21px]">
                        SECURED BY:
                    </h1>
                    <div className='flex items-center gap-5'>
                        <img src={SecureNetworksImg} alt="secure networks" width={122} height={53} />
                        <img src={CryptoTechImg} alt="crypto tech" width={123} height={82} />
                        <img src={SecureNetworksImg} alt="secure networks" width={122} height={53} />
                        <img src={CryptoTechImg} alt="crypto tech" width={123} height={82} />
                    </div>
                </div>
                <img src={SecurityImg} alt="Security" width={448} height={448} />
            </div>
            <div className='max-w-[640px] mx-auto flex flex-col items-center gap-5'>
                <h1 className="font-bold text-[59px] text-center">Security Measures</h1>
                <h1 className="font-light text-[16px] opacity-[0.82] text-center">
                    Welcome to SOLOTTO , the premier blockchain lottery system built on the innovative Solana platform. SOLOT is designed to democratize lottery experiences.
                </h1>
            </div>
            <div className='grid items-stretch grid-cols-1 gap-6 mt-8 lg:grid-cols-2'>
                {measures.map((measure) => (
                    <div key={measure.title} className='flex rounded-md bg-[#232323] group'>
                        <div className='w-[10px] rounded-full transition-all group-hover:bg-primary bg-[#363637]'></div>
                        <div className='flex flex-col px-6 py-4'>
                            <h1 className='transition-all group-hover:text-primary text-[21px] font-semibold'>{measure.title}</h1>
                            <p className='transition-all text-[16px] font-extralight text-white mt-3'>{measure.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button primary className="py-4 px-10 text-[13px] font-semibold rounded-md mt-5">Read BlockPaper</Button>
        </div>
    );
};