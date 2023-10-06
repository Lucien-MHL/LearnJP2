import{s as n,L as j,u as h,a as y,r as m,j as t,c as S,n as _,J as C,b as T,d as I,e as R,f,g as F}from"./index-517138ac.js";import{u as k,P as D,H as L}from"./Wrong-eed27708.js";import{u as g}from"./useTranslation-35c2144e.js";const l={Container:n.div`
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
  `,HomeIcon:n(j)`
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
  `},u={Container:n.main`
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
  `};function $({id:e}){const{t:i}=g(),p=k(),o=h(c=>y(c,"answer")),s={key:"keydown",func:c=>{if(c.code==="Space"){p(S()),p(_(e));return}}};return m.useEffect(()=>(document.addEventListener(s.key,s.func),()=>document.removeEventListener(s.key,s.func)),[s.func,s.key]),t.jsxs(u.Container,{children:[t.jsxs(u.ResultSection,{$color:o.color,children:[t.jsx(u.PreFix,{children:o.result?"O":"X"}),t.jsx(u.Text,{children:i(`answer.${o.text}`)})]}),!o.result&&t.jsxs(u.Comparison,{children:[t.jsx(u.Txt,{children:i("comparison.user",{u:o.user})}),t.jsx(u.Txt,{children:i("comparison.truly",{t:o.truly})})]}),t.jsx(u.PressToNext,{children:i("next_subject.web")})]})}$.propTypes={id:D.string};const P={Input:n.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 5rem;
    text-align: center;
  `};function O(){const{t:e}=g(),[i,p]=m.useState(""),o=s=>{const c=s.target.value;p(c.replace(/[^a-z]/,""))};return t.jsx(P.Input,{type:"text",placeholder:e("input_answer"),maxLength:3,onChange:o,value:i,autoFocus:!0})}const d={Header:n.header`
    display: flex;
    justify-content: center;
    padding: 50px;
  `,Title:n.p`
    color: ${({theme:e})=>e.mine_shaft};
    font-size: 64px;
    font-weight: bold;
  `,FailingDisplay:n.section`
    @font-face {
      font-family: Chalk;
      src: url('./font/Chalk.ttf');
    }

    width: 60%;
    margin: auto;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    user-select: none;
  `,Row:n.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,Item:n.p`
    width: 33%;
    text-align: center;
    font-size: 36px;
    color: ${({$color:e,theme:i})=>e||i.mercury};

    &:nth-child(1) {
      font-size: 48px;
    }
  `,LinkGroup:n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    /* TODO: 
         如果有錯誤的題目，則 margin-top 為 85px，
         其餘則為 auto。
     */
    margin-top: auto;
    height: 35%;
  `,link:n(j)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 110px;
    height: 230px;
    margin: 0 25px;
    text-decoration: none;
    writing-mode: vertical-lr;
    color: ${({theme:e})=>e.mine_shaft};
    font-size: 22px;
    user-select: none;
    text-align: center;
    transition: translate 0.2s ease-in-out;

    &:nth-child(1) {
      font-size: 44px;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      z-index: -1;
      background: url('./lantern.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &:hover {
      translate: 0 -10px;
    }
  `};function H(){const{t:e}=g(),{red:i,green:p}=C(),{category:o}=T(),s=m.useMemo(()=>{const r=Object.keys(I).filter(x=>x!==o);return[e("back_to_home"),...r.map(x=>e("go_challenge",{name:e(x)}))]},[o,e]),c=[{fail:"aws",word:"ア",sound:"a",id:"1dc2c4d690ee8bdf"},{fail:"aws",word:"イ",sound:"i",id:"60489b5f9cb0ee19"},{fail:"aws",word:"ウ",sound:"u",id:"c558111f32794060"},{fail:"aws",word:"エ",sound:"e",id:"fdbe0e8dadf9b900"},{fail:"aws",word:"オ",sound:"o",id:"b3bd5993aaf52bba"}];return t.jsxs(t.Fragment,{children:[t.jsx(d.Header,{children:t.jsx(d.Title,{children:e("finish.well_done")})}),t.jsx(d.FailingDisplay,{children:c.map(r=>t.jsxs(d.Row,{children:[t.jsx(d.Item,{children:r.word}),t.jsx(d.Item,{$color:p,children:r.sound}),t.jsx(d.Item,{$color:i,children:r.fail})]},r.id))}),t.jsx(d.LinkGroup,{children:s.map(r=>t.jsx(d.link,{children:r},r))})]})}function Q(){const{t:e}=g(),i=R(),p=k(),o=h(a=>f(a,"current")),s=h(a=>f(a,"total")),c=h(a=>f(a,"count")),r=h(a=>f(a,"list")),b=h(a=>y(a,"showResult")),x=m.useRef(),v=a=>{a.preventDefault();const w=x.current[0].value;if(w){const z={user:w,truly:o.sound};p(F(z))}else return};return t.jsx(t.Fragment,{children:i.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(l.Container,{children:r.length?t.jsx(H,{}):t.jsxs(t.Fragment,{children:[t.jsx(l.HomeIcon,{to:"/",children:t.jsx(L,{size:"100%"})}),t.jsx(l.QuestionSection,{children:t.jsx(l.Subject,{children:o.word})}),t.jsx(l.InputSection,{onSubmit:v,ref:x,children:t.jsxs(l.Blackboard,{children:[t.jsxs(l.NumberOfQuestion,{children:[t.jsx(l.Current,{children:e("current",{current:c})}),t.jsxs(l.Total,{children:[e("total",{total:s})," "]})]}),b?t.jsx($,{id:o.id}):t.jsx(O,{})]})})]})})})}export{Q as default};
