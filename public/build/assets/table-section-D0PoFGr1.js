import{u as h,j as t,h as c,y as j}from"./app-B0bHOfih.js";import u from"./update-section-BKIHZLnX.js";import b from"./delete-section-Dz2sdD4n.js";import{T as f,a as T,b as S,c as d,d as o,e as y}from"./TableRow-BJDYmhgc.js";import{P as Y}from"./Paper-C-sOm2Yd.js";import{B as C}from"./Button-DBdf06dB.js";import{V as D}from"./Visibility-Bj7J-caI.js";import"./enrollment-thunk-B91Irtt5.js";import"./academic-year-CSOfgDiq.js";import"./Snackbar-C1b3Tr-T.js";import"./DefaultPropsProvider-BzymfuE9.js";import"./useSlot-Bj4FQYFK.js";import"./resolveComponentProps-BZMqtjIp.js";import"./ButtonBase-DVACMu4K.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BtCKQIPz.js";import"./IconButton-DkW2QO_A.js";import"./useTheme-CiYPMNkT.js";import"./useSlotProps-BRk86mNT.js";import"./Modal-CmOg9NrC.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-CcX-u7l0.js";import"./Grow-BlgIwUvs.js";import"./Edit-cEi-uHaE.js";import"./Drawer-B9OJpAhr.js";import"./index-BrnTSZG1.js";import"./Slide-CDjUZdd9.js";import"./debounce-Be36O1Ab.js";import"./Box-DZw61azB.js";import"./extendSxProp-CsbjH1Y7.js";import"./TextField-Ck8Sf3Ad.js";import"./Select-CZOEaC2C.js";import"./InputBase-COpqTzuq.js";import"./isHostComponent-DVu5iVWx.js";import"./index-SVhwstkE.js";import"./Popover-CqFecj-G.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-NY_tRM4q.js";import"./useId-BL_aDLBc.js";import"./MenuItem-DPivg8fp.js";import"./listItemTextClasses-Ddn4-K2m.js";import"./Autocomplete-CyRVnsKU.js";import"./ListSubheader-CD1N_96t.js";import"./CircularProgress-BbOL5h0S.js";import"./Delete-PiNWYE8X.js";import"./Typography-xk2R4KBk.js";function bi(){const{enrollments:m}=h(i=>i.enrollments);return t.jsx(f,{component:Y,children:t.jsxs(T,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(S,{children:t.jsxs(d,{children:[t.jsx(o,{children:"Student ID"}),t.jsx(o,{children:"Firstname"}),t.jsx(o,{children:"Lastname"}),t.jsx(o,{children:"Semester"}),t.jsx(o,{children:"Section"}),t.jsx(o,{children:"Course"}),t.jsx(o,{children:"Year"}),t.jsx(o,{children:"Action"})]})}),t.jsx(y,{children:m==null?void 0:m.data.map((i,s)=>{var r,n,a,l,p,e;const x=c((r=i==null?void 0:i.user)==null?void 0:r.dob,"YYYY-MM-DD");return c().diff(x,"years"),console.log("res",i),t.jsxs(d,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{component:"th",scope:"row",children:(n=i==null?void 0:i.user)==null?void 0:n.user_id}),t.jsx(o,{children:(a=i==null?void 0:i.user)==null?void 0:a.fname}),t.jsx(o,{children:(l=i==null?void 0:i.user)==null?void 0:l.lname}),t.jsx(o,{children:i==null?void 0:i.semester}),t.jsx(o,{children:((p=i==null?void 0:i.section)==null?void 0:p.name)??""}),t.jsx(o,{children:((e=i==null?void 0:i.course)==null?void 0:e.name)??""}),t.jsx(o,{children:(i==null?void 0:i.year)??""}),t.jsx(o,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(u,{data:i}),t.jsx(b,{data:i}),t.jsx(C,{onClick:()=>j.visit(`/administrator/students/enrollment/${i.id}`),size:"small",variant:"contained",color:"success",children:t.jsx(D,{})})]})})]},s)})})]})})}export{bi as default};