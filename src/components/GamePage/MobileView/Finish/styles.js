import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const S = {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.mercury};
    font-size: 3rem;
  `,
  FailingDisplay: styled.section`
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme }) => `${theme.mine_shaft}EE`};
    padding: 4px 0;
    box-shadow: 0px 8px 24px ${({ theme }) => theme.mine_shaft}99;
    user-select: none;
  `,
  Row: styled.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,
  Item: styled.p`
    width: 33%;
    text-align: center;
    font-size: 1.25rem;
    color: ${({ $color, theme }) => ($color ? $color : theme.mercury)};

    &:nth-child(1) {
      font-size: 1.75rem;
    }
  `,
  LinkGroup: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 35%;
  `,
  link: styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.mercury};
    border: 1px solid ${({ theme }) => theme.mercury};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-size: 24px;
  `,
}
