import styled from 'styled-components';

const IconView = styled.div<{ size: string; color: string }>`
  display: block;
  width: ${(props) => props.size};
  line-height: 0;

  svg {
    width: 100%;
    fill: ${(props) => props.color};
  }
`;

export { IconView };
