/** import library */
import styled from 'styled-components';
/** import component */
import ProjectInfo from '../../components/visit/ProjectInfo';
import Footer from '../../components/visit/Footer';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function Project() {
  return (
    <Container>
      <ProjectInfo />
      <Footer />
    </Container>
  );
}

export default Project;
