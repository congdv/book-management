import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useOnEscapeKeyDown from '../../utils/hooks/onEscapeKeyDown';
import useOnOutsideClick from '../../utils/hooks/onOutsideClick';
import './style.css';

const $root = document.getElementById('root');

const Modal = ({ isOpen: propsIsOpen, onClose: tellParentToClose, renderContent }) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === 'boolean';
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const $modalRef = useRef();
  const $clickableOverLayRef = useRef();

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      tellParentToClose();
    }
  }, [isControlled, tellParentToClose]);

  useOnOutsideClick($modalRef, isOpen, closeModal, $clickableOverLayRef);
  useOnEscapeKeyDown(isOpen, closeModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="scrollOverlay">
            <div className="clickableOverlay">
              <div className="modal" ref={$modalRef}>
                {renderContent({ close: closeModal })}
              </div>
            </div>
          </div>,
          $root,
        )}
    </Fragment>
  );
};

export default Modal;