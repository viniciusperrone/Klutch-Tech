type ButtonProps = {
  title: string;
};

export function Button({ title }: ButtonProps) {
  return (
    <button className="px-10 py-4 bg-orange-400 rounded-[5px] text-[20px] font-flexoBold text-gray-200 leading-[24px] hover:opacity-80 transition">
      {title}
    </button>
  );
}
