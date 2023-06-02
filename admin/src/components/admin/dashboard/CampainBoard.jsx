import React from 'react';
import styled from 'styled-components';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import PieChartComponent from './component/pieChart';

const Container = styled.div`
  display: flex;
  width: 24.5vw;
  margin-right: 25px;
  margin-bottom: 25px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  padding-top: 0px;
  flex-direction: column;
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

function CampainBoard() {
  return (
    <Container>
      <TitleContainer>
        <Title>Campain Statistics</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <PieChartComponent />
    </Container>
  );
}

export default CampainBoard;
