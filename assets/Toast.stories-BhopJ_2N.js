import{j as e}from"./jsx-runtime--26OcTxz.js";import{c as h,$ as f,d as x,e as j}from"./index--y6tNukA.js";import{r as C}from"./index-BLgStI3F.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Data Display/Toast",args:{title:"Toast Title",description:"Toast description",duration:2e3},render:function(i){const[{open:t},o]=E();function d(){o({open:!1})}return e.jsx(h,{...i,closeToast:d,open:t})},decorators:[r=>e.jsxs(f,{children:[r(),e.jsx(x,{})]})]},n={args:{}},a={args:{title:"Toast Title",description:"Toast description",duration:2e3},render:function(i){const[t,o]=C.useState([]);document.documentElement.style.setProperty("--toast-count",t.length?String(t.length):"0");const d=()=>{const s={id:t.length+1,open:!0};o([s,...t])},O=s=>{const _=t.map(c=>c.id===s?{...c,open:!1}:c);o(_)};return e.jsxs(f,{children:[e.jsx(j,{onClick:d,children:"Open Toast"}),t.map(s=>e.jsx(h,{...i,open:s.open,closeToast:()=>O(s.id)},s.id)),e.jsx(x,{})]})}};var p,l,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var T,m,g;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Toast Title',
    description: 'Toast description',
    duration: 2000
  },
  render: function Render(args) {
    const [toasts, setToasts] = useState<{
      id: number;
      open: boolean;
    }[]>([]);
    document.documentElement.style.setProperty('--toast-count', toasts.length ? String(toasts.length) : '0');
    const handleOpenToast = () => {
      const newToast = {
        id: toasts.length + 1,
        open: true
      };
      setToasts([newToast, ...toasts]);
    };
    const handleCloseToast = (id: number) => {
      const updatedToasts = toasts.map(toast => toast.id === id ? {
        ...toast,
        open: false
      } : toast);
      setToasts(updatedToasts);
    };
    return <ToastPrimitive.Provider>
        <Button onClick={handleOpenToast}>Open Toast</Button>
        {toasts.map(toast => <Toast key={toast.id} {...args} open={toast.open} closeToast={() => handleCloseToast(toast.id)} />)}
        <ToastViewportContainer />
      </ToastPrimitive.Provider>;
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const D=["Default","ButtonToast"];export{a as ButtonToast,n as Default,D as __namedExportsOrder,w as default};
