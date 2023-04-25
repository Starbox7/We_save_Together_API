/** import library */
import styled from 'styled-components';
/** */
import { useNavigate } from 'react-router-dom';
/** */
import authStore from '../../store/authStore';

/** styled-component */
const Container = styled.div``;
const Console = styled.p`
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 20px;
  cursor: pointer;
`;

function ToConsole() {
  const signState = authStore((state) => state.signState);
  const autoSign = authStore((state) => state.autoSign);

  const navigate = useNavigate();
  const navigateToConsole = () => {
    navigate('/console');
  };
  const navigateToSignIn = () => {
    navigate('/in');
  };

  return (
    <Container
      onClick={async () => {
        let newState = signState;
        if (!signState) {
          newState = await autoSign();
        }
        if (newState) {
          navigateToConsole();
        } else {
          navigateToSignIn();
        }
      }}
    >
      <Console>관리자 콘솔</Console>
    </Container>
  );
}

export default ToConsole;
//              /** Test!!! */ console.log(`${}`);
