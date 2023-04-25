// src/components/Modal.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BorderColor } from '../../asset/Colors';
import authStore from '../../store/authStore';
import { DetailBackgroundColor } from '../../asset/Colors';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 2px solid ${BorderColor.bdcGreen1}; */
  border-radius: 35px;
  padding: 3px;
  margin: 7px;
  width: 370px;
  height: 50px;
`;
const Input = styled.input`
  display: flex;
  height: 50px;
  width: 240px;
  border: none;
  outline: 0px;
  padding-left: 10px;
`;
const Text = styled.p`
  display: flex;
  padding-right: 15px;
  padding-left: 25px;
  padding-top: 2px;
  border-right: 1px solid ${BorderColor.bdcGreen1};
  justify-content: center;
  width: 50px;
`;
const Button = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-radius: 17px;
  /* border: 1px solid ${BorderColor.bdcGreen1}; */
  padding: 11px;
  /* background-color: ${DetailBackgroundColor.dbcGreen2}; */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 15px;
  margin: 7px;
  width: 50px;
`;

function IdModal({ onClose }) {
  const setSignData = authStore((state) => state.setSignData);
  const findId = authStore((state) => state.findId);

  const onChange = (e) => {
    setSignData(e.target.id, e.target.value);
  };
  return (
    <ModalContainer>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <h2>아이디 찾기</h2>
        <InputContainer>
          <Text>Hakbun</Text>
          <Input id="hakbun" placeholder="학번을 입력하세요" onChange={(e) => onChange(e)} />
        </InputContainer>
        <InputContainer>
          <Text>Email</Text>
          <Input id="email" placeholder="이메일을 입력하세요" onChange={(e) => onChange(e)} />
        </InputContainer>
        <Button
          style={{ cursor: 'pointer' }}
          onClick={async () => {
            await findId();
          }}
        >
          Next
        </Button>
      </ModalContent>
    </ModalContainer>
  );
}

export default IdModal;
