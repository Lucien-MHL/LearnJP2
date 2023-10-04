import{s as n,L as k,u as a,a as d,j as t,b as $,c as l,r as v,e as S}from"./index-73425515.js";import{u as z,H as C}from"./Wrong-747f1bbf.js";import{u as h}from"./useTranslation-5f6b169d.js";const s={Container:n.div`
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
  `,HomeIcon:n(k)`
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
  `,QuestionSection:n.section`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Subject:n.p`
    text-align: center;
    font-size: 15rem;
    color: ${({theme:e})=>e.mine_shaft};
  `,InputSection:n.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
  `,Blackboard:n.main`
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
  `,NumberOfQuestion:n.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  `,Current:n.p`
    font-size: 2rem;
  `,Total:n.p`
    font-size: 2rem;
  `,Input:n.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `},i={Container:n.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  `,ResultSection:n.section``,Text:n.p`
    display: flex;
    align-items: center;
    font-size: 3rem;
    letter-spacing: 10px;
    color: ${({$color:e})=>e};
  `,PreFix:n.p`
    font-size: 7rem;
  `,Comparison:n.section`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    padding-bottom: 30px;
  `,Txt:n.p`
    font-size: 2rem;
  `,PressToNext:n.p`
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    font-size: 1.5rem;
    font-family: BIZUDPMincho, sans-serif;
  `};function T(){const{t:e}=h(),r=a(c=>d(c,"answer"));return t.jsxs(i.Container,{children:[t.jsx(i.ResultSection,{children:t.jsxs(i.Text,{$color:r.color,children:[t.jsx(i.PreFix,{children:r.result?"O":"X"}),e(`answer.${r.text}`)]})}),!r.result&&t.jsxs(i.Comparison,{children:[t.jsx(i.Txt,{children:e("comparison.user",{u:r.user})}),t.jsx(i.Txt,{children:e("comparison.truly",{t:r.truly})})]}),t.jsx(i.PressToNext,{children:e("next_subject.web")})]})}function B(){const{t:e}=h(),r=$(),c=z(),p=a(o=>l(o,"current")),f=a(o=>l(o,"total")),m=a(o=>l(o,"count")),b=a(o=>d(o,"showResult")),[g,u]=v.useState(""),j=o=>{if(o.preventDefault(),o.target[0].value){const y={user:o.target[0].value,truly:p.sound};c(S(y)),u("")}else return},w=o=>{const x=o.target.value;u(x.replace(/[^a-z]/,""))};return t.jsx(t.Fragment,{children:r.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(s.Container,{children:[t.jsx(s.HomeIcon,{to:"/",children:t.jsx(C,{size:"100%"})}),t.jsx(s.QuestionSection,{children:t.jsx(s.Subject,{children:p.word})}),t.jsx(s.InputSection,{onSubmit:j,children:t.jsxs(s.Blackboard,{children:[t.jsxs(s.NumberOfQuestion,{children:[t.jsx(s.Current,{children:e("current",{current:m})}),t.jsxs(s.Total,{children:[e("total",{total:f})," "]})]}),b?t.jsx(T,{}):t.jsx(s.Input,{type:"text",placeholder:e("input_answer"),maxLength:3,onChange:w,value:g})]})})]})})}export{B as default};
