import styled from "styled-components";

export const Icons = styled.div`
    position: ${props => props.home ? "" : "fixed"};
    bottom: ${props => props.home ? "" : "0"};
    right: ${props => props.home ? "" : "0"};
    margin-right: ${props => props.home ? "" : "15px"};
    font-size: 20px;
    margin-bottom: 15px;
    @media only screen and (min-width: 768px){
        font-size: ${props => props.home ? "24px" : "20px"};
    }
    @media only screen and (min-width: 1024px) and (orientation: landscape){
        position: fixed;
        bottom: 3%;
        right: 0;
        font-size: ${props => props.home ? "30px" : "24px"};
        margin-bottom: 0;
    }
    i{  
        margin-right: 20px;
        cursor: pointer;
        @media only screen and (min-width: 1024px) and (orientation: landscape){
            margin-right: 35px;
        }
    }
`
export default Icons