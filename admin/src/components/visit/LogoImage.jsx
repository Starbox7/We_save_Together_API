/** import library */
import styled from 'styled-components';
/** import asset */
import Earth from '../../asset/resource/earth.png';

/** styled-component */
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 70px;
`;
const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

function LogoImage() {
  return (
    <Container>
      <Logo src={Earth} alt="image logo" />
    </Container>
  );
}

export default LogoImage;
