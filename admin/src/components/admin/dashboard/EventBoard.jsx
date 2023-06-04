import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineShareAlt } from 'react-icons/ai';
import EventTable from './component/eventTable';
import EventModal from './modal/eventModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 26vw;
  margin-right: 25px;
  margin-bottom: 25px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  padding-top: 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
`;

const Title = styled.p`
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

function EventBoard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/event/data');
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const handleUserClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Event</Title>
        <IconContainer>
          <AiOutlineQuestionCircle size={15} style={{ marginRight: '10px' }} />
          <AiOutlineSetting size={15} style={{ marginRight: '10px' }} />
          <AiOutlineShareAlt size={15} style={{ marginRight: '10px' }} />
        </IconContainer>
      </TitleContainer>
      <EventTable events={events} onUserClick={handleUserClick} />
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          imageUrl={selectedEvent.imageUrl} // 전달할 이미지 주소 추가
          onClose={closeModal}
        />
      )}
    </Container>
  );
}

export default EventBoard;
