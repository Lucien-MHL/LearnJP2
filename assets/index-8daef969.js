import{s,J as d,a as g,b as m,c as x,j as e,o as S,l as f,P as t}from"./index-2323d57b.js";const i={IconSection:s.button`
    position: absolute;
    background-color: transparent;
    border: none;
    width: ${({$size:o})=>o};
    height: ${({$size:o})=>o};
    ${({$position:o})=>o}
  `,Clickable:s.div`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `,ShowFailsNumber:s.p`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: ${({theme:o})=>o.red};
    border-radius: 50%;
    color: ${({theme:o})=>o.mercury};
    translate: -40% 35%;
    text-align: center;
    line-height: 20px;
  `},r={size:"35px",position:{top:16,right:16}};function $(o){const{mercury:l}=d(),a=g(),n=m(b=>x(b,"log")),c=!!n.length,{size:p=r.size,position:h=r.position,color:u=l}=o;return c?e.jsxs(i.IconSection,{$size:p,$position:h,children:[e.jsx(i.Clickable,{onClick:()=>a(S())}),e.jsx(i.ShowFailsNumber,{children:n.length}),e.jsx(f,{color:u})]}):null}$.propTypes={size:t.string,position:t.shape({top:t.number,left:t.number,right:t.number,bottom:t.number}),color:t.string};export{$ as C};
