import{u as n,j as i,h as e,y as l}from"./app-Sx_bOJu9.js";import d from"./update-section-D4_yR1Rr.js";import c from"./delete-section-HfHz2ze1.js";import{T as x,a as h,b as j,c as a,d as r,e as b}from"./TableRow-y--53Dyv.js";import{P as f}from"./Paper-DLcSMfrN.js";import{B as u}from"./Modal-pYuP7s9E.js";import{V as T}from"./Visibility-CI0n7biT.js";import"./instructor-thunk-BHnf6VUf.js";import"./user-service-ICm6-MhB.js";import"./Snackbar-DUsX7kdp.js";import"./DefaultPropsProvider-mLM_-agO.js";import"./useSlot-CuoNm3jO.js";import"./resolveComponentProps-CbuNjO-V.js";import"./ButtonBase-oDnS5RsJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Cp-M9F86.js";import"./IconButton-BYnPmo0C.js";import"./useTheme-C51DcwID.js";import"./useSlotProps-Cj9z0wcq.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CZxWyfw7.js";import"./utils-BBLcv1qi.js";import"./Edit-DAepx-EU.js";import"./Drawer-ibEQRRTs.js";import"./index-DBIuVB12.js";import"./Slide-BUghgOvp.js";import"./debounce-Be36O1Ab.js";import"./Box-CFn20A6Z.js";import"./extendSxProp-BSHUjdNx.js";import"./TextField-BMLBjt7Q.js";import"./Select-B4YETf7h.js";import"./InputBase-BUiU490S.js";import"./isHostComponent-DVu5iVWx.js";import"./index-B9U8gEFH.js";import"./Popover-1aNAYeZT.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-8N6k1L0C.js";import"./useId-DmGPsPvD.js";import"./MenuItem-Bq7CkbLQ.js";import"./listItemTextClasses-nzR0d2_2.js";import"./CircularProgress-BJ-vVnVE.js";import"./Delete-BnBiu5Nw.js";import"./Typography-CTsuVZtR.js";function ni(){const{instructors:o}=n(t=>t.instructors);return i.jsx(x,{component:f,children:i.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(j,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Employee ID"}),i.jsx(r,{children:"Firstname"}),i.jsx(r,{children:"Lastname"}),i.jsx(r,{children:"Email"}),i.jsx(r,{children:"Department"}),i.jsx(r,{children:"Action"})]})}),i.jsx(b,{children:o==null?void 0:o.data.map((t,s)=>{var m;const p=e(t.dob,"YYYY-MM-DD");return e().diff(p,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(r,{component:"th",scope:"row",children:t.user_id}),i.jsx(r,{children:t.fname}),i.jsx(r,{children:t.lname}),i.jsx(r,{children:t.email}),i.jsx(r,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(r,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(d,{data:t}),i.jsx(c,{data:t}),i.jsx(u,{onClick:()=>l.visit(`/administrator/instructor/${t.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(T,{})})]})})]},s)})})]})})}export{ni as default};