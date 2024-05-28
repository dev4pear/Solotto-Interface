import { ReactComponent as LogoIcon } from 'assets/icons/Logo.svg'
export default function Logo() {
    return (
        <div className="border-b border-gray">
            <LogoIcon className='m-8 cursor-pointer' />
        </div>
    );
}