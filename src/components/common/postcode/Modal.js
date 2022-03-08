import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import Portal from './Portal';

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`;

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 420px;
    /* max-width: 480px; */
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
    .close-btn {
        float: right;
        width: 25px;
        height: 25px;
        img {
            width: 25px;
            height: 25px;
        }
    }
`;

const Modal = ({
    className,
    onClose,
    maskClosable,
    closable,
    visible,
    children,
}) => {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e);
        }
    };

    const close = (e) => {
        if (onClose) {
            onClose(e);
        }
    };
    const handlePayModalOff = (e) => {
        const clicked = e.target.closest('.sc-hGPBjI')
        if (clicked) return;
        else{
            
        }
    }

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: ""; top: "";`;
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    return (
        <Portal elementId="modal-root">
            <ModalOverlay visible={visible} />
            <ModalWrapper
                onClick={maskClosable ? onMaskClick : null}
                className={className}
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    <div className="close-btn">
                        {closable && (
                            <GrClose className="modal-close" onClick={close} />
                        )}
                    </div>
                    {children}
                </ModalInner>
            </ModalWrapper>
        </Portal>
    );
};

export default Modal;
