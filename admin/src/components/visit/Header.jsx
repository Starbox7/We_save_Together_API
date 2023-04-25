/** import library */
import styled from 'styled-components';
import { Link as OriginalLink } from 'react-router-dom';
/** import component */
import LogoImage from './LogoImage';
import LogoText from './LogoText';
import HeaderMenu from './HeaderMenu';
import ToConsole from './ToConsole';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  height: 20vh;
  width: 100%;
  padding: 30px;
  background-color: ${AdminColor.White};
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Link = styled(OriginalLink)`
  text-decoration: none;
  color: ${AdminColor.Black};
`;

function Header() {
  return (
    <Container>
      <LeftContainer>
        <LogoImage />
        <Link to="/">
          <LogoText />
        </Link>
      </LeftContainer>
      <RightContainer>
        <Link to="/team">
          <HeaderMenu menu="구성원" />
        </Link>
        <Link to="/project">
          <HeaderMenu menu="프로젝트" />
        </Link>
        <ToConsole />
      </RightContainer>
    </Container>
  );
}

export default Header;
