import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
`;

const UserLink = styled.a`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

const EventTable = ({ events, onUserClick }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>순번</Th>
          <Th>유저 아이디</Th>
          <Th>캠페인 이름</Th>
        </Tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>
              <UserLink onClick={() => onUserClick(event)}>{event.userId}</UserLink>
            </Td>
            <Td>{event.campaignName}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EventTable;
