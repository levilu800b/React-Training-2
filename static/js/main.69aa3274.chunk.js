(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(t,e,n){},45:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n(0),s=n.n(a),i=n(19),r=n.n(i),o=(n(45),n(15)),d=n(16),l=n(18),j=n(17),h=(n(46),n(38)),b=(n(33),n(35)),u=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"buildRows",value:function(){return this.props.todos.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.task}),Object(c.jsx)("td",{children:t.complete?"yes":"no"})]},t.id)}))}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"Task"}),Object(c.jsx)("th",{children:"complete"})]})}),Object(c.jsx)("tbody",{children:this.buildRows()})]})})}}]),n}(s.a.Component),p=n(11),O=n(36),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={id:0,description:"",completed:!1},c}return Object(d.a)(n,[{key:"handleChange",value:function(t){var e={};"completed"===t.target.name?e[t.target.name]=!this.state.completed:e[t.target.name]=t.target.value,this.setState(e)}},{key:"submitHandler",value:function(t){t.preventDefault(),this.props.onsubmit(this.state.id,this.state.description,this.state.completed),this.setState({id:0,description:"",completed:!1})}},{key:"render",value:function(){var t=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a,{onSubmit:function(e){return t.submitHandler(e)},children:[Object(c.jsxs)(p.a.Group,{controlId:"taskID",children:[Object(c.jsx)(p.a.Label,{children:"Task ID"}),Object(c.jsx)(p.a.Control,{name:"id",type:"number",value:this.state.id,onChange:function(e){return t.handleChange(e)}})]}),Object(c.jsxs)(p.a.Group,{controlId:"taskDescription",children:[Object(c.jsx)(p.a.Label,{children:"Description"}),Object(c.jsx)(p.a.Control,{name:"description",type:"text",value:this.state.description,placeholder:"Description",onChange:function(e){return t.handleChange(e)}})]}),Object(c.jsx)(p.a.Group,{controlId:"complete",children:Object(c.jsx)(p.a.Check,{name:"completed",type:"checkbox",checked:this.state.completed,label:"Complete",onChange:function(e){return t.handleChange(e)}})}),Object(c.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(s.a.Component),x=n(26),v=n(6),f=n(39),k=n(20),g=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={listItems:[{id:1,task:"make static data",complete:!1},{id:2,task:"make dynamic data",complete:!1}]},c}return Object(d.a)(n,[{key:"updateListItems",value:function(t,e,n){var c={id:t,task:e,complete:n};this.setState((function(t){return{listItems:t.listItems.concat(c)}}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(k.a,{bg:"light",expand:"md",children:[Object(c.jsx)(k.a.Brand,{children:"Todo List"}),Object(c.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(f.a,{className:"mr-auto",children:[Object(c.jsx)(x.b,{className:"nav-link",to:"/",children:"View"}),Object(c.jsx)(x.b,{className:"nav-link",to:"/add",children:"Add"})]})})]}),Object(c.jsx)(h.a,{children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{path:"/add",children:Object(c.jsx)(m,{onsubmit:function(e,n,c){return t.updateListItems(e,n,c)}})}),Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(u,{todos:this.state.listItems})}),Object(c.jsx)(v.a,{path:"/",children:"Error: 404 not found"})]})})]})}}]),n}(s.a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),C()}},[[53,1,2]]]);
//# sourceMappingURL=main.69aa3274.chunk.js.map