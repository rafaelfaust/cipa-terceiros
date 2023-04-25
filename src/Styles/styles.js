import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    text-align: center;
    justify-content: space-between;

`
export const Nav = styled.nav`
    background-color: red;
    display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;
    
    img {
        max-height: 80%;
    }
`
export const ContainerItems = styled.div`

    padding: 0 50px;

    .rec .rec-carousel-item {
        display: flex;
        align-items: center;
    }

    .rec-arrow:hover {
        background-color: red;
    }

    .rec-dot_active {
        background-color: red;
        box-shadow: rgb(255, 0, 0) 0px 0px 1px 3px;

    }
`
export const Footer = styled.footer`    
    background-color: red;
    padding: 5px;
    font-size: 12px;
`