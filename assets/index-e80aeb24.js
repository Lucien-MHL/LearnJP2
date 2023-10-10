import{s as n,r as k,a as v,j as t,k as R,P as m,u as $,J as C,b as l,c as j,C as _,W as z,n as F,e as I,L as H,f as A,h as g,i as L,g as O,H as D}from"./index-e5eb4c3a.js";import{C as E}from"./index-dfe93314.js";const u={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n.button`
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 2px 4px;
    color: ${({theme:e})=>e.mercury};
    background: transparent;
    border: none;
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
  `},M={Option:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function S(e){const r=k.useRef(),d=v(),c=()=>{const s=r.current.innerText;s&&d(R({user:s,truly:e.current.sound,id:e.current.id}))};return t.jsx(M.Option,{ref:r,onClick:c,children:e.sound})}S.propTypes={sound:m.string,current:m.shape({sound:m.string,word:m.string,id:m.string})};const p={Container:n.main`
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
  `};function T(e){const{t:r}=$(),d=v(),c=C(),s=l(x=>j(x,"answer")),h="100%",f=()=>{d(F(e.id)),d(I())};return t.jsxs(p.Container,{children:[t.jsxs(p.ResultSection,{children:[t.jsx(p.Icon,{children:s.result?t.jsx(_,{color:c[s.color],size:h}):t.jsx(z,{color:c[s.color],size:h})}),t.jsx(p.ResultText,{$color:c[s.color],children:r(`answer.${s.text}`)})]}),!s.result&&t.jsxs(p.Comparison,{children:[t.jsx(p.Text,{$color:c.red,children:r("comparison.user",{u:s.user})}),t.jsx(p.Text,{$color:c.green,children:r("comparison.truly",{t:s.truly})})]}),t.jsx(p.ToNextSubject,{onClick:f,children:r("next_subject.mobile")})]})}T.propTypes={id:m.string};const a={Header:n.header`
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
  `,link:n(H)`
    text-decoration: none;
    color: ${({theme:e})=>e.mercury};
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-size: 24px;
  `};function N(){const{category:e}=A(),{t:r}=$(),{red:d,green:c}=C(),s=l(o=>j(o,"log")),h=l(o=>j(o,"finishTitle")),f=l(o=>g(o,"data")),x=s.length,w=x&&s.map(o=>{const y=f.find(b=>b.id===o.id);return{word:y.word,sound:y.sound,fail:o.user,id:o.id}});return t.jsxs(t.Fragment,{children:[t.jsx(a.Header,{children:t.jsx(a.Title,{children:r(`finish.${h}`)})}),x?t.jsx(a.FailingDisplay,{children:w.map(o=>t.jsxs(a.Row,{children:[t.jsx(a.Item,{children:o.word}),t.jsx(a.Item,{$color:c,children:o.sound}),t.jsx(a.Item,{$color:d,children:o.fail})]},o.id))}):null,t.jsxs(a.LinkGroup,{children:[t.jsx(a.link,{to:"/",children:r("back_to_home")}),t.jsx(a.link,{to:`/${e}`,children:r("retry")})]})]})}function G(){const{t:e}=$(),r=L(),d=O(),c=l(i=>g(i,"current")),s=l(i=>g(i,"count")),h=l(i=>g(i,"total")),f=l(i=>g(i,"opts")),x=l(i=>g(i,"list")),w=l(i=>j(i,"shouldFinish")),o=l(i=>j(i,"showResult")),y=k.useMemo(()=>w?!1:!!x.length,[w,x.length]),b=()=>{if(window.confirm(e("data_wont_save")))r("/");else return};return t.jsx(t.Fragment,{children:d.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(u.Container,{children:y?t.jsxs(t.Fragment,{children:[t.jsx(u.HomeIcon,{onClick:b,children:t.jsx(D,{})}),t.jsx(E,{}),t.jsxs(u.QuestionSection,{children:[t.jsx(u.Subject,{children:c.word}),t.jsx(u.Count,{children:`${s}/${h}`})]}),t.jsx(u.AnswerSection,{children:t.jsx(u.Options,{$content:e(o?"result":"chose_answer"),$result:o,children:o?t.jsx(T,{id:c.id}):t.jsx(t.Fragment,{children:f.map(i=>t.jsx(S,{sound:i.sound,current:c},i.id))})})})]}):t.jsx(N,{})})})}export{G as default};
