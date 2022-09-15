import { HiX } from 'react-icons/hi';

interface Props {
  handleClick: () => void;
}

export const CloseIconButton = ({ handleClick }: Props): JSX.Element => (
  <HiX
    className="w-5 h-5 text-red-500 cursor-pointer"
    onClick={handleClick}
  />
);