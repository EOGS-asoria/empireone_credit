import{u as n,j as i,h as e,y as l}from"./app-DR0J3iY6.js";import d from"./update-section-BY39pVDl.js";import c from"./delete-section-BcvW7Lxd.js";import{T as x,a as h,b as j,c as a,d as r,e as b}from"./TableRow-Dp9xgcon.js";import{P as f}from"./Paper-DwqMU4Fk.js";import{B as u}from"./Modal-Cac6eZiH.js";import{V as T}from"./Visibility-CiNI51Zc.js";import"./instructor-thunk-DXNv9ZE-.js";import"./user-service-D3C2dbBh.js";import"./Snackbar-TIgEUE57.js";import"./DefaultPropsProvider-CR8IoqCp.js";import"./useSlot-CjlqfoOR.js";import"./resolveComponentProps-mF_8kZZ-.js";import"./ButtonBase-BCu9WJH7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CY5vyM7K.js";import"./IconButton-ebpifrjP.js";import"./useTheme-CJ1gzrD8.js";import"./useSlotProps-iacHPYuL.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DgPe34V-.js";import"./utils-Cza7W53-.js";import"./Edit-B03T2xrX.js";import"./Drawer-Cz_2SLjA.js";import"./index-BuHfgPTj.js";import"./Slide-CK7PBcx9.js";import"./debounce-Be36O1Ab.js";import"./Box-Eoauizbq.js";import"./extendSxProp-DsChnBMx.js";import"./TextField-D-p16xRw.js";import"./Select-D6bWihzP.js";import"./InputBase-B-RPtYSk.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Cohv1wSY.js";import"./Popover-BvfNhLBz.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-B7w4rTui.js";import"./useId-SJPJl8Ce.js";import"./MenuItem-Dlf30r5A.js";import"./listItemTextClasses-Dm6xHElw.js";import"./CircularProgress-Ddy2FxZd.js";import"./Delete-Cp4DKOVN.js";import"./Typography-BquQ-n_2.js";function ni(){const{instructors:o}=n(t=>t.instructors);return i.jsx(x,{component:f,children:i.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(j,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Employee ID"}),i.jsx(r,{children:"Firstname"}),i.jsx(r,{children:"Lastname"}),i.jsx(r,{children:"Email"}),i.jsx(r,{children:"Department"}),i.jsx(r,{children:"Action"})]})}),i.jsx(b,{children:o==null?void 0:o.data.map((t,s)=>{var m;const p=e(t.dob,"YYYY-MM-DD");return e().diff(p,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(r,{component:"th",scope:"row",children:t.user_id}),i.jsx(r,{children:t.fname}),i.jsx(r,{children:t.lname}),i.jsx(r,{children:t.email}),i.jsx(r,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(r,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(d,{data:t}),i.jsx(c,{data:t}),i.jsx(u,{onClick:()=>l.visit(`/administrator/instructor/${t.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(T,{})})]})})]},s)})})]})})}export{ni as default};
