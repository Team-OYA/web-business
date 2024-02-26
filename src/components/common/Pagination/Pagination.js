import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
    const [numPages, setNumPages] = useState(1);

    useEffect(() => {
        setNumPages(Math.ceil(total / limit));
    }, [total, limit]);

    const PAGES_AROUND_CURRENT = 9;

    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.min(1, Math.max(1, page - PAGES_AROUND_CURRENT));
        const endPage = Math.min(numPages, page + PAGES_AROUND_CURRENT);
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const handleNextPage = async () => {
        if (page < numPages) {
            await setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = async () => {
        if (page > 1) {
            await setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <Nav>
            <Button onClick={handlePrevPage} disabled={page === 1}>
                &lt; 이전
            </Button>
            {getPageNumbers().map((pageNumber) => (
                <Button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    aria-current={page === pageNumber ? "page" : undefined}
                >
                    {pageNumber}
                </Button>
            ))}
            <Button onClick={handleNextPage} disabled={page === numPages}>
                다음 &gt;
            </Button>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    margin: 0;
    background: white;
    color: black;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background: rgba(190, 189, 189, 0.54);
        transform: translateY(-2px);
    }

    &:disabled {
        color: rgba(190, 189, 189, 0.54);
        cursor: not-allowed;
        transform: none;
    }

    &[aria-current] {
        background: white;
        background: rgba(190, 189, 189, 0.54);
        font-weight: bold;
        cursor: not-allowed;
        transform: none;
    }
`;

export default Pagination;
