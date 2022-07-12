import { ButtonHTMLAttributes, HTMLProps } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      className="px-10 py-2 bg-orange-400 rounded-[5px] text-[18px] font-flexoBold text-gray-200 leading-[24px] hover:opacity-80 transition"
      {...rest}
    >
      {title}
    </button>
  );
}
