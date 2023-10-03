import{s as n,L as r,u as s,j as t}from"./index-7ffcadc8.js";import{H as c}from"./Home-6225f4f9.js";import{u as a}from"./useTranslation-b24099af.js";const i={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n(r)`
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;
    color: ${({theme:e})=>e.mercury};
  `,QuestionSection:n.section`
    width: 300px;
    height: 264px;
    margin: 100px auto 30px;
    border-radius: 10px;
    background-color: ${({theme:e})=>e.mercury};
    color: ${({theme:e})=>e.mine_shaft};
    position: relative;
    box-shadow: 0px 8px 24px ${({theme:e})=>e.mine_shaft}99;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:n.p`
    font-weight: bold;
    text-align: center;
    font-size: 13rem;
  `,Count:n.p`
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
    background-color: ${({theme:e})=>e.mercury};
    box-shadow: 0px 3px 8px ${({theme:e})=>e.black}80;
  `,AnswerSection:n.main`
    color: ${({theme:e})=>e.mercury};
    padding-top: 40px;
  `,Options:n.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1rem auto 0;
    padding: 0.5rem 0;
    width: 300px;
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 15px;
    position: relative;

    &::before {
      content: ${({$content:e})=>`'${e}'`};
      position: absolute;
      width: 180px;
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      translate: 0 -50%;
      background: ${({theme:e})=>e.pickled_blue_wood};
    }
  `,Item:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function d(){const{t:e}=a(),o=s();return t.jsx(t.Fragment,{children:o.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(i.Container,{children:[t.jsx(i.HomeIcon,{to:"/",children:t.jsx(c,{})}),t.jsxs(i.QuestionSection,{children:[t.jsx(i.Subject,{children:"ツ"}),t.jsx(i.Count,{children:"1/46"})]}),t.jsx(i.AnswerSection,{children:t.jsxs(i.Options,{$content:e("chose_answer"),children:[t.jsx(i.Item,{children:"shi"}),t.jsx(i.Item,{children:"wa"}),t.jsx(i.Item,{children:"se"}),t.jsx(i.Item,{children:"o"}),t.jsx(i.Item,{children:"tsu"}),t.jsx(i.Item,{children:"fu"})]})})]})})}export{d as default};
