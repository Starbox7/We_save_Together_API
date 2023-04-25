import styled from 'styled-components';
import SideBar from './SideBar';
import AdminHeader from './AdminHeader';
import Dashboard from './Dashboard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
`;
const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Content() {
  return (
    <Container>
      <SideBar />
      <SideContainer>
        <AdminHeader />
        <Dashboard />
      </SideContainer>
    </Container>
  );
}
export default Content;
