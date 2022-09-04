import styled from 'styled-components';

const PromoSearchFormView = styled.div``;

const SearchContainer = styled.div`
  position: relative;
  width: 6.28rem;
  display: flex;

  & > div {
    margin: 0;

    & > input {
      margin: 0;
      padding: 3rem 1.7rem 3rem 3.4rem;
      border-radius: 8.8rem;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  & > button {
    position: absolute;
    top: 1.2rem;
    right: 1.7rem;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
    padding: 0;
    border: none;

    & > div {
      margin: 0;
    }
  }
`;

export { PromoSearchFormView, SearchContainer };
