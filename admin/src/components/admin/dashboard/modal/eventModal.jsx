import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const EventModal = ({ event, imageUrl, onClose }) => {
  const handleConfirm = async () => {
    const { userId, campaignName } = event;
    try {
      await axios.put('http://localhost:5001/event/update', {
        id: userId,
        campagin: campaignName,
      });
      onClose(); // 요청 성공 시 모달 닫기
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        {imageUrl && <ModalImage src={imageUrl} alt="Event" />} {/* 이미지 렌더링 */}
        <p>User ID: {event.userId}</p>
        <p>Campaign Name: {event.campaignName}</p>
        <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton> {/* 확인 버튼 */}
      </ModalContent>
    </ModalWrapper>
  );
};

export default EventModal;
