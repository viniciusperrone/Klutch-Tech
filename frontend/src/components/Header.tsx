import Image from 'next/image';
import { List } from 'phosphor-react';
import LogoSvg from '../assets/icons/logo.svg';

export function Header() {
  return (
    <header className="bg-blue-400 h-10 px-5 flex items-center justify-between">
      <List size={40} weight="light" className="text-white" />
      <Image src={LogoSvg} />
      <div></div>
    </header>
  );
}
