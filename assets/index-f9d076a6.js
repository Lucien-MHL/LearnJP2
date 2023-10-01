import{s as o,L as n,j as t}from"./index-996b2f3b.js";import{H as r}from"./Home-0ff9007d.js";import{u as s}from"./useTranslation-4ba64dae.js";const i={Container:o.div`
    width: 1000px;
    height: 95%;
    margin: auto;
    translate: 0 2.5%;
    background: ${({theme:e})=>e.white+"33"};
    border-radius: 20px;
    box-shadow: 0 4px 30px ${({theme:e})=>e.black+"20"};
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid ${({theme:e})=>e.white+"aa"};
    position: relative;
    user-select: none;
  `,HomeIcon:o(n)`
    display: block;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: -40px;
    width: 80px;
    height: 80px;
    padding: 10px;
    background: ${({theme:e})=>e.white+"33"};
    box-shadow: 2px 4px 40px ${({theme:e})=>e.black+"22"};
    border: 1px solid ${({theme:e})=>e.white+"aa"};
    border-radius: 50%;
    text-decoration: none;
    color: ${({theme:e})=>e.mine_shaft};
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
  `,QuestionSection:o.section`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:o.p`
    text-align: center;
    font-size: 15rem;
    color: ${({theme:e})=>e.mine_shaft};
  `,InputSection:o.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
  `,Blackboard:o.main`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    position: absolute;
    width: 60%;
    height: 80%;
    background-color: ${({theme:e})=>e.dark_green};
    border-width: 7px 11px;
    border-style: solid;
    border-color: ${({theme:e})=>e.brown};
    border-radius: 7px;
    box-shadow: ${({theme:e})=>e.mine_shaft} 2px 2px 6px 0px inset,
      ${({theme:e})=>e.mine_shaft} -2px -2px 6px 1px inset;

    & > * {
      color: ${({theme:e})=>e.mercury};
      font-family: Chalk;
    }
  `,NumberOfQuestion:o.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  `,Current:o.p`
    font-size: 2rem;
  `,Total:o.p`
    font-size: 2rem;
  `,Input:o.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};function c(){const{t:e}=s();return t.jsxs(i.Container,{children:[t.jsx(i.HomeIcon,{to:"/",children:t.jsx(r,{size:"100%"})}),t.jsx(i.QuestionSection,{children:t.jsx(i.Subject,{children:"シ"})}),t.jsx(i.InputSection,{children:t.jsxs(i.Blackboard,{children:[t.jsxs(i.NumberOfQuestion,{children:[t.jsx(i.Current,{children:e("current",{current:1})}),t.jsxs(i.Total,{children:[e("total",{total:46})," "]})]}),t.jsx(i.Input,{type:"text",placeholder:"輸入答案"})]})})]})}export{c as default};
