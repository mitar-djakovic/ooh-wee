import styled from 'styled-components';

const HeaderView = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 3px 4px rgba(153, 155, 168, 0.25);
  box-sizing: border-box;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
`;

export { HeaderView, Logo };
