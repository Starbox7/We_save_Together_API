/** import library */
import styled from 'styled-components';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-end;
  padding: 70px;
`;
const SloganText = styled.h1`
  margin-top: 10px;
  font-size: 60px;
`;

function Slogan() {
  return (
    <Container>
      <SloganText>If we save the Earth</SloganText>
      <SloganText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Earth save us, too.</SloganText>
    </Container>
  );
}

export default Slogan;
