/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../components/visit/Footer';
import SignUpForm from '../../components/auth/SignUpForm';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function SignUp() {
  return (
    <Container>
      <SignUpForm />
      <Footer />
    </Container>
  );
}

export default SignUp;
