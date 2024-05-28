import { Icon } from '@iconify-icon/react';
import { DropdownMenu } from '@radix-ui/themes';
import { BaseButton } from '@radix-ui/themes/dist/cjs/components/base-button';
import * as React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { ReactComponent as ShibaInnuIcon } from 'assets/icons/ShibaInnu.svg';
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg';

export interface IPriceInputProps {}

const tokens = [
  {
    name: 'SHIBA INNU',
    icon: <ShibaInnuIcon />,
  },
  {
    name: 'Ethereum',
    icon: <EthereumIcon width={40} height={30} />,
  },
];

const PriceInput: React.FC<IPriceInputProps> = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <div className="mt-6 rounded-lg border border-[#666060] p-1 flex items-stretch h-[65px]">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <BaseButton className="!p-2 !bg-transparent items-center flex !gap-[5px] hover:!bg-white/10 !h-full cursor-pointer">
            <Icon icon="bi:caret-down-fill" style={{ color: '#616264' }} />
            <div className="flex items-center gap-1">
              {tokens[activeIndex].icon}
              <p className="text-base font-medium text-white">
                {tokens[activeIndex].name}
              </p>
            </div>
          </BaseButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="!bg-[#171717]">
          {tokens.map((token, i) => (
            <DropdownMenu.Item
              key={`token-${i}`}
              className="!h-[44px] !px-1 flex items-center gap-1 justify-left cursor-pointer"
              onClick={e => {
                setActiveIndex(i);
              }}
            >
              {token.icon}
              <p className="text-base text-white">{token.name}</p>
            </DropdownMenu.Item>
          ))}
          {/* <DropdownMenu.Separator /> */}

          {/* <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub> */}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <CurrencyInput
        id="from_price"
        name="from-price"
        placeholder="$0.00"
        prefix="$"
        defaultValue={0}
        decimalsLimit={6}
        onValueChange={(value, name, values) => {
          console.log(value, name, values);
        }}
        className="bg-transparent focus-visible:!outline-none text-lg p-2 flex-1 text-right !min-w-0"
      />
    </div>
  );
};

export default PriceInput;
