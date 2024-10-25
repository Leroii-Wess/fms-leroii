import { FC } from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const OutlineButton: FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center whitespace-nowrap justify-center gap-2 bg-white text-gray-500 text-xl px-5 py-4 rounded-lg hover:bg-gray-50 duration-200 transition-all border-2 border-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
