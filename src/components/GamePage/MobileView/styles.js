import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,
  HomeIcon: styled(Link)`
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.mercury};

    &:hover {
      scale: 1.25;
      transition: 0.25s;
    }
  `,

  QuestionSection: styled.section`
    width: 300px;
    height: 264px;
    margin: 120px auto 30px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.mercury};
    color: ${({ theme }) => theme.mine_shaft};
    position: relative;
    box-shadow: 0px 8px 24px ${({ theme }) => theme.mine_shaft}99;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Subject: styled.p`
    font-weight: bold;
    text-align: center;
    font-size: 13rem;
  `,
  Count: styled.p`
    width: 50%;
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -25px;
    text-align: center;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.mercury};
    box-shadow: 0px 3px 8px ${({ theme }) => theme.black}80;
  `,
}
