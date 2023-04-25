/** import library */
import styled from 'styled-components';
/** import component */
import Content from '../../components/visit/Content';
import Footer from '../../components/visit/Footer';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function Home() {
  return (
    <Container>
      <Content />
      <Footer />
    </Container>
  );
}

export default Home;
//              /** Test!!! */ console.log(`${}`);
