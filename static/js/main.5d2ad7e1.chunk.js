(this["webpackJsonpmongodb-stitch-tutorial"]=this["webpackJsonpmongodb-stitch-tutorial"]||[]).push([[0],{15:function(t,e,n){t.exports=n(25)},20:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(9),l=n.n(i),s=(n(20),n(10)),c=n(11),d=n(3),r=n(14),u=n(13),h=n(5),m=(n(24),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={todos:[],value:""},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.displayTodos=t.displayTodos.bind(Object(d.a)(t)),t.addTodo=t.addTodo.bind(Object(d.a)(t)),t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.client=h.c.initializeDefaultAppClient("todotutorial-bezkq"),console.log(this.client);this.client.getServiceClient(h.b.factory,"mongodb-atlas");this.db=this.client.getServiceClient(h.b.factory,"mongodb-atlas").db("todo"),this.displayTodosOnLoad()}},{key:"displayTodos",value:function(){var t=this;this.db.collection("todo-item").find({},{limit:1e3}).asArray().then((function(e){t.setState({todos:e})}))}},{key:"displayTodosOnLoad",value:function(){this.client.auth.loginWithCredential(new h.a).then(this.displayTodos).catch(console.error)}},{key:"addTodo",value:function(t){t.preventDefault();var e=this.state.value;console.log(this.client),this.db.collection("todo-item").insertOne({owner_id:this.client.auth.user.id,item:e}).then(this.displayTodos)}},{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,"This is a todo app"),o.a.createElement("hr",null),o.a.createElement("p",null,"Add a Todo Item:"),o.a.createElement("form",{onSubmit:this.addTodo},o.a.createElement("label",null,o.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("ul",null,this.state.todos.map((function(t){return o.a.createElement("li",null,t.item)}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5d2ad7e1.chunk.js.map