import{u as n,j as i,h as e,y as l}from"./app-B0bHOfih.js";import d from"./update-section-DYoCjEqI.js";import c from"./delete-section-DWPoNpk8.js";import{T as x,a as h,b as j,c as a,d as r,e as b}from"./TableRow-BJDYmhgc.js";import{P as f}from"./Paper-C-sOm2Yd.js";import{B as u}from"./Button-DBdf06dB.js";import{V as T}from"./Visibility-Bj7J-caI.js";import"./instructor-thunk-C4RdfGlj.js";import"./user-service-BHhp7ZRs.js";import"./Snackbar-C1b3Tr-T.js";import"./DefaultPropsProvider-BzymfuE9.js";import"./useSlot-Bj4FQYFK.js";import"./resolveComponentProps-BZMqtjIp.js";import"./ButtonBase-DVACMu4K.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BtCKQIPz.js";import"./IconButton-DkW2QO_A.js";import"./useTheme-CiYPMNkT.js";import"./useSlotProps-BRk86mNT.js";import"./Modal-CmOg9NrC.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-CcX-u7l0.js";import"./Grow-BlgIwUvs.js";import"./Edit-cEi-uHaE.js";import"./Drawer-B9OJpAhr.js";import"./index-BrnTSZG1.js";import"./Slide-CDjUZdd9.js";import"./debounce-Be36O1Ab.js";import"./Box-DZw61azB.js";import"./extendSxProp-CsbjH1Y7.js";import"./TextField-Ck8Sf3Ad.js";import"./Select-CZOEaC2C.js";import"./InputBase-COpqTzuq.js";import"./isHostComponent-DVu5iVWx.js";import"./index-SVhwstkE.js";import"./Popover-CqFecj-G.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-NY_tRM4q.js";import"./useId-BL_aDLBc.js";import"./MenuItem-DPivg8fp.js";import"./listItemTextClasses-Ddn4-K2m.js";import"./CircularProgress-BbOL5h0S.js";import"./Delete-PiNWYE8X.js";import"./Typography-xk2R4KBk.js";function li(){const{instructors:o}=n(t=>t.instructors);return i.jsx(x,{component:f,children:i.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(j,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Employee ID"}),i.jsx(r,{children:"Firstname"}),i.jsx(r,{children:"Lastname"}),i.jsx(r,{children:"Email"}),i.jsx(r,{children:"Department"}),i.jsx(r,{children:"Action"})]})}),i.jsx(b,{children:o==null?void 0:o.data.map((t,s)=>{var m;const p=e(t.dob,"YYYY-MM-DD");return e().diff(p,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(r,{component:"th",scope:"row",children:t.user_id}),i.jsx(r,{children:t.fname}),i.jsx(r,{children:t.lname}),i.jsx(r,{children:t.email}),i.jsx(r,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(r,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(d,{data:t}),i.jsx(c,{data:t}),i.jsx(u,{onClick:()=>l.visit(`/administrator/instructor/${t.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(T,{})})]})})]},s)})})]})})}export{li as default};
