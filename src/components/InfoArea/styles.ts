import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: -25px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        width: 85%;
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;