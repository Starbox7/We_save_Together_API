/** import library */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
/** import Icon */
import { BsDoorOpenFill, BsFillPersonCheckFill, BsFillSearchHeartFill } from 'react-icons/bs';

/** styled-component */
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;
const CountType = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 20px;
  margin-right: 30px;
`;
const CountText = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  text-decoration: line-through;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

function Count() {
  const [todayVisitNum, setTodayVisitNum] = useState(null);
  const [totalVisitNum, setTotalVisitNum] = useState(null);
  const [totalVisitorNum, setTotalVisitorNum] = useState(null);

  useEffect(() => {
    const randomTodayVisit = Math.floor(Math.random() * 1000) + 1;
    setTodayVisitNum(randomTodayVisit);

    const randomTotalVisit = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
    if (randomTotalVisit <= randomTodayVisit) {
      setTotalVisitNum(randomTodayVisit + 1);
    } else {
      setTotalVisitNum(randomTotalVisit);
    }

    const randomTotalVisitor = Math.floor(Math.random() * (10000 - 5 + 1)) + 5;
    if (randomTotalVisitor >= randomTotalVisit) {
      setTotalVisitorNum(randomTotalVisit - 1);
    } else {
      setTotalVisitorNum(randomTotalVisitor);
    }
  }, []);

  return (
    <Container>
      <CountType>
        Visits today
        <IconContainer>
          <BsFillSearchHeartFill size="27" color="red" />
        </IconContainer>
        <CountText>{todayVisitNum}</CountText>
      </CountType>
      <CountType>
        Total visits
        <IconContainer>
          <BsDoorOpenFill size="27" color="brown" />
        </IconContainer>
        <CountText>{totalVisitNum}</CountText>
      </CountType>
      <CountType>
        Total visitors
        <IconContainer>
          <BsFillPersonCheckFill size="27" color="green" />
        </IconContainer>
        <CountText>{totalVisitorNum}</CountText>
      </CountType>
    </Container>
  );
}

export default Count;
