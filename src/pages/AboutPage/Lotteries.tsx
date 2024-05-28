import * as React from 'react';
import LotteryItem from './LotteryItem';

export interface ILotteriesProps {
  items: Array<{
    title: string;
    description: string;
  }>;
}

const Lotteries: React.FC<ILotteriesProps> = ({ items }: ILotteriesProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <div>
      {items.map((item, i) => (
        <LotteryItem
          key={`lottery-${i + 1}`}
          title={item.title}
          isActive={activeIndex === i + 1}
          onClick={e => {
            if (activeIndex === i + 1) setActiveIndex(0);
            else setActiveIndex(i + 1);
          }}
        >
          {item.description}
        </LotteryItem>
      ))}
    </div>
  );
};

export default Lotteries;
