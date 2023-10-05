import{s as n,L as j,r as S,j as t,f as C,J as w,u as x,a as b,n as T,c as R,b as v,e as m}from"./index-e9710076.js";import{u as y,P as u,C as z,W as _,H as I}from"./Wrong-7ebfbad4.js";import{u as g}from"./useTranslation-6860f6a3.js";const p={Container:n.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
  `,HomeIcon:n(j)`
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
  `},F={Option:n.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem;
    margin: 0.5rem;
    width: 60px;
  `};function $(e){const s=S.useRef(),c=y(),r=()=>{const{sound:i}=e.current,d=s.current.innerText;d&&c(C({user:d,truly:i}))};return t.jsx(F.Option,{ref:s,onClick:r,children:e.sound})}$.propTypes={sound:u.string,current:u.shape({sound:u.string,word:u.string,id:u.string})};const a={Container:n.main`
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
  `};function k(e){const{t:s}=g(),c=y(),r=w(),i=x(h=>b(h,"answer")),d="100%",f=()=>{c(T(e.id)),c(R())};return t.jsxs(a.Container,{children:[t.jsxs(a.ResultSection,{children:[t.jsx(a.Icon,{children:i.result?t.jsx(z,{color:r[i.color],size:d}):t.jsx(_,{color:r[i.color],size:d})}),t.jsx(a.ResultText,{$color:r[i.color],children:s(`answer.${i.text}`)})]}),!i.result&&t.jsxs(a.Comparison,{children:[t.jsx(a.Text,{$color:r.red,children:s("comparison.user",{u:i.user})}),t.jsx(a.Text,{$color:r.green,children:s("comparison.truly",{t:i.truly})})]}),t.jsx(a.ToNextSubject,{onClick:f,children:s("next_subject.mobile")})]})}k.propTypes={id:u.string};const l={Header:n.header`
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
    color: ${({$color:e,theme:s})=>e||s.mercury};

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
  `,link:n(j)`
    text-decoration: none;
    color: ${({theme:e})=>e.mercury};
    border: 1px solid ${({theme:e})=>e.mercury};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-size: 24px;
  `};function A(){const{t:e}=g(),{red:s,green:c}=w(),r=[{fail:"aws",word:"ア",sound:"a",id:"1dc2c4d690ee8bdf"},{fail:"aws",word:"イ",sound:"i",id:"60489b5f9cb0ee19"},{fail:"aws",word:"ウ",sound:"u",id:"c558111f32794060"},{fail:"aws",word:"エ",sound:"e",id:"fdbe0e8dadf9b900"},{fail:"aws",word:"オ",sound:"o",id:"b3bd5993aaf52bba"}];return t.jsxs(t.Fragment,{children:[t.jsx(l.Header,{children:t.jsx(l.Title,{children:e("finish.all_fail")})}),t.jsx(l.FailingDisplay,{children:r.map(i=>t.jsxs(l.Row,{children:[t.jsx(l.Item,{children:i.word}),t.jsx(l.Item,{$color:c,children:i.sound}),t.jsx(l.Item,{$color:s,children:i.fail})]},i.id))}),t.jsxs(l.LinkGroup,{children:[t.jsx(l.link,{children:e("back_to_home")}),t.jsx(l.link,{children:e("retry")})]})]})}function E(){const{t:e}=g(),s=v(),c=x(o=>m(o,"current")),r=x(o=>m(o,"count")),i=x(o=>m(o,"total")),d=x(o=>m(o,"opts")),f=x(o=>m(o,"list")),h=x(o=>b(o,"showResult"));return t.jsx(t.Fragment,{children:s.isResize()?t.jsx("h1",{children:"請改回正確的裝置大小"}):t.jsx(p.Container,{children:f.length?t.jsx(A,{}):t.jsxs(t.Fragment,{children:[t.jsx(p.HomeIcon,{to:"/",children:t.jsx(I,{})}),t.jsxs(p.QuestionSection,{children:[t.jsx(p.Subject,{children:c.word}),t.jsx(p.Count,{children:`${r}/${i}`})]}),t.jsx(p.AnswerSection,{children:t.jsx(p.Options,{$content:e(h?"result":"chose_answer"),$result:h,children:h?t.jsx(k,{id:c.id}):t.jsx(t.Fragment,{children:d.map(o=>t.jsx($,{sound:o.sound,current:c},o.id))})})})]})})})}export{E as default};
