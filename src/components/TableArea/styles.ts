import styled from "styled-components";

export const Table = styled.table`
    width: 95%;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}%` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;