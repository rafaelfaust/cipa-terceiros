import styled from "styled-components"

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1020px) {
        grid-template-columns: 1fr;
        
    }
`
export const DivImage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        img {
        width: 80%;
        border-radius: 20px;
    }

        
`

export const DivText = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;

        @media screen and (max-width: 1020px) {
            text-align: center;
            justify-content: initial;
        }

        h2 {
        font-weight: 900;
        line-height: 21px;
        margin: 20px 0;
        font-size: 21px;

    }

    p {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
    }

    ul{
        margin: 0 0 10px 0;
        font-weight: 700;
        line-height: 21px;
        font-size: 18px;
    }

    li{
        margin: 10px 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
    }
`