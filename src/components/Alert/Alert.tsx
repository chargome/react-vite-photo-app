import { useNotificationStore } from '../../store/Notification';
import { CloseIconButton } from '../CloseIconButton';

export const Alert = (): JSX.Element => {
  const [
    isOpen,
    msg,
    close,
  ] = useNotificationStore((state) => [state.isOpen, state.msg, state.close]);

  return (
    <div
      className={`${isOpen ? 'translate-x-0' : 'translate-x-80'} transition-transform w-60 p-4 bg-green-500 rounded fixed top-4 right-4 flex`}
    >
      <div className="text-md">
        {msg}
      </div>
      <CloseIconButton handleClick={close} />
    </div>
  );
};