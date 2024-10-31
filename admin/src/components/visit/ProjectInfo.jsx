/** import library */
import styled from 'styled-components';
import Header from './Header';
/** import Color */
import { AdminColor } from '../../asset/Colors';

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
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;
const BottomContainer = styled.div`
  display: flex;
  margin: 30px;
`;
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 30px;
`;
const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const ServiceDescription = styled.p`
  font-size: 18px;
  text-align: center;
`;
const Title = styled.h1`
  
`

function ProjectInfo() {
  return (
    <Container>
      <Header />
      <IntroContainer>
        <TopContainer>
          <Title>우리 함께 해요 We save Together : 환경보호를 위한 캠페인 플랫폼</Title>
          <ServiceCard>
            <ServiceTitle>캠페인 참가자 App</ServiceTitle>
            <ServiceDescription>캠페인 참가자 앱은 참가자들이 캠페인에 참여하고, 행사 정보를 확인할 수 있는 모바일 앱입니다.</ServiceDescription>
          </ServiceCard>
        </TopContainer>
        <BottomContainer>
          <ServiceCard>
            <ServiceTitle>캠페인 주최자 Web</ServiceTitle>
            <ServiceDescription>캠페인 주최자 웹은 주최자들이 캠페인을 관리하고 참가자들과 소통할 수 있는 서비스 웹입니다.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>캠페인 관리자 Web</ServiceTitle>
            <ServiceDescription>캠페인 관리자 웹은 전체 캠페인을 관리하고 데이터를 분석할 수 있는 관리자용 매니저 웹입니다.</ServiceDescription>
          </ServiceCard>
        </BottomContainer>
      </IntroContainer>
    </Container>
  );
}

export default ProjectInfo;
