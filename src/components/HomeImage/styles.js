import styled from 'styled-components'

const HomeImgStyles = styled.svg`
  display: none;


  @media (min-width: 900px) {
    display: block;
    width:400px;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }

  @media (min-width: 1200px) {
    width:500px;
    right: 4vw;
  }
 
`;

export default HomeImgStyles;