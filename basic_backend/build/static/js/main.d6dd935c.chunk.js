(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(9),c=n.n(r),i=(n(17),n(7)),o=n.n(i),u=n(8),p=n(3),l=n(4),d=n(6),h=n(5),b=n(12),j=n(1),m=new function e(){Object(p.a)(this,e),Object(j.h)(this,{loading:!0,isLoggedIn:!1,username:""})},v=n(11),f=n(2),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"inputField",children:Object(f.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),n}(a.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"submitButton",children:Object(f.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),n}(a.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(p.a)(this,n),(s=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},s}return Object(l.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(v.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(m.isLoggedIn=!0,m.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"loginForm",children:["Login Form",Object(f.jsx)(g,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(f.jsx)(g,{type:"text",placeholder:"password",value:this.state.passsword?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(f.jsx)(O,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),n}(a.a.Component),y=(n(21),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(m.loading=!1,m.isLoggedin=!0,m.username=n.username):(m.loading=!1,m.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),m.loading=!1,m.isLoggedin=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(m.isLoggedin=!1,m.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return m.loading?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"container",children:"loading........please wait......"})}):m.isLoggedIn?Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"container",children:["Welcome ",m.username,Object(f.jsx)(O,{text:"Log out",disabled:!1,onClick:function(){return e.doLogout()}})]})}):Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(x,{})})})}}]),n}(a.a.Component)),k=Object(b.a)(y),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.d6dd935c.chunk.js.map