/** import library */
import styled from 'styled-components';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  height: 5vh;
  background-color: ${AdminColor.Gray};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;
const CopyRight = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${AdminColor.White};
  font-size: 20px;
`;

function Footer() {
  return (
    <Container>
      <CopyRight>Copyright (c) 2023 CodeforDCU Team. All Rights Reserved.</CopyRight>
    </Container>
  );
}

export default Footer;
