import{s as t,L as r,j as n}from"./index-e9710076.js";import{l as a}from"./linkData-0073061f.js";import{u as s}from"./useTranslation-6860f6a3.js";const i={Container:t.div`
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({theme:e})=>e.mine_shaft};
  `,Header:t.header`
    margin-top: 60px;
    text-align: center;
    user-select: none;
  `,Main:t.p`
    font-size: 4.5rem;
  `,Sub:t.p`
    font-size: 3.15rem;
  `,ListSection:t.section`
    display: flex;
    margin: auto;
  `,LinkButton:t(r)`
    position: relative;
    color: ${({theme:e})=>e.mine_shaft};
    font-size: 1.75rem;
    writing-mode: vertical-rl;
    text-decoration: none;
    user-select: none;
    margin: 0 25px;
    width: 85px;
    height: 210px;
    text-align: center;
    transition: translate 0.2s ease-in-out;

    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      z-index: -1;
      background: url('./lantern.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }

    &:hover {
      translate: 0 -10px;
    }
  `};function p(){const{t:e}=s();return n.jsxs(i.Container,{children:[n.jsxs(i.Header,{children:[n.jsx(i.Main,{children:e("homepage_title.main")}),n.jsx(i.Sub,{children:e("homepage_title.sub")})]}),n.jsx(i.ListSection,{children:a().map(o=>n.jsx(i.LinkButton,{to:o.link,children:e(o.key)},o.key))})]})}export{p as default};
