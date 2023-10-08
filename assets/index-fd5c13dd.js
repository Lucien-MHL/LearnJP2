import{s as n,L as b,r as $,a as k,j as t,i as R,P as g,u as w,J as C,b as l,c as y,C as z,W as F,n as I,e as _,f as H,h as f,g as A,H as L}from"./index-ad2adce3.js";import{C as O}from"./index-0e113e47.js";const u={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n(b)`
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
      width: ${({$result:e})=>e?"45px":"180px"};
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      translate: 0 -50%;
      background: ${({theme:e})=>e.pickled_blue_wood};
    }
  `},D={Option:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function S(e){const r=$.useRef(),a=k(),c=()=>{const o=r.current.innerText;o&&a(R({user:o,truly:e.current.sound,id:e.current.id}))};return t.jsx(D.Option,{ref:r,onClick:c,children:e.sound})}S.propTypes={sound:g.string,current:g.shape({sound:g.string,word:g.string,id:g.string})};const p={Container:n.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 128px;
    padding-bottom: 30px;
    position: relative;
    user-select: none;
  `,ResultSection:n.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  `,Icon:n.section`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `,ResultText:n.p`
    font-size: 1.5rem;
    color: ${({$color:e})=>e};
    letter-spacing: 2px;
  `,Comparison:n.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    padding: 8px 0;
  `,Text:n.p`
    color: ${({$color:e})=>`${e}CA`};
  `,ToNextSubject:n.p`
    font-size: 1.05rem;
    letter-spacing: 1px;
    position: absolute;
    bottom: -5%;
    text-decoration: underline;
    text-align: center;
    width: 100%;
    padding: 10px;
  `};function T(e){const{t:r}=w(),a=k(),c=C(),o=l(x=>y(x,"answer")),h="100%",m=()=>{a(I(e.id)),a(_())};return t.jsxs(p.Container,{children:[t.jsxs(p.ResultSection,{children:[t.jsx(p.Icon,{children:o.result?t.jsx(z,{color:c[o.color],size:h}):t.jsx(F,{color:c[o.color],size:h})}),t.jsx(p.ResultText,{$color:c[o.color],children:r(`answer.${o.text}`)})]}),!o.result&&t.jsxs(p.Comparison,{children:[t.jsx(p.Text,{$color:c.red,children:r("comparison.user",{u:o.user})}),t.jsx(p.Text,{$color:c.green,children:r("comparison.truly",{t:o.truly})})]}),t.jsx(p.ToNextSubject,{onClick:m,children:r("next_subject.mobile")})]})}T.propTypes={id:g.string};const d={Header:n.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `,Title:n.p`
    color: ${({theme:e})=>e.mercury};
    font-size: 3rem;
  `,FailingDisplay:n.section`
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({theme:e})=>`${e.mine_shaft}EE`};
    padding: 4px 0;
    box-shadow: 0px 8px 24px ${({theme:e})=>e.mine_shaft}99;
    user-select: none;
  `,Row:n.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
  `,Item:n.p`
    width: 33%;
    text-align: center;
    font-size: 1.25rem;
    color: ${({$color:e,theme:r})=>e||r.mercury};

    &:nth-child(1) {
      font-size: 1.75rem;
    }
  `,LinkGroup:n.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 35%;
  `,link:n(b)`
    text-decoration: none;
    color: ${({theme:e})=>e.mercury};
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-size: 24px;
  `};function E(){const{category:e}=H(),{t:r}=w(),{red:a,green:c}=C(),o=l(s=>y(s,"log")),h=l(s=>y(s,"finishTitle")),m=l(s=>f(s,"data")),x=o.length,j=x&&o.map(s=>{const i=m.find(v=>v.id===s.id);return{word:i.word,sound:i.sound,fail:s.user,id:s.id}});return t.jsxs(t.Fragment,{children:[t.jsx(d.Header,{children:t.jsx(d.Title,{children:r(`finish.${h}`)})}),x?t.jsx(d.FailingDisplay,{children:j.map(s=>t.jsxs(d.Row,{children:[t.jsx(d.Item,{children:s.word}),t.jsx(d.Item,{$color:c,children:s.sound}),t.jsx(d.Item,{$color:a,children:s.fail})]},s.id))}):null,t.jsxs(d.LinkGroup,{children:[t.jsx(d.link,{to:"/",children:r("back_to_home")}),t.jsx(d.link,{to:`/${e}`,children:r("retry")})]})]})}function G(){const{t:e}=w(),r=A(),a=l(i=>f(i,"current")),c=l(i=>f(i,"count")),o=l(i=>f(i,"total")),h=l(i=>f(i,"opts")),m=l(i=>f(i,"list")),x=l(i=>y(i,"shouldFinish")),j=l(i=>y(i,"showResult")),s=$.useMemo(()=>x?!1:!!m.length,[x,m.length]);return t.jsx(t.Fragment,{children:r.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(u.Container,{children:s?t.jsxs(t.Fragment,{children:[t.jsx(u.HomeIcon,{to:"/",children:t.jsx(L,{})}),t.jsx(O,{}),t.jsxs(u.QuestionSection,{children:[t.jsx(u.Subject,{children:a.word}),t.jsx(u.Count,{children:`${c}/${o}`})]}),t.jsx(u.AnswerSection,{children:t.jsx(u.Options,{$content:e(j?"result":"chose_answer"),$result:j,children:j?t.jsx(T,{id:a.id}):t.jsx(t.Fragment,{children:h.map(i=>t.jsx(S,{sound:i.sound,current:a},i.id))})})})]}):t.jsx(E,{})})})}export{G as default};
