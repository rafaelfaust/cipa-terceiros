import styled from "styled-components"

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const DivImage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;

        img {
        width: 90%;
        border-radius: 20px;
    }
        
`

export const DivText = styled.div`
        display: flex;
        flex-direction: column;
        width: 90%;
        justify-content: center;

        h2 {
        font-weight: 900;
        line-height: 21px;
        margin-bottom: 20px;

    }

    strong {
        margin: 40px 0;
        font-weight: 900;
        line-height: 21px;
        font-size: 20px;

    }

    p {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
    }

    ul{
        margin: 0 0 20px 0;
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