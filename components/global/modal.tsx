import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

type modalProps = {
  isModalOpen: boolean;
  children: React.ReactNode;
};

function Modal({ children, isModalOpen }: modalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isModalOpen ? children : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLDivElement
    );
  } else {
    return null;
  }
}

export default Modal;
