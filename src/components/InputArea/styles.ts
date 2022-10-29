import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    background-color: #FFF;
    padding: 15px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 1000px) {
        width: 85%;
    }
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
    background-color: #FFF;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid slateblue;
    border-radius: 5px;
    &:focus-visible {
        outline: 1px solid slateblue;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid slateblue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid slateblue;
    border-radius: 5px;
    background-color: slateblue;
    color: black;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;