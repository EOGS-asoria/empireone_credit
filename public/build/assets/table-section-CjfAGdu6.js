import{u as h,j as t,h as c,y as j}from"./app-CmFQXMDA.js";import u from"./update-section-CeWa-Rqj.js";import b from"./delete-section-N8CDzD8e.js";import{T as f,a as T,b as S,c as d,d as o,e as y}from"./TableRow-uF-dnioo.js";import{P as Y}from"./Paper-R8ptfk5O.js";import{B as C}from"./Button-Ca6_f5QD.js";import{V as D}from"./Visibility-BXt58QUp.js";import"./enrollment-thunk-CO0rYOQe.js";import"./academic-year-3a7-FzwL.js";import"./Snackbar-C2NahZBo.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./ButtonBase-eD_9SiZw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CK7OYcX0.js";import"./IconButton-DgFuEDS4.js";import"./useTheme-BZLhdrJg.js";import"./useSlotProps-D41p7Ys2.js";import"./Modal-Dchp1q7E.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-BiPubG9K.js";import"./Grow-Dl67VZfs.js";import"./Edit-KuC4NvRY.js";import"./Drawer-DPSbidOb.js";import"./index-BO1-Chu-.js";import"./Slide--mF259TZ.js";import"./debounce-Be36O1Ab.js";import"./Box-Duu3fCG7.js";import"./extendSxProp-B0W4GVs0.js";import"./TextField-977EFnZH.js";import"./Select-DLCvHkET.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./Popover-WvAsdami.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BN9NxkgP.js";import"./useId-Ca1dvIWf.js";import"./MenuItem-B2s7s-bX.js";import"./listItemTextClasses-AuQXObol.js";import"./Autocomplete-B7KeA2xx.js";import"./ListSubheader-Bv4HFw9k.js";import"./CircularProgress-CNUxwePB.js";import"./Delete-cYsNvpRT.js";import"./Typography-CuYlNqLU.js";function bi(){const{enrollments:m}=h(i=>i.enrollments);return t.jsx(f,{component:Y,children:t.jsxs(T,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(S,{children:t.jsxs(d,{children:[t.jsx(o,{children:"Student ID"}),t.jsx(o,{children:"Firstname"}),t.jsx(o,{children:"Lastname"}),t.jsx(o,{children:"Semester"}),t.jsx(o,{children:"Section"}),t.jsx(o,{children:"Course"}),t.jsx(o,{children:"Year"}),t.jsx(o,{children:"Action"})]})}),t.jsx(y,{children:m==null?void 0:m.data.map((i,s)=>{var r,n,a,l,p,e;const x=c((r=i==null?void 0:i.user)==null?void 0:r.dob,"YYYY-MM-DD");return c().diff(x,"years"),console.log("res",i),t.jsxs(d,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{component:"th",scope:"row",children:(n=i==null?void 0:i.user)==null?void 0:n.user_id}),t.jsx(o,{children:(a=i==null?void 0:i.user)==null?void 0:a.fname}),t.jsx(o,{children:(l=i==null?void 0:i.user)==null?void 0:l.lname}),t.jsx(o,{children:i==null?void 0:i.semester}),t.jsx(o,{children:((p=i==null?void 0:i.section)==null?void 0:p.name)??""}),t.jsx(o,{children:((e=i==null?void 0:i.course)==null?void 0:e.name)??""}),t.jsx(o,{children:(i==null?void 0:i.year)??""}),t.jsx(o,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(u,{data:i}),t.jsx(b,{data:i}),t.jsx(C,{onClick:()=>j.visit(`/administrator/students/enrollment/${i.id}`),size:"small",variant:"contained",color:"success",children:t.jsx(D,{})})]})})]},s)})})]})})}export{bi as default};
