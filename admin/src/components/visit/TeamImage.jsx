/** import library */
import styled from 'styled-components';
/** import asset */
import TeeamLogo from '../../asset/resource/teamlogo.png';

/** styled-component */
const Container = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  margin-left: 70px;
`;
const Team = styled.img`
  width: 100%;
  height: 100%;
`;

function TeamImage() {
  return (
    <Container>
      <Team src={TeeamLogo} alt="image logo" />
    </Container>
  );
}

export default TeamImage;
