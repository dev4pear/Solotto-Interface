import * as React from 'react';
import { ReactComponent as StarIcon } from 'assets/icons/Star.svg';
import { IconButton } from '@radix-ui/themes';
import { Icon } from '@iconify-icon/react';

export interface ILotteryItemProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
  title: string;
  children: React.ReactNode;
}

const LotteryItem: React.FC<ILotteryItemProps> = ({
  isActive,
  onClick,
  title,
  children,
}: ILotteryItemProps) => {
  return (
    <div
      className="bg-[#171717] border rounded-xl mt-6 transition-all"
      style={{
        borderColor: isActive ? '#9150F8' : '#3E3E3E',
      }}
    >
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center flex-1 gap-2">
          <StarIcon />
          <p className="text-[22px] font-medium text-white">{title}</p>
        </div>
        <IconButton
          className="!cursor-pointer hover:brightness-75 !rounded-full !bg-[#232323] transition-all group"
          size="3"
          onClick={onClick}
        >
          <Icon
            icon="f7:arrow-up"
            style={{ color: '#CDBABA' }}
            className={`${
              isActive ? 'rotate-45' : 'rotate-[135deg]'
            } group-hover:text-primary transition-all`}
          />
        </IconButton>
      </div>
      <div className={`px-6 ${isActive ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        <div className="py-6 border-t border-[#7C7C7C]">{children}</div>
      </div>
    </div>
  );
};

export default LotteryItem;
