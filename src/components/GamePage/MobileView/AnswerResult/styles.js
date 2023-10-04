import styled from 'styled-components'

export const S = {
  Container: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 128px;
    padding-bottom: 30px;
    position: relative;
    user-select: none;
  `,
  ResultSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  `,
  Icon: styled.section`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `,
  ResultText: styled.p`
    font-size: 1.5rem;
    color: ${({ $color }) => $color};
    letter-spacing: 2px;
  `,
  Comparison: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    padding: 8px 0;
  `,
  Text: styled.p`
    color: ${({ $color }) => `${$color}CA`};
  `,
  ToNextSubject: styled.p`
    font-size: 1.05rem;
    letter-spacing: 1px;
    position: absolute;
    bottom: -5%;
    text-decoration: underline;
    text-align: center;
    width: 100%;
    padding: 10px;
  `,
}
