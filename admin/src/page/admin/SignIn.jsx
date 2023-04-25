/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../components/visit/Footer';
import SignInForm from '../../components/auth/SignInForm';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function SignIn() {
  return (
    <Container>
      <SignInForm />
      <Footer />
    </Container>
  );
}

export default SignIn;
