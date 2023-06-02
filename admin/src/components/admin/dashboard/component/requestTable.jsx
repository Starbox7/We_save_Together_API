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

const RequestTable = ({ requests, onUserClick }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>순번</Th>
          <Th>아이디</Th>
          <Th>캠페인 이름</Th>
        </Tr>
      </thead>
      <tbody>
        {requests.map((request, index) =>
          request.id.map((user, userIndex) => (
            <Tr key={index + '-' + userIndex}>
              <Td>{index + 1}</Td>
              <Td>
                <UserLink onClick={() => onUserClick(user, request.campagin)}>{user}</UserLink>
              </Td>
              <Td>{request.campagin}</Td>
            </Tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default RequestTable;
