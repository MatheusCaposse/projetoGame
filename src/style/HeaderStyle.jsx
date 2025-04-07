import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: black;
    padding: 20px;
    font-size: 20px;
    display: flex;
    justify-content: space-around; 

`;

export const Nav = styled.nav`
    ul{
        list-style:none;
        padding:0px;
        margin:0px;
        display:flex;
    }
    li{
        margin:0px 15px;
    }
    a{
        text-decoration:none;
        color:blue;
    }

`