import styled from "styled-components"

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 90%;

    }
    img {
        width: 90%;
        border-radius: 20px;
    }

`