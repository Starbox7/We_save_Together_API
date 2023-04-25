import styled from 'styled-components';
import blueEarth from '../../asset/resource/blue_earth.png';
import { SiGooglesearchconsole, SiInteractiondesignfoundation } from 'react-icons/si';
import { FaRegIdBadge } from 'react-icons/fa';
import { AiOutlineAlert } from 'react-icons/ai';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { VscSignOut } from 'react-icons/vsc';

import authStore from '../../store/authStore';

const Container = styled.div`
  display: flex;
  background-color: #222630;
  width: 15vw;
  height: 99vh;
  align-items: center;
  flex-direction: column;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13vw;
  height: 10vh;
  margin: 15px;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7px;
`;
const LogoText = styled.p`
  display: flex;
  margin: 0px;
  color: white;
  margin-left: 10px;
  font-weight: bold;
  font-size: 25px;
`;
const LogoImage = styled.img`
  display: flex;
  width: 70px;
  height: 70px;
  margin-right: 30px;
`;
const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3000vh;
  flex-direction: column;
`;
const SelectMenu = styled.p`
  display: flex;
  padding-bottom: 10px;
  padding-left: 27px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #4d505a;
  justify-content: space-between;
  color: white;
  font-weight: bold;
`;
const Menu = styled.p`
  display: flex;
  padding-bottom: 10px;
  padding-left: 27px;
  margin-top: 0px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #4d505a;
  justify-content: space-between;
  color: #7a8fa1;
  font-weight: bold;
`;
const SignOut = styled.p`
  display: flex;
  padding-top: 10px;
  padding-right: 27px;
  margin-top: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-top: 1px solid #4d505a;
  justify-content: flex-end;
  align-items: center;
  color: #7a8fa1;
  font-weight: bold;
  cursor: pointer;
`;

function SideBar() {
  const goSignOut = authStore((state) => state.signOut);

  return (
    <Container>
      <LogoContainer>
        <LogoTextContainer>
          <LogoText>We Save</LogoText>
          <LogoText>&nbsp;&nbsp;Together</LogoText>
        </LogoTextContainer>
        <LogoImage src={blueEarth} alt="image logo" />
      </LogoContainer>
      <MenuContainer>
        <SelectMenu>
          Dashboard
          <SiGooglesearchconsole size={20} style={{ marginRight: '15px' }} />
        </SelectMenu>
        <Menu>
          Host Approval
          <FaRegIdBadge size={20} style={{ marginRight: '15px' }} />
        </Menu>
        <Menu>
          Event
          <SiInteractiondesignfoundation size={20} style={{ marginRight: '15px' }} />
        </Menu>
        <Menu>
          Request
          <AiOutlineAlert size={20} style={{ marginRight: '15px' }} />
        </Menu>
        <Menu>
          Management
          <MdOutlineManageAccounts size={20} style={{ marginRight: '15px' }} />
        </Menu>
      </MenuContainer>
      <SignOut
        onClick={() => {
          goSignOut();
        }}
      >
        <VscSignOut size={20} style={{ marginRight: '3px' }} />
        Sign Out
      </SignOut>
    </Container>
  );
}
export default SideBar;
