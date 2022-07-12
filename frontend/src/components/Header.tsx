import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import LogoSvg from '../assets/icons/logo.svg';

export function Header() {
  return (
    <header className="bg-blue-400 h-10 px-5 flex items-center justify-between">
      <FiMenu size={36} className="text-white" />
      <Image src={LogoSvg} />
      <div />
    </header>
  );
}
