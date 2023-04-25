import styled from 'styled-components';

import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';

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

function EventBoard() {
  return (
    <Container>
      <TitleContainer>
        <Title>Event</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <p>이벤트 관리</p>
    </Container>
  );
}
export default EventBoard;
