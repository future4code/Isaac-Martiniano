(this["webpackJsonpbrowsers-e-servdores"]=this["webpackJsonpbrowsers-e-servdores"]||[]).push([[0],{26:function(e,t,n){e.exports=n(49)},31:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),c=(n(31),n(18)),l=n(19),s=n(25),d=n(24),u=n(3),v=n(20),m=n.n(v),p=n(4);function g(){var e=Object(u.a)(["\nbackground-color: yellow;\nwidth: 60vw;\nmargin: auto;\nmargin-top: 30px;\nborder: 2px solid seagreen;\n\ntext-align: center;\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\nbackground-color: burlywood;\n"]);return h=function(){return e},e}var b=p.a.div(h()),w=p.a.div(g()),f=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={atividade:{}},e.componentDidMount=function(){e.geraAtividade()},e.geraAtividade=function(){m.a.get("http://www.boredapi.com/api/activity/").then((function(t){console.log(t.data),e.setState({atividade:t.data})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement("button",{onClick:this.geraAtividade},"Gerar Atividade"),r.a.createElement(w,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Atividade: "),this.state.atividade.activity),r.a.createElement("p",null,r.a.createElement("strong",null,"Acessibilidade: "),this.state.atividade.accessibility),r.a.createElement("p",null,r.a.createElement("strong",null,"Tipo: "),this.state.atividade.type),r.a.createElement("p",null,r.a.createElement("strong",null,"Participantes necess\xe1rio: "),this.state.atividade.participants),r.a.createElement("p",null,r.a.createElement("strong",null,"Pre\xe7o: "),this.state.atividade.price)))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ff23f348.chunk.js.map