import { RiErrorWarningFill } from 'react-icons/ri';

type ErrorProps = {
  message: string;
};

export function Error({ message }: ErrorProps) {
  return (
    <div className="fixed bottom-[4vh] self-center h-[60px] bg-white rounded-[5px] shadow-2xl flex flex-row items-center gap-5 animate-[appearFromBottom_0.8s]">
      <div className="w-[5px] h-full bg-red-200 rounded-l-[5px]" />
      <RiErrorWarningFill color={'#FF7070'} size={28} />
      <h2 className="text-[16px] font-flexoBold">{message}</h2>
      <div />
    </div>
  );
}
