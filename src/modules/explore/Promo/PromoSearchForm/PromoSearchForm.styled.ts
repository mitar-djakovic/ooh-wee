import styled from 'styled-components';

const PromoSearchFormView = styled.div``;

const SearchContainer = styled.div`
  position: relative;
  width: 628px;
  display: flex;

  & > div {
    margin: 0;

    & > input {
      margin: 0;
      padding: 30px 17px 30px 34px;
      border-radius: 86px;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  & > button {
    position: absolute;
    top: 12px;
    right: 17px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    padding: 0;
    border: none;

    & > div {
      margin: 0;
    }
  }
`;

export { PromoSearchFormView, SearchContainer };
