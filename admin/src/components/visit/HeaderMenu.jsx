/** import library */
import styled from 'styled-components';

/**  styled-component */
const Container = styled.div``;
const Menu = styled.p`
  font-weight: bold;
  margin: 20px;
  font-size: 20px;
`;

function HeaderMenu(props) {
  return (
    <Container>
      <Menu>{props.menu}</Menu>
    </Container>
  );
}

export default HeaderMenu;
