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

const RequestTable = ({ requests }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>순번</Th>
          <Th>아이디</Th>
          <Th>지급유형</Th>
        </Tr>
      </thead>
      <tbody>
        {requests.map((request, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{request.id}</Td>
            <Td>{request.type}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RequestTable;
