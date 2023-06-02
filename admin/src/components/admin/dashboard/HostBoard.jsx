import React, { useState } from 'react';
import styled from 'styled-components';

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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  ${(props) => (props.approved ? 'background-color: #3f51b5; color: white;' : 'background-color: #f44336; color: white;')}
`;

function HostApprovalBoard() {
  const [hosts, setHosts] = useState([
    { id: 1, username: 'user1', organization: 'Organization A', approved: false },
    { id: 2, username: 'user2', organization: 'Organization B', approved: true },
    { id: 3, username: 'user3', organization: 'Organization C', approved: false },
    { id: 4, username: 'user4', organization: 'Organization D', approved: false },
    // ... add more hosts here ...
  ]);

  const handleApproval = (hostId) => {
    setHosts((prevHosts) =>
      prevHosts.map((host) => {
        if (host.id === hostId) {
          return { ...host, approved: !host.approved };
        }
        return host;
      })
    );
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Host Approval</Title>
      </TitleContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>No.</TableHeader>
            <TableHeader>Username</TableHeader>
            <TableHeader>Organization</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {hosts.map((host, index) => (
            <TableRow key={host.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{host.username}</TableCell>
              <TableCell>{host.organization}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleApproval(host.id)} approved={host.approved}>
                  {host.approved ? 'Approved' : 'Not Approved'}
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default HostApprovalBoard;
