import{s as o,L as m,r as g,u as j,a as s,b as a,j as t,n as w}from"./index-7402b431.js";import{u as k,H as y}from"./Wrong-0a72b15a.js";import{u as $}from"./useTranslation-323a519d.js";const r={Container:o.div`
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
  `,HomeIcon:o(m)`
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
  `};function C(){const[e,c]=g.useState(""),{t:i}=$(),p=j(),d=k(),l=s(n=>a(n,"current")),u=s(n=>a(n,"total")),x=s(n=>a(n,"count")),h=n=>{if(n.preventDefault(),n.target[0].value)d(w(l.id)),c("");else return},b=n=>{const f=n.target.value;c(f.replace(/[^a-z]/,""))};return t.jsx(t.Fragment,{children:p.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(r.Container,{children:[t.jsx(r.HomeIcon,{to:"/",children:t.jsx(y,{size:"100%"})}),t.jsx(r.QuestionSection,{children:t.jsx(r.Subject,{children:l.word})}),t.jsx(r.InputSection,{onSubmit:h,children:t.jsxs(r.Blackboard,{children:[t.jsxs(r.NumberOfQuestion,{children:[t.jsx(r.Current,{children:i("current",{current:x})}),t.jsxs(r.Total,{children:[i("total",{total:u})," "]})]}),t.jsx(r.Input,{type:"text",placeholder:i("input_answer"),maxLength:3,onChange:b,value:e})]})})]})})}export{C as default};
