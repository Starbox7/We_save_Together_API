import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import Modal from './modal/pointModal';
import RequestTable from './component/pointTable';
import Pagination from './component/pagination';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GrantButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 4vh;
  width: 5vw;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  background-color: #313644;
`;

function PointBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const requests = [
    { id: 'user1', type: '포인트' },
    { id: 'user2', type: '봉사시간' },
    { id: 'user3', type: '포인트' },
    { id: 'user4', type: '봉사시간' },
    { id: 'user5', type: '포인트' },
    // ... add more users here ...
  ];

  const requestsPerPage = 10;
  const totalPages = Math.ceil(requests.length / requestsPerPage);

  const currentRequests = requests.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Point & Service Hour Status</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <RequestTable requests={currentRequests} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <ButtonContainer>
        <GrantButton onClick={openModal}>지급</GrantButton>
      </ButtonContainer>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Container>
  );
}

export default PointBoard;
