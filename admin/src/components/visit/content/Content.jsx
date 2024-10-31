import C from "../_component.index";
import S from "./style";

function Content() {
  return (
    <S.Container>
      <C.Header />
      <S.BottomContainer>
        <S.LeftContainer>
          <C.Slogan />
          <C.Count />
        </S.LeftContainer>
        <S.RightContainer>
          <C.ImageSlider />
        </S.RightContainer>
      </S.BottomContainer>
    </S.Container>
  );
}

export default Content;
