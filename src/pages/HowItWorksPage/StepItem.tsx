export type Step = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export default function StepItem({step, lastItem}: { step: Step, lastItem?: boolean }) {
    return (
        <div className='flex gap-5 group cursor-pointer relative'>
            <div className='p-5 border border-secondary rounded-md group-hover:border-primary bg-secondary/[0.12] h-fit z-10'>
                <div className='w-8 h-8'>{step.icon}</div>
            </div>
            <div className={`absolute left-9 top-[74px] h-[calc(100%-10px)] border-2 border-dashed border-primary ${lastItem ? 'hidden' : ''}`}></div>
            <div>
                <h1 className='font-semibold text-[21px] group-hover:text-primary'>{step.title}</h1>
                <p className='font-light text-[16px] opacity-[0.6] max-w-[450px]'>{step.description}</p>
            </div>
        </div>
    );
};