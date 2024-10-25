import { FC } from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 bg-primaryBlue text-white text-xl px-5 py-4 rounded-lg hover:bg-blue-600 duration-200 transition-all "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
