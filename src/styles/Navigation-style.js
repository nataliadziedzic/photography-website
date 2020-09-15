import styled from "styled-components";

export const MenuBtn = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 35px;
    font-size: 15px;
    letter-spacing: 3px;
    overflow: hidden;
    &:hover{
        div{
        transform: translateX(0);
        }
    }

`
export const Stripe = styled.div`
    width: 100%;
    border-bottom: 2px solid white;
    margin-top: 5px;
    transform: translateX(100%);
    transition: .4s;
  
`