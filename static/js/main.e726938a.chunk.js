(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){},85:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),s=a.n(r),c=(a(44),a(16)),l=a(17),i=a(19),u=a(18),d=a(20),m=a(11),p=a(28),h=a(31),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(re,null))}}]),t}(n.Component),b=a(137),f=a(140),E=a(76),v=a(153),O=a(4),j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.auth;return console.log(t),console.log(a.isLoggedin),o.a.createElement("div",{className:t.root},o.a.createElement(b.a,{position:"static",style:{background:"#2E3B55"}},o.a.createElement(f.a,null,o.a.createElement(E.a,{variant:"h3",className:t.title},o.a.createElement(p.b,{to:"/home"},o.a.createElement(v.a,{color:"inherit",variant:"h3",className:t.spacebetween},"Home")),o.a.createElement(p.b,{to:"/task"},o.a.createElement(v.a,{color:"inherit",variant:"h3",className:t.spacebetween},"Task")),o.a.createElement(p.b,{to:"/user"},o.a.createElement(v.a,{color:"inherit",variant:"h3",className:t.spacebetween},"User"))),!a.isLoggedin&&o.a.createElement(p.b,{to:"/"},o.a.createElement(v.a,{color:"inherit",className:t.menuButton},"Login")),a.isLoggedin&&o.a.createElement(p.b,{to:"/user"},o.a.createElement(v.a,{color:"inherit",className:t.menuButton},"Welcome")))))}}]),t}(n.Component),w=Object(O.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(5),fontSize:15,minWidth:"100px",minHeight:"50px",color:"white","&:hover":{backgroundColor:"white",color:"black"}},title:{flexGrow:2},spacebetween:{spacing:80,minWidth:"100px",minHeight:"50px",fontSize:15,color:"white","&:hover":{backgroundColor:"white",color:"black"}}}})(j),y=a(155),k=a(151),N=a(144),C=a(142),S=a(143),L=a(141),I="LOGIN_START",P="LOGIN_SUCCESS",A="LOG_OUT",D="EDIT_USER_SUCCESSFUL",T="FETCH_DATA",U="ADD_DATA",x="DELETE_DATA",z="LOADING";var _=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setUsername=function(e){a.setState({username:e.target.value})},a.setPassword=function(e){a.setState({password:e.target.value})},a.signIn=function(){var e,t=a.state,n=t.username,o=t.password;n>=1&&n<=9&&"1"===o?a.props.dispatch((e={username:n,password:o},console.log(e),localStorage.setItem("id",JSON.stringify(e)),console.log(e),{type:P,user:e})):a.setState({open:!0,message:"Incorrect Username or Password!"})},a.handleClose=function(){a.setState({open:!1})},a.state={username:"",password:"",message:"",open:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.isLoggedin?o.a.createElement(m.a,{to:"/home"}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"Login"},o.a.createElement("label",{className:"heading"},"Username"),o.a.createElement(k.a,{variant:"standard",placeholder:"Default username  between 1-10",margin:"normal",required:!0,onChange:this.setUsername,value:this.state.username,className:"size"}),o.a.createElement("label",{className:"heading"},"Password"),o.a.createElement(k.a,{variant:"standard",placeholder:"Default password 1",margin:"normal",required:!0,type:"password",onChange:this.setPassword,value:this.state.password,className:"size"}),o.a.createElement("div",{className:"Button"},o.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){e.signIn()}},"Log In"))),o.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(L.a,{id:"alert-dialog-title"},"Sign In"),o.a.createElement(C.a,null,o.a.createElement(S.a,{id:"alert-dialog-description"},this.state.message)),o.a.createElement(N.a,null,o.a.createElement(v.a,{onClick:this.handleClose,color:"primary"},"Okay")))))}}]),t}(n.Component);var B=Object(h.b)(function(e){return{auth:e.auth}})(_),J=a(53),R=a(152),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).logOut=function(){console.log("asdsad"),e.props.dispatch((console.log("Asdsad"),localStorage.removeItem("id"),{type:A}))},e.handleChange=function(t,a){e.setState(Object(J.a)({},t,a))},e.changePass=function(){console.log("ffsdf");var t=e.state.pass;e.setState({pass:!t}),console.log(e.state)},e.state={pass:!0,password:"1"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(R.a,{component:"span",display:"block",mx:10,my:5,bgcolor:""},o.a.createElement("div",{className:"fontSize"},"UserName : ",o.a.createElement("b",null,"1"))),o.a.createElement(R.a,{component:"span",display:"block",mx:10,my:5,bgcolor:"background.paper"},o.a.createElement("div",{className:"fontSize"},"Password : \xa0",this.state.pass?o.a.createElement("b",null,this.state.password):o.a.createElement("input",{type:"password",onChange:function(t){return e.handleChange("password",t.target.value)}}))),this.state.pass?o.a.createElement(v.a,{variant:"outlined",id:"changePassword",className:t.changePassword,onClick:this.changePass},"Change Passsword"):o.a.createElement(v.a,{variant:"outlined",id:"changePassword",className:t.changePassword,onClick:this.changePass},"Update"),o.a.createElement(v.a,{variant:"outlined",id:"logout",className:t.logout,onClick:this.logOut},"Logout"))}}]),t}(n.Component),H=Object(O.a)(function(e){return{changePassword:{margin:e.spacing.unit,position:"absolute",bottom:e.spacing(5),left:e.spacing(2)},logout:{margin:e.spacing.unit,position:"absolute",bottom:e.spacing(5),left:e.spacing(50)}}})(G),M=a(147),W=a(149),q=a(150),F=a(145),K=a(148),Q=a(146),V=a(98),X=a(71),Y=a.n(X);function Z(){return{type:z}}function $(){return function(e){e(Z);var t=JSON.parse(localStorage.getItem("id"));console.log("adfasd"),console.log(t.username);var a="http://jsonplaceholder.typicode.com/todos/?userId=".concat(t.username);fetch(a).then(function(e){return e.json()}).then(function(t){console.log(t),e({type:T,products:t})})}}var ee=Object(O.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(F.a),te=Object(O.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}})(Q.a),ae=Object(M.a)({table:{minWidth:700}});var ne=Object(h.b)(function(e){return{data:e.data,auth:e.auth}})(function(e){var t=ae();function a(t){e.dispatch({type:x,product:t})}function r(){var t;e.dispatch((t={userId:e.auth.username,id:e.data.products.length+1,title:"hello",completed:!0},console.log(t),{type:U,product:t}))}return Object(n.useEffect)(function(){e.dispatch($())},[e.auth.username]),console.log(e.data),o.a.createElement("div",null,e.data.loading&&o.a.createElement("h1",null,"Loading.."),o.a.createElement("div",{className:"center"},o.a.createElement(K.a,{component:V.a},o.a.createElement(W.a,{className:t.table,"aria-label":"customized table"},o.a.createElement(q.a,null,e.data.products.map(function(e){return o.a.createElement(te,{key:e.id},o.a.createElement(ee,{component:"th",scope:"row"},e.id),o.a.createElement(ee,{align:"left"},e.title),o.a.createElement(ee,{align:"left"},e.completed),o.a.createElement(ee,{align:"left"},o.a.createElement(v.a,{variant:"contained",color:"secondary",className:t.button,startIcon:o.a.createElement(Y.a,null),onClick:function(){a(e)}},"Delete")))}))))),o.a.createElement("div",{className:"addtask"},o.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){r()}},"Add a Task")))}),oe=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.value;return o.a.createElement("div",{class:"Information"},"1"===e?o.a.createElement("p",null,"React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple."):"2"===e?o.a.createElement("p",null,"Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind."):"3"===e?o.a.createElement("p",null,"MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.The document model maps to the objects in your application code, making data easy to work with"):null)}}]),t}(n.Component),re=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handledropdown=function(t){e.setState({value:t.target.value})},e.state={value:0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"dropdown"},o.a.createElement("select",{onClick:this.handledropdown,id:"dropdown"},o.a.createElement("option",{value:"1"},"Reactjs"),o.a.createElement("option",{value:"2"},"Nodejs"),o.a.createElement("option",{value:"3"},"MongoDb"))),o.a.createElement(oe,{value:this.state.value}))}}]),t}(o.a.Component),se=function(e){var t=e.isLoggedin,a=e.path,n=e.component,r=e.dispatch;return o.a.createElement(m.b,{path:a,render:function(e){return console.log("props",e),console.log("isLoggedin",t),t?o.a.createElement(n,Object.assign({},e,{dispatch:r})):o.a.createElement(m.a,{to:{pathname:"/",state:{from:e.location}}})}})},ce=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("id")&&this.props.dispatch(function(){var e=JSON.parse(localStorage.getItem("id"));return{type:P,user:e}}())}},{key:"render",value:function(){var e=this.props.auth;return console.log(this.props.dispatch),o.a.createElement(p.a,null,o.a.createElement(w,{auth:e}),o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/",exact:!0,component:B}),o.a.createElement(se,{path:"/home",component:g,isLoggedin:e.isLoggedin}),o.a.createElement(se,{path:"/task",component:ne,dispatch:this.props.dispatch,isLoggedin:e.isLoggedin}),o.a.createElement(se,{path:"/user",component:H,dispatch:this.props.dispatch,isLoggedin:e.isLoggedin})))}}]),t}(n.Component);var le=Object(h.b)(function(e){return{auth:e.auth}})(ce),ie=a(39),ue=a(72),de=a(73),me=a.n(de),pe=a(25),he={user:{},isLoggedin:!1,inProgress:!1};var ge=a(74),be={products:[],loading:!0},fe=Object(ie.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(pe.a)({},e,{inProgress:!0});case P:return Object(pe.a)({},e,{user:t.user,isLoggedin:!0,inProgress:!1});case A:return Object(pe.a)({},e,{user:{},isLoggedin:!1});case D:return Object(pe.a)({},e,{user:t.user});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(pe.a)({},e,{products:t.products,loading:!1});case U:return Object(pe.a)({},e,{products:[].concat(Object(ge.a)(e.products),[t.product])});case x:var a=e.products.filter(function(e){return e.id!==t.product.id});return Object(pe.a)({},e,{products:a});case z:return Object(pe.a)({},e,{loading:!0});default:return e}}});var Ee=Object(ie.d)(fe,Object(ie.a)(ue.a,me.a));console.log(Ee),s.a.render(o.a.createElement(h.a,{store:Ee},o.a.createElement(o.a.StrictMode,null,o.a.createElement(le,null))),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.e726938a.chunk.js.map