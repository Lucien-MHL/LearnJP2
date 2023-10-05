import{s as n,L as v,u as p,a as b,r as x,j as t,c as $,n as S,b as z,e as d,f as C}from"./index-e9710076.js";import{u as j,P as T,H as I}from"./Wrong-7ebfbad4.js";import{u as h}from"./useTranslation-6860f6a3.js";const i={Container:n.div`
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
  `,HomeIcon:n(v)`
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
  `},a={Container:n.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  `,ResultSection:n.section`
    display: flex;
    align-items: center;
    color: ${({$color:e})=>e};
  `,PreFix:n.p`
    font-size: 7rem;
  `,Text:n.p`
    display: flex;
    font-size: 3rem;
    letter-spacing: 10px;
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
  `};function g({id:e}){const{t:c}=h(),u=j(),o=p(l=>b(l,"answer")),s={key:"keydown",func:l=>{if(l.code==="Space"){u($()),u(S(e));return}}};return x.useEffect(()=>(document.addEventListener(s.key,s.func),()=>document.removeEventListener(s.key,s.func)),[s.func,s.key]),t.jsxs(a.Container,{children:[t.jsxs(a.ResultSection,{$color:o.color,children:[t.jsx(a.PreFix,{children:o.result?"O":"X"}),t.jsx(a.Text,{children:c(`answer.${o.text}`)})]}),!o.result&&t.jsxs(a.Comparison,{children:[t.jsx(a.Txt,{children:c("comparison.user",{u:o.user})}),t.jsx(a.Txt,{children:c("comparison.truly",{t:o.truly})})]}),t.jsx(a.PressToNext,{children:c("next_subject.web")})]})}g.propTypes={id:T.string};const R={Input:n.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};function P(){const{t:e}=h(),[c,u]=x.useState(""),o=s=>{const l=s.target.value;u(l.replace(/[^a-z]/,""))};return t.jsx(R.Input,{type:"text",placeholder:e("input_answer"),maxLength:3,onChange:o,value:c,autoFocus:!0})}function L(){const{t:e}=h(),c=z(),u=j(),o=p(r=>d(r,"current")),s=p(r=>d(r,"total")),l=p(r=>d(r,"count")),w=p(r=>b(r,"showResult")),f=x.useRef(),y=r=>{r.preventDefault();const m=f.current[0].value;if(m){const k={user:m,truly:o.sound};u(C(k))}else return};return t.jsx(t.Fragment,{children:c.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsxs(i.Container,{children:[t.jsx(i.HomeIcon,{to:"/",children:t.jsx(I,{size:"100%"})}),t.jsx(i.QuestionSection,{children:t.jsx(i.Subject,{children:o.word})}),t.jsx(i.InputSection,{onSubmit:y,ref:f,children:t.jsxs(i.Blackboard,{children:[t.jsxs(i.NumberOfQuestion,{children:[t.jsx(i.Current,{children:e("current",{current:l})}),t.jsxs(i.Total,{children:[e("total",{total:s})," "]})]}),w?t.jsx(g,{id:o.id}):t.jsx(P,{})]})})]})})}export{L as default};
