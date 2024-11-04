/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../common/components/Footer';
import SignInfoForm from '../../components/auth/SignInfoForm';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function SignInfo() {
  return (
    <Container>
      <SignInfoForm />
      <Footer />
    </Container>
  );
}

export default SignInfo;
