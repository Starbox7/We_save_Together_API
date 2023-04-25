// AdminHeader.js
import styled from 'styled-components';
import { FcEngineering, FcAbout, FcAnswers, FcBarChart, FcGlobe } from 'react-icons/fc';
import { IoCaretDownOutline } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import { Link as OriginalLink } from 'react-router-dom';
import { AdminColor } from '../../asset/Colors';
import { useState, useEffect } from 'react';
import Modal from './AdminModal';
import authStore from '../../store/authStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 84vw;
  height: 14vh;
  background-color: white;
  padding-left: 25px;
  box-sizing: border-box;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4vh;
  align-items: center;
`;
const MiddleContainer = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4vh;
  font-weight: bold;
  font-size: 25px;
  border-bottom: 1px solid lightgray;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 7px;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 4vh;
`;
const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TopText = styled.div`
  display: flex;
  color: #187fd6;
  font-size: 12px;
`;
const AdminName = styled.p`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;
const Refresh = styled.p`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  font-size: 13px;
  font-weight: bold;
  padding: 13px;
  margin-right: 10px;
`;
const Link = styled(OriginalLink)`
  text-decoration: none;
  color: ${AdminColor.Black};
`;

function AdminHeader() {
  const id = authStore((state) => state.signData.id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <TopContainer>
        <Link to="/">
          <TopText>Go To Title Screen</TopText>
        </Link>
        <TopRightContainer>
          <FcBarChart size={20} style={{ marginRight: '13px' }} />
          <FcAbout size={20} style={{ marginRight: '13px' }} />
          <FcAnswers size={20} style={{ marginRight: '13px' }} />
          <FcEngineering size={20} style={{ marginRight: '13px' }} />
          <FcGlobe size={16} style={{ marginRight: '2px', marginLeft: '13px' }} />
          <AdminName onClick={handleModalOpen}>{id}</AdminName>
          <IoCaretDownOutline size={16} style={{ marginRight: '13px' }} />
        </TopRightContainer>
      </TopContainer>
      <MiddleContainer>DashBoard</MiddleContainer>
      <BottomContainer>
        <Refresh>
          <SlRefresh size={13} style={{ marginRight: '5px' }} />
          새로고침
        </Refresh>
      </BottomContainer>
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </Container>
  );
}

export default AdminHeader;
