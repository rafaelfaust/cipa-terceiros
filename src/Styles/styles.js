import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;

`
export const Nav = styled.nav`
    background-color: red;
    display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;
    color: #ffffff;
    
    img {
        max-height: 80%;
    }
`
export const ContainerItems = styled.div`

    padding: 0 20px;

    .rec .rec-carousel-item {
        display: flex;
    }

    .rec.rec-arrow {
        background-color: #F0EBF8;
        color: #000;
    }
 
    .rec.rec-arrow:hover {
        background-color: rgb(255, 0, 0);
        color: #fff;
    }

    .rec .rec-dot:hover {
        box-shadow: rgb(255, 0, 0) 0px 0px 1px 2px;
    }

    .rec.rec-arrow:disabled {
    visibility: hidden;
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
    color: white;
    text-align: center;

    a {
        text-decoration: none;
        color: white;
   
    }

    a:hover {
        opacity: 0.8;
    }
`