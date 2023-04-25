/** import library */
import styled from 'styled-components';
/** import component */
import Header from './Header';
/** import Color */
import { AdminColor } from '../../asset/Colors';
/** import asset */
import TeamImage from './TeamImage';

/** styled-component */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  background-color: ${AdminColor.White};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopContainer = styled.div`
  display: flex;
  margin: 30px;
`;
const BottomContainer = styled.div`
  display: flex;
  margin: 30px;
`;
const TeamIntro = styled.p`
  font-size: 21px;
  margin: 3px;
`;
const MemberCard = styled.div`
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const MemberName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const MemberRole = styled.p`
  font-size: 18px;
`;

function TeamInfo() {
  return (
    <Container>
      <Header />
      <TeamContainer>
        <TeamImage />
        <TeamIntro>"코드forDCU"는 대구 가톨릭 대학교의 모바일 소프트웨어 전공 소속 학생들로 구성된 팀입니다.</TeamIntro>
        <TeamIntro>이 팀은 캡스톤 프로젝트를 위해 만들어졌으며, 환경보호 캠페인 플랫폼을 만들어 환경보호에 기여하는 것이 목표입니다.</TeamIntro>
        <TopContainer>
          <MemberCard>
            <MemberName>김창훈</MemberName>
            <MemberRole>Project Manager</MemberRole>
          </MemberCard>
          <MemberCard>
            <MemberName>박현아</MemberName>
            <MemberRole>Frontend Designer</MemberRole>
          </MemberCard>
          <MemberCard>
            <MemberName>박보근</MemberName>
            <MemberRole>Frontend Engineer</MemberRole>
          </MemberCard>
        </TopContainer>
        <BottomContainer>
          <MemberCard>
            <MemberName>채지훈</MemberName>
            <MemberRole>Backend Engineer</MemberRole>
          </MemberCard>
          <MemberCard>
            <MemberName>김범준</MemberName>
            <MemberRole>Backend Engineer</MemberRole>
          </MemberCard>
        </BottomContainer>
      </TeamContainer>
    </Container>
  );
}

export default TeamInfo;
