import styled from 'styled-components'

export const S = {
  Container: styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.mercury + '77'};
    backdrop-filter: blur(1px);
    margin: auto;
  `,
}
