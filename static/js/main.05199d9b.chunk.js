(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){},25:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(0),a=n.n(i),s=n(16),r=n.n(s),o=(n(25),n(7)),d=n(8),l=n(10),u=n(9),h=(n(26),n(18)),j=(n(14),n(17)),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"buildRows",value:function(){return this.props.todos.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.task}),Object(c.jsx)("td",{children:t.complete?"yes":"no"})]},t.id)}))}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"Task"}),Object(c.jsx)("th",{children:"complete"})]})}),Object(c.jsx)("tbody",{children:this.buildRows()})]})})}}]),n}(a.a.Component),p=n(6),m=n(19),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={id:0,description:"",completed:!1},c}return Object(d.a)(n,[{key:"handleChange",value:function(t){var e={};"completed"===t.target.name?e[t.target.name]=!this.state.completed:e[t.target.name]=t.target.value,this.setState(e)}},{key:"submitHandler",value:function(t){t.preventDefault(),this.props.onsubmit(this.state.id,this.state.description,this.state.completed),this.setState({id:0,description:"",completed:!1})}},{key:"render",value:function(){var t=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a,{onSubmit:function(e){return t.submitHandler(e)},children:[Object(c.jsxs)(p.a.Group,{controlId:"taskID",children:[Object(c.jsx)(p.a.Label,{children:"Task ID"}),Object(c.jsx)(p.a.Control,{name:"id",type:"number",value:this.state.id,onChange:function(e){return t.handleChange(e)}})]}),Object(c.jsxs)(p.a.Group,{controlId:"taskDescription",children:[Object(c.jsx)(p.a.Label,{children:"Description"}),Object(c.jsx)(p.a.Control,{name:"description",type:"text",value:this.state.description,placeholder:"Description",onChange:function(e){return t.handleChange(e)}})]}),Object(c.jsx)(p.a.Group,{controlId:"complete",children:Object(c.jsx)(p.a.Check,{name:"completed",type:"checkbox",checked:this.state.completed,label:"Complete",onChange:function(e){return t.handleChange(e)}})}),Object(c.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={listItems:[{id:1,task:"make static data",complete:!1},{id:2,task:"make dynamic data",complete:!1}]},c}return Object(d.a)(n,[{key:"updateListItems",value:function(t,e,n){var c={id:t,task:e,complete:n};this.setState((function(t){return{listItems:t.listItems.concat(c)}}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)(h.a,{children:[Object(c.jsx)(b,{todos:this.state.listItems}),Object(c.jsx)(O,{onsubmit:function(e,n,c){return t.updateListItems(e,n,c)}})]})}}]),n}(a.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.05199d9b.chunk.js.map