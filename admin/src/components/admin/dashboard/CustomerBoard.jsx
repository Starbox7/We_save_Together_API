import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import RequestTable from './component/requestTable';
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

function CustomerBoard() {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 5;

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get('http://localhost:5001/register');
      setRequests(res.data);
    };

    fetchRequests();
  }, []);

  const currentRequests = requests.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage);
  const totalPages = Math.ceil(requests.length / requestsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserClick = async (userId, campaignName) => {
    alert(`${userId}`);
    alert(`${campaignName}`);
    try {
      await axios.put('http://localhost:5001/register/allow', { campagin: campaignName, id: userId });
      alert('처리 완료');
    } catch (error) {
      console.error(error);
      alert('처리 실패');
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Customer Request</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <RequestTable requests={currentRequests} onUserClick={handleUserClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
}

export default CustomerBoard;
