import styled from '@emotion/styled';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints.values.m}) {
    min-width: ${p => p.theme.breakpoints.values.m};
  }

  @media (min-width: ${p => p.theme.breakpoints.d}) {
    width: ${p => p.theme.breakpoints.values.d};
  }
`;

export default Container;
