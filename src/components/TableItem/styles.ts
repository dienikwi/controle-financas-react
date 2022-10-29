import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 5px;
    border-radius: 5px;
    color: #FFF;
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${props => props.color};
    @media (max-width: 1000px) {
        display: block;
    }
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;