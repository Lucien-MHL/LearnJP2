import styled from 'styled-components'

export const S = {
  Container: styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 128px;
  `,
  IconSection: styled.section`
    width: 45px;
    height: 45px;
    margin-right: 10px;
  `,
  ResultText: styled.p`
    font-size: 2rem;
    color: ${({ $color }) => $color};
    letter-spacing: 2px;
  `,
}
