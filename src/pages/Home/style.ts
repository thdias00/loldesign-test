import styled from "styled-components";

export const Div = styled.div`
@media screen and (max-width: 799px){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        img{
            width: 100%;
        }
    }
}
@media screen and (min-width: 800px)
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.div`
@media screen and (max-width: 799px){
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 8px;
    p{
        font-weight: bold;
        text-align: center;
    }
}
@media screen and (min-width: 800px){
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 8px;
    p{
        font-weight: bold;
        text-align: center;
    }
}
`

export const FormDiv = styled.div`
@media screen and (max-width: 799px){
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
        }
        button{
            height: 40px;
            border: 1px solid transparent;
            border-radius: 8px;
            color: #ffffff;
            background-color: #000000;
            font-weight: bold;
        }
    }
}
@media screen and (min-width: 800px){
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
        }
        button{
            width: 20%;
            height: 40px;
            border: 1px solid transparent;
            border-radius: 8px;
            color: #ffffff;
            background-color: #000000;
            font-weight: bold;
        }
    }
}
`
export const InputDiv = styled.div`
@media screen and (max-width: 799px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        margin: 5px;
        font-weight: bold;
        color: #ff0000
    }
}
@media screen and (min-width: 800px){
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin: 5px;
        font-weight: bold;
        color: #ff0000
    }
}
`

export const ResultDiv = styled.div``