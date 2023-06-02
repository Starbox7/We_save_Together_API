import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 30vw;
  max-width: 500px;
`;

const CloseButton = styled.button`
  /* Add your styles */
`;

const ConfirmButton = styled.button`
  /* Add your styles */
`;

const UserModal = ({ user, campaign, onClose, onRequestProcessing }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>{user}에 대한 요청 처리</h2>
        <p>캠페인 이름: {campaign}</p>
        <CloseButton onClick={onClose}>취소</CloseButton>
        <ConfirmButton onClick={onRequestProcessing}>확인</ConfirmButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;
