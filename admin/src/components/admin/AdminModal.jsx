// src/components/Modal.js
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import authStore from '../../store/authStore';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  z-index: 1001;
  box-sizing: border-box;
`;

function AdminModal({ onClose }) {
  const [state, setState] = useState(false);
  const id = authStore((state) => state.signData.id);
  const deleteAdmin = authStore((state) => state.deleteAdmin);

  return (
    <ModalContainer>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <h2>We save Together</h2>
        <h1>{id}</h1>
        <p style={{ fontWeight: 'bold' }}>from Team Code for Daegu Catholic University</p>
        {state ? (
          <>
            <p style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', marginTop: '70px', color: 'red' }}>경고! : 정말로 회원탈퇴를 하시겠습니까?</p>
            <p
              onClick={async () => {
                await deleteAdmin();
              }}
              style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', color: 'red', cursor: 'pointer' }}
            >
              확인시 이 문장을 클릭하세요.
            </p>
          </>
        ) : (
          <p
            onClick={() => {
              setState(true);
            }}
            style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold', marginTop: '70px', color: 'red', cursor: 'pointer' }}
          >
            회원탈퇴
          </p>
        )}
      </ModalContent>
    </ModalContainer>
  );
}

export default AdminModal;
