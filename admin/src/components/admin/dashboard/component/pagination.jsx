import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Page = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <Page key={page} onClick={() => onPageChange(page)} style={page === currentPage ? { fontWeight: 'bold' } : null}>
          {page}
        </Page>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
