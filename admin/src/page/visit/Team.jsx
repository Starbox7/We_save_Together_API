/** import library */
import styled from 'styled-components';
/** import component */
import Footer from '../../components/visit/Footer';
import TeamInfo from '../../components/visit/TeamInfo';
/** import Color */
import { AdminColor } from '../../asset/Colors';

/** styled-component */
const Container = styled.div`
  padding: 10px;
  background-color: ${AdminColor.Orange};
`;

function Team() {
  return (
    <Container>
      <TeamInfo />
      <Footer />
    </Container>
  );
}

export default Team;
