import styled from 'styled-components';

const HeaderView = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0.3rem 0.4rem rgba(153, 155, 168, 0.25);
  box-sizing: border-box;
  padding: 2rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 4rem;
  height: 4rem;
`;

export { HeaderView, Logo };
