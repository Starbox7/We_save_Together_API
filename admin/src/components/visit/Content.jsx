/** import library */
import styled from 'styled-components';
/** import component */
import Header from './Header';
import ImageSlider from './ImageSlider';
import Slogan from './Slogan';
import Count from './Count';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  background-color: ${AdminColor.White};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightContainer = styled.div`
  height: 70vh;
  width: 50%;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 50%;
`;

function Content() {
  return (
    <Container>
      <Header />
      <BottomContainer>
        <LeftContainer>
          <Slogan />
          <Count />
        </LeftContainer>
        <RightContainer>
          <ImageSlider />
        </RightContainer>
      </BottomContainer>
    </Container>
  );
}

export default Content;
