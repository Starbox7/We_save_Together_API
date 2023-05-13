import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import Modal from './modal/noticeModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 26vw;
  margin-right: 25px;
  margin-bottom: 25px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  padding-top: 0px;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
`;
const Title = styled.p`
  font-weight: bold;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const WriteNotion = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  height: 4vh;
  width: 5vw;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  background-color: #313644;
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function NotionBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Notion</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <ModalContainer>
        <WriteNotion onClick={openModal}>공지 작성</WriteNotion>
      </ModalContainer>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Container>
  );
}
export default NotionBoard;
