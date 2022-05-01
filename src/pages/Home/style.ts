import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 8px;
    p{
        font-weight: bold;
    }
`

export const FormDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        width: 100%;
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 10px;
            label{
                margin: 5px;
                font-weight: bold;
            }
            span{
                margin: 5px;
                font-weight: bold;
                color: #ff0000
            }
        }
    }
`

export const ResultDiv = styled.div``