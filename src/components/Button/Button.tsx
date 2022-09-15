interface Props {
  small?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
  children?: React.ReactNode;
}


export const Button = ({ disabled, handleClick, children }: Props): JSX.Element => (
  <button
    className="my-5 p-5 rounded bg-anyline hover:bg-anylineDark disabled:bg-gray-400 disabled:opacity-80 font-bold uppercase cursor-pointer disabled:cursor-auto"
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
);