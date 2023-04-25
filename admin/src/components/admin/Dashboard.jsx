import styled from 'styled-components';

import DailyBoard from './dashboard/DailyBoard';
import ServiceBoard from './dashboard/ServiceBoard';
import CampainBoard from './dashboard/CampainBoard';
import AlertBoard from './dashboard/AlertBoard';
import CustomerBoard from './dashboard/CustomerBoard';
import PointBoard from './dashboard/PointBoard';
import HostBoard from './dashboard/HostBoard';
import NotionBoard from './dashboard/NotionBoard';
import EventBoard from './dashboard/EventBoard';

const BoardContainer = styled.div`
  display: flex;
  height: 83vh;
  padding: 25px;
  padding-left: 30px;
  padding-top: 30px;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  display: flex;
  width: 83vw;
  height: 100%;
`;

function Dashboard() {
  return (
    <BoardContainer>
      <InnerContainer>
        <DailyBoard />
        <ServiceBoard />
        <CampainBoard />
      </InnerContainer>
      <InnerContainer>
        <HostBoard />
        <NotionBoard />
        <EventBoard />
      </InnerContainer>
      <InnerContainer>
        <PointBoard />
        <CustomerBoard />
        <AlertBoard />
      </InnerContainer>
    </BoardContainer>
  );
}
export default Dashboard;

/**
 * 일일 방문자 추이, 서비스 이용자 추이, 캠페일 활동 통계
 * 호스트 가입 및 탈퇴 신청, 공지사항, 이벤트
 * 포인트 지급, 고객센터, 신고관리,
 */
