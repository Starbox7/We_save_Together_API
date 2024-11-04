/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../common/components/Footer';
import AuthForm from '../../components/auth/AuthForm';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function Auth() {
  return (
    <Container>
      <AuthForm />
      <Footer />
    </Container>
  );
}
export default Auth;
