import styled from 'styled-components'

export const S = {
  Container: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  `,
  ResultSection: styled.section`
    display: flex;
    align-items: center;
    color: ${({ $color }) => $color};
  `,
  PreFix: styled.p`
    font-size: 7rem;
  `,
  Text: styled.p`
    display: flex;
    font-size: 3rem;
    letter-spacing: 10px;
  `,
  Comparison: styled.section`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    padding-bottom: 30px;
  `,
  Txt: styled.p`
    font-size: 2rem;
  `,
  PressToNext: styled.p`
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    font-size: 1.5rem;
    font-family: BIZUDPMincho, sans-serif;
  `,
}
