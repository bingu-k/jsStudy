import styled from 'styled-components';

let Btn = styled.button`
    background : ${props => props.bg};
    width : 100px;
    color : white;
    padding : 10px;
    text-align: center;
    border: solid 2px grey;
    border-radius: 12px;
`

export default Btn;