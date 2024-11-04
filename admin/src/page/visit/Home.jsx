import styled from 'styled-components';

import { AdminColor } from '../../asset/Colors';

import Content from '../../components/visit/content/Content';
import Footer from '../../common/components/Footer';

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
