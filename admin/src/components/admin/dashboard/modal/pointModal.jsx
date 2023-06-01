import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import authStore from '../../../../store/authStore';
import cookieService from '../../../../data/storage/cookie';

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
  width: 70%;
  max-width: 800px;
  min-height: 70%;
  padding: 40px;
  border-radius: 15px;
  z-index: 1001;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const SelectButton = styled.button`
  background-color: #3498db;
  color: white;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

function Modal({ closeModal }) {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [volunteerTime, setVolunteerTime] = useState(0);
  const [isPoint, setIsPoint] = useState(true);

  const id = authStore((state) => state.signData.id);

  const handleRewardSubmit = async () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('userId', userId);
    formData.append('email', email);
    formData.append('points', isPoint ? points : 0);
    formData.append('volunteerTime', isPoint ? 0 : volunteerTime);

    const token = cookieService.getTokens();

    try {
      // alert('start');
      alert(userId + email + points);
      const res = await axios.post(
        'http://localhost:5001/give/point',
        { id: userId, email: email, point: points }
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //     accessToken: token.accessToken,
        //     refreshToken: token.refreshToken,
        //   },
        // }
      );
      closeModal();
    } catch (error) {
      console.error(error);
      alert('지급에 실패하였습니다.');
    }
  };

  return (
    <ModalContainer>
      <ModalOverlay onClick={closeModal} />
      <ModalContent>
        <h2>포인트 / 봉사시간 지급</h2>
        <InputContainer>
          <Label>지급 유형</Label>
          <SelectButton onClick={() => setIsPoint(!isPoint)}>{isPoint ? '포인트' : '봉사시간'}</SelectButton>
        </InputContainer>
        <InputContainer>
          <Label>지급 대상 아이디</Label>
          <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>지급 대상 이메일</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>지급 봉사시간</Label>
          <Input type="number" value={volunteerTime} onChange={(e) => setVolunteerTime(e.target.value)} disabled={isPoint} />
        </InputContainer>
        <InputContainer>
          <Label>지급 포인트</Label>
          <Input type="number" value={points} onChange={(e) => setPoints(e.target.value)} disabled={!isPoint} />
        </InputContainer>
        <SelectButton onClick={handleRewardSubmit}>{isPoint ? '포인트 지급' : '봉사시간 지급'}</SelectButton>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
