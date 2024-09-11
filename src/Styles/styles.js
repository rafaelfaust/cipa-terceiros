import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;

`
export const Nav = styled.nav`
    background-color: #43097D;
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
        color: #43097D;
    }
 
    .rec.rec-arrow:hover {
        background-color: #43097D;
        color: #fff;
    }

    .rec .rec-dot:hover {
        box-shadow: #43097D 0px 0px 1px 2px;
    }

    .rec.rec-arrow:disabled {
    visibility: hidden;
}

    .rec-dot_active {
        background-color: #43097D;
        box-shadow: #43097D 0px 0px 1px 3px;

    }
`
export const Footer = styled.footer`    
    background-color: #43097D;
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