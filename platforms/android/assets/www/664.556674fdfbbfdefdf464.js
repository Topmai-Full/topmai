(self.webpackChunktopmai=self.webpackChunktopmai||[]).push([[664],{664:(i,e,n)=>{"use strict";n.r(e),n.d(e,{AboutMePageModule:()=>_});var t=n(1116),o=n(1462),s=n(6611),r=n(5860),g=n(4762),l=n(7325),a=n(198),c=n(911),d=n(8619);function Z(i,e){if(1&i&&(d.TgZ(0,"div"),d._UZ(1,"img",9),d.qZA()),2&i){const i=d.oxw().$implicit;d.xp6(1),d.Q6J("src",i.people,d.LSH)}}function p(i,e){if(1&i&&(d.TgZ(0,"ion-col",2),d._UZ(1,"img",3),d.TgZ(2,"ion-row"),d.TgZ(3,"ion-col",4),d._uU(4),d._UZ(5,"br"),d._uU(6),d.qZA(),d.qZA(),d.TgZ(7,"ion-row",5),d.TgZ(8,"div",6),d.TgZ(9,"span",7),d._uU(10),d.qZA(),d.TgZ(11,"span"),d._uU(12),d.qZA(),d.qZA(),d.YNc(13,Z,2,1,"div",8),d.qZA(),d.qZA()),2&i){const i=e.$implicit,n=e.index,t=d.oxw();d.Tol(t.getClass(n)),d.xp6(1),d.Q6J("src",i.img,d.LSH),d.xp6(3),d.hij(" ",i.title,""),d.xp6(2),d.hij(" ",i.subTitle," "),d.xp6(4),d.Oqu(i.price),d.xp6(2),d.Oqu(i.priceNote),d.xp6(1),d.Q6J("ngIf",i.people)}}let u=(()=>{class i{constructor(){this.items=[{id:1,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/1.png",people:"assets/homePage/item-two/g1.png"},{id:2,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/2.png",people:"assets/homePage/item-two/g3.png"},{id:3,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/3.png"},{id:4,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/4.png",people:"assets/homePage/item-two/g4.png"},{id:5,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/1.png"},{id:6,title:"Refrigerador Qianku",subTitle:"SubTitle",price:"\u20ac000",priceNote:"\u20ac30",img:"assets/homePage/item-two/2.png"}]}ngOnInit(){}getClass(i){return 0===i?"left-col first-row":1===i?"right-col first-row":i%2==0?"left-col":"right-col"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Xpm({type:i,selectors:[["app-items-list"]],decls:3,vars:1,consts:[[2,"padding","0px"],["style","font-size: 12px","size","6",3,"class",4,"ngFor","ngForOf"],["size","6",2,"font-size","12px"],[3,"src"],[2,"padding-bottom","0px"],[2,"display","flex","justify-content","space-between","padding-left","5px","align-items","center"],[2,"color","#6A7586"],[2,"color","#DF2E24","margin-right","5px"],[4,"ngIf"],[2,"height","20px",3,"src"]],template:function(i,e){1&i&&(d.TgZ(0,"ion-grid",0),d.TgZ(1,"ion-row"),d.YNc(2,p,14,8,"ion-col",1),d.qZA(),d.qZA()),2&i&&(d.xp6(2),d.Q6J("ngForOf",e.items))},directives:[s.jY,s.Nd,t.sg,s.wI,t.O5],styles:[".first-row[_ngcontent-%COMP%]{padding-top:0}.left-col[_ngcontent-%COMP%]{padding-left:0}.right-col[_ngcontent-%COMP%]{padding-right:0}.grid-categories[_ngcontent-%COMP%]{--ion-grid-columns:10}"]}),i})();function m(i,e){if(1&i&&(d.TgZ(0,"span"),d._uU(1),d.qZA()),2&i){const i=d.oxw();d.xp6(1),d.hij(" ",null==i.user?null:i.user.name," ")}}function h(i,e){1&i&&(d.TgZ(0,"span"),d._uU(1," Name "),d.qZA())}function f(i,e){if(1&i&&(d.TgZ(0,"span"),d._uU(1),d.qZA()),2&i){const i=d.oxw();d.xp6(1),d.hij(" ",null==i.user?null:i.user.email," ")}}function T(i,e){1&i&&(d.TgZ(0,"span"),d._uU(1," Email "),d.qZA())}function A(i,e){if(1&i){const i=d.EpF();d.TgZ(0,"ion-button",41),d.NdJ("click",function(){return d.CHM(i),d.oxw().gotoSesion()}),d._uU(1,"INICIAR SESI\xd3N "),d.qZA()}}function x(i,e){if(1&i){const i=d.EpF();d.TgZ(0,"ion-button",41),d.NdJ("click",function(){return d.CHM(i),d.oxw().logout()}),d._uU(1,"Se d\xe9connecter "),d.qZA()}}const q=[{path:"",component:(()=>{class i{constructor(i,e,n){this.modalController=i,this.router=e,this.alertCtrl=n}ngOnInit(){}goMyOrders(){this.router.navigate(["my-orders"])}goMyFavorites(){this.router.navigate(["favorites"])}gotoEnvios(){this.router.navigate(["order-wizard"])}gotoSesion(){this.router.navigate(["presentation"])}ionViewWillEnter(){this.user=JSON.parse(localStorage.getItem("user"))}logout(){return(0,g.mG)(this,void 0,void 0,function*(){const i=yield this.alertCtrl.create({header:"Are you sure",message:"You want to logout",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:i=>{console.log("Cancel")}},{text:"Okay",handler:()=>(0,g.mG)(this,void 0,void 0,function*(){this.user=JSON.parse(localStorage.getItem("user")),localStorage.clear()})}]});yield i.present()})}openProfileModal(){return(0,g.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:a.q});return yield i.present()})}openOrderStateModal(){return(0,g.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:c.i});return yield i.present()})}shippingModal(){return(0,g.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:l.J});return yield i.present()})}}return i.\u0275fac=function(e){return new(e||i)(d.Y36(s.IN),d.Y36(r.F0),d.Y36(s.Br))},i.\u0275cmp=d.Xpm({type:i,selectors:[["app-about-me"]],decls:133,vars:6,consts:[[2,"margin-top","10px"],["size","2",2,"display","flex","align-items","center","justify-content","center"],["src","https://ionicframework.com/docs/demos/api/avatar/avatar.svg",2,"display","block","border-radius","50px","width","70%"],["size","5",2,"display","flex","flex-direction","column","justify-content","center"],["id","userName"],[4,"ngIf"],["id","userEmail"],[2,"margin-left","0px","padding-bottom","3px"],["size","3",2,"display","flex","flex-direction","column"],[2,"color","#a5a4a4","align-items","center","text-align","right","display","flex","justify-content","flex-end"],["src","assets/chat/wallet/settings.png","alt","",2,"max-width","30%",3,"click"],["style","--background: #35CA75;","expand","block",3,"click",4,"ngIf"],[2,"padding","10px"],["size","2"],[2,"text-align","center"],["src","assets/about-me/1x/pago_pendiente.png",2,"width","30px","height","30px"],[2,"font-size","13px","text-align","center","color","#666666",3,"click"],["src","assets/about-me/1x/notificaciones.png",2,"width","30px","height","30px"],[2,"font-size","13px","text-align","center","color","#666666"],["size","2",3,"click"],["src","assets/about-me/1x/envio_pendiente.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/gana_cupones.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/favoritos.png",2,"width","30px","height","30px"],[2,"height","10px","background","#efeeee"],["size","5",2,"display","flex","align-items","center"],["size","5",2,"color","#a5a4a4","align-items","center","text-align","right","display","flex","justify-content","flex-end"],["name","chevron-forward-outline",2,"font-size","20px"],["src","assets/about-me/1x/pendiente_pago.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/productos_comprados_resientes.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/e_nviado.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/pendiente_valoracion.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/monedero.png",2,"width","30px","height","30px"],["size","5",2,"color","#a5a4a4","align-items","right","text-align","right","display","flex","justify-content","flex-end"],["src","assets/about-me/1x/direccion_entrega.png",2,"width","30px","height","30px"],["src","assets/about-me/7.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/centro_ayuda.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/preguntas.png",2,"width","30px","height","30px"],["src","assets/about-me/1x/sujerencias.png",2,"width","30px","height","30px"],[2,"display","flex","align-items","center","justify-content","center"],["src","assets/about-me/1x/destacado2.png",2,"width","20px","height","20px"],[2,"margin-left","8px","color","#9e0101"],["expand","block",2,"--background","#35CA75",3,"click"]],template:function(i,e){1&i&&(d.TgZ(0,"ion-content"),d.TgZ(1,"ion-grid",0),d.TgZ(2,"ion-row"),d.TgZ(3,"ion-col",1),d._UZ(4,"img",2),d.qZA(),d.TgZ(5,"ion-col",3),d.TgZ(6,"div",4),d.YNc(7,m,2,1,"span",5),d.YNc(8,h,2,0,"span",5),d.qZA(),d.TgZ(9,"div",6),d.TgZ(10,"div",7),d.YNc(11,f,2,1,"span",5),d.YNc(12,T,2,0,"span",5),d.qZA(),d.qZA(),d.qZA(),d.TgZ(13,"ion-col",8),d.TgZ(14,"div",9),d.TgZ(15,"img",10),d.NdJ("click",function(){return e.openProfileModal()}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.YNc(16,A,2,0,"ion-button",11),d.YNc(17,x,2,0,"ion-button",11),d.TgZ(18,"ion-grid",12),d.TgZ(19,"ion-row"),d.TgZ(20,"ion-col",13),d.TgZ(21,"div",14),d._UZ(22,"img",15),d.qZA(),d.TgZ(23,"div",16),d.NdJ("click",function(){return e.gotoEnvios()}),d._uU(24," venta gu\xecas "),d.qZA(),d.qZA(),d.TgZ(25,"ion-col",13),d.TgZ(26,"div",14),d._UZ(27,"img",17),d.qZA(),d.TgZ(28,"div",18),d._uU(29," notificaciones "),d.qZA(),d.qZA(),d.TgZ(30,"ion-col",19),d.NdJ("click",function(){return e.openOrderStateModal()}),d.TgZ(31,"div",14),d._UZ(32,"img",20),d.qZA(),d.TgZ(33,"div",18),d._uU(34," historial "),d.qZA(),d.qZA(),d.TgZ(35,"ion-col",13),d.TgZ(36,"div",14),d._UZ(37,"img",21),d.qZA(),d.TgZ(38,"div",16),d.NdJ("click",function(){return e.goMyOrders()}),d._uU(39," cupones "),d.qZA(),d.qZA(),d.TgZ(40,"ion-col",13),d.TgZ(41,"div",14),d._UZ(42,"img",22),d.qZA(),d.TgZ(43,"div",18),d._uU(44," favoritos "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(45,"div",23),d.TgZ(46,"ion-row"),d.TgZ(47,"ion-col",24),d.TgZ(48,"div"),d._uU(49," Mis pedidos "),d.qZA(),d.qZA(),d.TgZ(50,"ion-col",25),d.TgZ(51,"div"),d._uU(52," Ver todos "),d.qZA(),d.TgZ(53,"div"),d._UZ(54,"ion-icon",26),d.qZA(),d.qZA(),d.qZA(),d.TgZ(55,"ion-grid",12),d.TgZ(56,"ion-row"),d.TgZ(57,"ion-col",13),d.TgZ(58,"div",14),d._UZ(59,"img",27),d.qZA(),d.TgZ(60,"div",18),d._uU(61," pendiente de pago "),d.qZA(),d.qZA(),d.TgZ(62,"ion-col",13),d.TgZ(63,"div",14),d._UZ(64,"img",28),d.qZA(),d.TgZ(65,"div",16),d.NdJ("click",function(){return e.goMyFavorites()}),d._uU(66," pendiente de envio "),d.qZA(),d.qZA(),d.TgZ(67,"ion-col",13),d.TgZ(68,"div",14),d._UZ(69,"img",29),d.qZA(),d.TgZ(70,"div",18),d._uU(71," enviado "),d.qZA(),d.qZA(),d.TgZ(72,"ion-col",13),d.TgZ(73,"div",14),d._UZ(74,"img",30),d.qZA(),d.TgZ(75,"div",18),d._uU(76," pendiente de valoracion "),d.qZA(),d.qZA(),d.TgZ(77,"ion-col",13),d.TgZ(78,"div",14),d._UZ(79,"img",31),d.qZA(),d.TgZ(80,"div",18),d._uU(81," monedero "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(82,"div",23),d.TgZ(83,"ion-row"),d.TgZ(84,"ion-col",24),d.TgZ(85,"div"),d._uU(86," servicios "),d.qZA(),d.qZA(),d.TgZ(87,"ion-col",32),d.TgZ(88,"div"),d._uU(89," Ver todos "),d.qZA(),d.TgZ(90,"div"),d._UZ(91,"ion-icon",26),d.qZA(),d.qZA(),d.qZA(),d.TgZ(92,"ion-grid",12),d.TgZ(93,"ion-row"),d.TgZ(94,"ion-col",13),d.TgZ(95,"div",14),d._UZ(96,"img",33),d.qZA(),d.TgZ(97,"div",18),d._uU(98," Direccion de entrega "),d.qZA(),d.qZA(),d.TgZ(99,"ion-col",13),d.TgZ(100,"div",14),d._UZ(101,"img",34),d.qZA(),d.TgZ(102,"div",16),d.NdJ("click",function(){return e.goMyFavorites()}),d._uU(103," monedero "),d.qZA(),d.qZA(),d.TgZ(104,"ion-col",13),d.TgZ(105,"div",14),d._UZ(106,"img",35),d.qZA(),d.TgZ(107,"div",18),d._uU(108," centro de ayuda "),d.qZA(),d.qZA(),d.TgZ(109,"ion-col",13),d.TgZ(110,"div",14),d._UZ(111,"img",36),d.qZA(),d.TgZ(112,"div",18),d._uU(113," pregunta y respuesta "),d.qZA(),d.qZA(),d.TgZ(114,"ion-col",13),d.TgZ(115,"div",14),d._UZ(116,"img",37),d.qZA(),d.TgZ(117,"div",18),d._uU(118," sujerencias "),d.qZA(),d.qZA(),d.TgZ(119,"ion-col",19),d.NdJ("click",function(){return e.shippingModal()}),d.TgZ(120,"div",14),d._UZ(121,"img",35),d.qZA(),d.TgZ(122,"div",18),d._uU(123," Direccion de entregado "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(124,"div",23),d.TgZ(125,"ion-grid"),d.TgZ(126,"ion-row"),d.TgZ(127,"ion-col",38),d.TgZ(128,"div"),d._UZ(129,"img",39),d.qZA(),d.TgZ(130,"div",40),d._uU(131," Destacados "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(132,"app-items-list"),d.qZA()),2&i&&(d.xp6(7),d.Q6J("ngIf",null!==e.user),d.xp6(1),d.Q6J("ngIf",null===e.user),d.xp6(3),d.Q6J("ngIf",null!==e.user),d.xp6(1),d.Q6J("ngIf",null===e.user),d.xp6(4),d.Q6J("ngIf",null===e.user),d.xp6(1),d.Q6J("ngIf",null!==e.user))},directives:[s.W2,s.jY,s.Nd,s.wI,t.O5,s.gu,u,s.YG],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-columns:10}#userEmail[_ngcontent-%COMP%], #userName[_ngcontent-%COMP%]{margin-bottom:2px;font-size:20px;color:#838383}"]}),i})()},{path:"shipping-address-model",loadChildren:()=>n.e(159).then(n.bind(n,159)).then(i=>i.ShippingAddressModelPageModule)},{path:"confirmation-popover",loadChildren:()=>n.e(5845).then(n.bind(n,5845)).then(i=>i.ConfirmationPopoverPageModule)},{path:"profile-model",loadChildren:()=>n.e(728).then(n.bind(n,728)).then(i=>i.ProfileModelPageModule)},{path:"order-state",loadChildren:()=>n.e(6268).then(n.bind(n,6268)).then(i=>i.OrderStatePageModule)}];let v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[[r.Bz.forChild(q)],r.Bz]}),i})(),_=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[[t.ez,o.u5,s.Pc,v]]}),i})()},3126:(i,e,n)=>{"use strict";n.d(e,{Z:()=>p});var t=n(4762),o=n(8619),s=n(6611),r=n(7438),g=n(1116),l=n(1462);function a(i,e){1&i&&(o.TgZ(0,"div",12),o._uU(1," Add shipping "),o.qZA())}function c(i,e){1&i&&(o.TgZ(0,"div",12),o._uU(1," Update shipping "),o.qZA())}function d(i,e){if(1&i){const i=o.EpF();o.TgZ(0,"div",13),o.NdJ("click",function(){return o.CHM(i),o.oxw().create()}),o._uU(1," CREATE "),o.qZA()}}function Z(i,e){if(1&i){const i=o.EpF();o.TgZ(0,"div",13),o.NdJ("click",function(){return o.CHM(i),o.oxw().update()}),o._uU(1," UPDATE "),o.qZA()}}let p=(()=>{class i{constructor(i,e,n,t){this.modalController=i,this.shippingSrv=e,this.toastController=n,this.alertCtrl=t,this.action=!1,this.formObj={name:"",address:"",zip:"",user:"",id:""}}ngOnInit(){this.single()}ionViewWillEnter(){this.single()}single(){"new"===this.routeId?this.action=!1:(this.action=!0,this.shippingSrv.getById(this.routeId).subscribe(i=>(0,t.mG)(this,void 0,void 0,function*(){console.log(i),this.formObj.address=i.data.address,this.formObj.name=i.data.name,this.formObj.zip=i.data.zip,this.formObj.id=i.data._id})))}dismiss(){this.modalController.dismiss({dismissed:!0})}presentToast(i){return(0,t.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:i,duration:2e3})).present()})}create(){const i=JSON.parse(localStorage.getItem("user"));this.formObj.user=i._id,""===this.formObj.name||""===this.formObj.address||""===this.formObj.zip?this.presentToast("Please fill all fields"):this.shippingSrv.create(this.formObj).subscribe(i=>(0,t.mG)(this,void 0,void 0,function*(){if("success"===i.message){this.presentToast("Shipping registerd successfully");const i=yield this.alertCtrl.create({header:"Note",message:"You want to go",buttons:[{text:"HOME",role:"cancel",cssClass:"secondary",handler:i=>{this.dismiss()}},{text:"ADD MORE SHIPPING",handler:()=>(0,t.mG)(this,void 0,void 0,function*(){console.log("ok"),this.formObj.name="",this.formObj.address="",this.formObj.zip=""})}]});yield i.present()}else console.log("something went wrong")}))}update(){const i=JSON.parse(localStorage.getItem("user"));this.formObj.user=i._id,""===this.formObj.name||""===this.formObj.address||""===this.formObj.zip?this.presentToast("Please fill all fields"):this.shippingSrv.update(this.formObj).subscribe(i=>(0,t.mG)(this,void 0,void 0,function*(){"success"===i.message?(this.presentToast("Updated successfully"),this.dismiss()):console.log("something went wrong")}))}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(s.IN),o.Y36(r.N),o.Y36(s.yF),o.Y36(s.Br))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-confirmation-popover"]],inputs:{routeId:"routeId"},decls:26,vars:7,consts:[[2,"position","relative"],[2,"position","fixed","top","10px","right","5px","z-index","4",3,"click"],["name","close-circle",2,"font-size","30px","color","#c6c5c5"],[2,"padding","20px 10px"],["style","text-align: center;",4,"ngIf"],[2,"margin-top","20px"],["size","3",2,"display","flex","align-items","center"],["type","text","name","name","placeholder","NAME",2,"width","100%",3,"ngModel","ngModelChange"],[2,"margin-top","10px"],["type","text","name","address","placeholder","ADDRESS",2,"width","100%",3,"ngModel","ngModelChange"],["type","number","name","zip","placeholder","ZIP CODE",2,"width","100%",3,"ngModel","ngModelChange"],["id","checkButton",3,"click",4,"ngIf"],[2,"text-align","center"],["id","checkButton",3,"click"]],template:function(i,e){1&i&&(o.TgZ(0,"ion-content",0),o.TgZ(1,"div",1),o.NdJ("click",function(){return e.dismiss()}),o._UZ(2,"ion-icon",2),o.qZA(),o.TgZ(3,"div",3),o.YNc(4,a,2,0,"div",4),o.YNc(5,c,2,0,"div",4),o.TgZ(6,"ion-row",5),o.TgZ(7,"ion-col",6),o.TgZ(8,"div"),o._uU(9,"NAME"),o.qZA(),o.qZA(),o.TgZ(10,"ion-col"),o.TgZ(11,"input",7),o.NdJ("ngModelChange",function(i){return e.formObj.name=i}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"ion-row",8),o.TgZ(13,"ion-col",6),o.TgZ(14,"div"),o._uU(15,"ADDRE"),o.qZA(),o.qZA(),o.TgZ(16,"ion-col"),o.TgZ(17,"input",9),o.NdJ("ngModelChange",function(i){return e.formObj.address=i}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"ion-row",8),o.TgZ(19,"ion-col",6),o.TgZ(20,"div"),o._uU(21,"ZIP"),o.qZA(),o.qZA(),o.TgZ(22,"ion-col"),o.TgZ(23,"input",10),o.NdJ("ngModelChange",function(i){return e.formObj.zip=i}),o.qZA(),o.qZA(),o.qZA(),o.YNc(24,d,2,0,"div",11),o.YNc(25,Z,2,0,"div",11),o.qZA(),o.qZA()),2&i&&(o.xp6(4),o.Q6J("ngIf",!e.action),o.xp6(1),o.Q6J("ngIf",e.action),o.xp6(6),o.Q6J("ngModel",e.formObj.name),o.xp6(6),o.Q6J("ngModel",e.formObj.address),o.xp6(6),o.Q6J("ngModel",e.formObj.zip),o.xp6(1),o.Q6J("ngIf",!e.action),o.xp6(1),o.Q6J("ngIf",e.action))},directives:[s.W2,s.gu,g.O5,s.Nd,s.wI,l.Fj,l.JJ,l.On,l.wV],styles:["input[_ngcontent-%COMP%]{border:none}input[_ngcontent-%COMP%]:focus{outline:none}#checkButton[_ngcontent-%COMP%]{margin-top:15px;border-radius:5px;background:#df2626;color:#fff;display:flex;align-items:center;height:40px;justify-content:center}"]}),i})()},911:(i,e,n)=>{"use strict";n.d(e,{i:()=>s});var t=n(8619),o=n(6611);let s=(()=>{class i{constructor(i){this.modalController=i}ngOnInit(){}dismiss(){this.modalController.dismiss({dismissed:!0})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.IN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-order-state"]],decls:139,vars:1,consts:[[1,"color-header",2,"position","relative",3,"translucent"],["name","chevron-back-outline",2,"position","absolute","top","8px","font-size","30px",3,"click"],[2,"margin-left","40px","display","flex","justify-content","flex-start","align-items","center","height","100%"],["name","cart-outline",2,"position","absolute","top","8px","right","10px","font-size","30px"],[2,"background","#e8f1fa","border-radius","5px","padding","8px"],["size","2"],["src","assets/homePage/item-two/1.png",2,"border-radius","5px"],[2,"margin-top","5px","font-size","14px"],[2,"margin-top","5px","font-size","14px","color","#3099ff"],[2,"font-size","14px","line-height","25px","margin-top","10px"],["size","4",2,"color","grey"],[2,"color","#3099ff"],[2,"margin-top","10px"],[2,"font-size","20px","font-weight","bold"],[2,"font-size","14px","margin-top","10px","color","#20af3b","font-weight","bold"],[2,"margin-top","15px"],[2,"display","flex","align-items","center","justify-content","center"],["name","checkmark-circle",2,"display","block","color","#20af3b","font-size","30px"],[2,"height","2px","width","85px","background","#20af3b","margin","0px","display","block"],["name","ellipse-outline",2,"display","block","color","#20af3b","font-size","30px"],[2,"margin-top","5px","font-size","14px","display","flex","align-items","center","justify-content","space-around","text-align","center"],[2,"width","65px"],[2,"padding","5px","border-radius","5px","border","1px solid #dedddd","width","100%","display","flex","align-items","center"],[2,"display","flex"],["src","assets/homePage/item-two/1.png",2,"border-radius","5px","width","60px","display","block"],[2,"margin-left","10px","font-size","14px"],[2,"font-size","14px","margin-top","10px"],[2,"background","#e3e2e2","height","1px"],[2,"font-size","14px","margin-top","10px","display","flex","justify-content","space-between"],["src","assets/about-me/visa.png",2,"width","45px","height","30px","display","block"],[2,"margin-left","10px"],[2,"font-size","12px"],[2,"font-size","12px","color","grey"],[2,"color","gray"],[2,"font-size","14px","margin-top","5px","display","flex","justify-content","space-between"],[2,"background","#dedcdc","height","1px","width","100px","margin-right","0px"],[2,"font-size","16px","margin-top","5px","display","flex","justify-content","space-between"],[2,"background","#eae9e9","height","1px"],[2,"margin-bottom","20px"],[2,"font-size","14px","color","#3099ff","margin-top","10px"]],template:function(i,e){1&i&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-icon",1),t.NdJ("click",function(){return e.dismiss()}),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"b"),t._uU(5,"Order Details"),t.qZA(),t.qZA(),t.qZA(),t._UZ(6,"ion-icon",3),t.qZA(),t.TgZ(7,"ion-content"),t.TgZ(8,"ion-grid"),t.TgZ(9,"ion-row",4),t.TgZ(10,"ion-col",5),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"ion-col"),t.TgZ(13,"div"),t.TgZ(14,"b"),t._uU(15,"It's on the way."),t.qZA(),t.qZA(),t.TgZ(16,"div",7),t._uU(17,"Arriving tomorrow"),t.qZA(),t.TgZ(18,"div",8),t._uU(19,"Track package"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"ion-row",9),t.TgZ(21,"ion-col",10),t.TgZ(22,"div"),t._uU(23," Time placed "),t.qZA(),t.TgZ(24,"div"),t._uU(25," Order Number "),t.qZA(),t.TgZ(26,"div"),t._uU(27," Total "),t.qZA(),t.TgZ(28,"div"),t._uU(29," Sold By "),t.qZA(),t.qZA(),t.TgZ(30,"ion-col"),t.TgZ(31,"div"),t._uU(32," 2 ago, 2021 at 9.55 "),t.qZA(),t.TgZ(33,"div"),t._uU(34," 20-321321-321-321- "),t.qZA(),t.TgZ(35,"div"),t._uU(36," USD205.68 (1 item) "),t.qZA(),t.TgZ(37,"div",11),t._uU(38," eftnetwork "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"ion-row",12),t.TgZ(40,"ion-col"),t.TgZ(41,"div",13),t._uU(42,"Delivery info"),t.qZA(),t.TgZ(43,"div",14),t._uU(44,"Arriving by viernes, 6 de ago. de 2021"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"ion-row",15),t.TgZ(46,"ion-col"),t.TgZ(47,"div",16),t._UZ(48,"ion-icon",17),t._UZ(49,"hr",18),t._UZ(50,"ion-icon",17),t._UZ(51,"hr",18),t._UZ(52,"ion-icon",19),t.qZA(),t.TgZ(53,"div",20),t.TgZ(54,"div",21),t._uU(55,"Paid "),t._UZ(56,"br"),t._uU(57," 3 ago."),t.qZA(),t.TgZ(58,"div",21),t._uU(59,"Shipped "),t._UZ(60,"br"),t._uU(61," 3 ago."),t.qZA(),t.TgZ(62,"div",21),t.TgZ(63,"b"),t._uU(64,"Delivered"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(65,"ion-row",12),t.TgZ(66,"ion-col"),t.TgZ(67,"div",22),t.TgZ(68,"div",23),t._UZ(69,"img",24),t.TgZ(70,"div",25),t._uU(71," APPLE 2021 MAC MINI A1347"),t._UZ(72,"br"),t._uU(73,"2.3GHz 16GB RAM "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"ion-row",12),t.TgZ(75,"ion-col"),t.TgZ(76,"div",13),t._uU(77,"Shipping address"),t.qZA(),t.TgZ(78,"div",26),t._uU(79," indigo Power "),t._UZ(80,"br"),t._uU(81," 7917 McPherson ED STE fsdgfdsg gf sgfds fdg"),t._UZ(82,"br"),t._uU(83," Santos"),t._UZ(84,"br"),t._uU(85," Laredo, TExas"),t._UZ(86,"br"),t._uU(87," Estados Unidos "),t.qZA(),t.qZA(),t.qZA(),t._UZ(88,"hr",27),t.TgZ(89,"ion-row",12),t.TgZ(90,"ion-col"),t.TgZ(91,"div",13),t._uU(92,"Payment Info"),t.qZA(),t.TgZ(93,"div",28),t.TgZ(94,"div",23),t._UZ(95,"img",29),t.TgZ(96,"div",30),t._uU(97," Ending in 2686 "),t._UZ(98,"br"),t.TgZ(99,"span",31),t._uU(100,"indigo power"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(101,"div"),t._uU(102," USD 205.68"),t._UZ(103,"br"),t.TgZ(104,"span",32),t._uU(105,"3 ago, at 0:09"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(106,"hr",27),t.TgZ(107,"ion-row"),t.TgZ(108,"ion-col"),t.TgZ(109,"div",13),t._uU(110,"Payment Info"),t.qZA(),t.TgZ(111,"div",28),t.TgZ(112,"div",33),t._uU(113," 1 item "),t.qZA(),t.TgZ(114,"div"),t._uU(115," USD 205.68 "),t.qZA(),t.qZA(),t.TgZ(116,"div",34),t.TgZ(117,"div",33),t._uU(118," Shipping "),t.qZA(),t.TgZ(119,"div"),t._uU(120," USD 205.68 "),t.qZA(),t.qZA(),t.TgZ(121,"div",34),t.TgZ(122,"div",33),t._uU(123," Tax "),t.qZA(),t.TgZ(124,"div"),t._uU(125," USD 205.68 "),t.qZA(),t.qZA(),t._UZ(126,"hr",35),t.TgZ(127,"div",36),t.TgZ(128,"div",33),t._uU(129," Order total "),t.qZA(),t.TgZ(130,"div"),t._uU(131," USD 205.68 "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(132,"hr",37),t.TgZ(133,"ion-row",38),t.TgZ(134,"ion-col"),t.TgZ(135,"div",13),t._uU(136,"More Actions"),t.qZA(),t.TgZ(137,"div",39),t._uU(138,"Tell us what you think"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&t.Q6J("translucent",!0)},directives:[o.Gu,o.gu,o.W2,o.jY,o.Nd,o.wI],styles:[".color-header[_ngcontent-%COMP%]{height:45px}"]}),i})()},198:(i,e,n)=>{"use strict";n.d(e,{q:()=>r});var t=n(8619),o=n(6611),s=n(5860);let r=(()=>{class i{constructor(i,e){this.modalController=i,this.router=e}ngOnInit(){}dismiss(){this.modalController.dismiss({dismissed:!0})}gotoSesion(){this.router.navigate(["presentation"])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.IN),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-profile-model"]],decls:68,vars:0,consts:[["mode","ios"],["slot","start",3,"click"],["name","chevron-back-outline",2,"font-size","30px"],["lines","full",1,"ion-no-margin"],["lines","none"],["slot","end"],["src","assets/chat/chatList/1.png"],["name","chevron-forward-outline"],["value","F"],["value","M"],["value","Mexico"],["value","Brasil"],["value","1990-02-19","placeholder","Select Date"],["placeholder","Sin llenar","maxlength","10","inputmode","tel"],["name","call-outline"],[2,"border-top","8px solid #f6f3f3"],["name","qr-code",2,"color","grey","margin-left","5px","display","block"]],template:function(i,e){1&i&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",1),t.NdJ("click",function(){return e.dismiss()}),t._UZ(3,"ion-icon",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Configuraci\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-content"),t.TgZ(7,"ion-list",3),t.TgZ(8,"ion-item",4),t.TgZ(9,"ion-avatar",5),t._UZ(10,"img",6),t.qZA(),t.TgZ(11,"ion-label"),t._uU(12,"Foto de perfil "),t.qZA(),t.qZA(),t.TgZ(13,"ion-item",4),t.TgZ(14,"ion-label"),t._uU(15,"Nombre"),t.qZA(),t._uU(16," Indigo import agency \u2764 "),t._UZ(17,"ion-icon",7),t.qZA(),t.TgZ(18,"ion-item"),t.TgZ(19,"ion-label"),t._uU(20,"ID topmai"),t.qZA(),t._uU(21," 12345678 "),t._UZ(22,"ion-icon",7),t.qZA(),t.TgZ(23,"ion-item"),t.TgZ(24,"ion-label"),t._uU(25,"Genero"),t.qZA(),t.TgZ(26,"ion-select",8),t.TgZ(27,"ion-select-option",9),t._uU(28,"Masculino"),t.qZA(),t.TgZ(29,"ion-select-option",8),t._uU(30,"Femenino"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"ion-item"),t.TgZ(32,"ion-label"),t._uU(33,"Zona"),t.qZA(),t.TgZ(34,"ion-select",10),t.TgZ(35,"ion-select-option",10),t._uU(36,"M\xe9xico"),t.qZA(),t.TgZ(37,"ion-select-option",11),t._uU(38,"Brasil"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"ion-item"),t.TgZ(40,"ion-label"),t._uU(41,"Cumplea\xf1os"),t.qZA(),t._UZ(42,"ion-datetime",12),t.qZA(),t.TgZ(43,"ion-item",4),t.TgZ(44,"ion-label"),t._uU(45,"Vincular Tel\xe9fono"),t.qZA(),t._UZ(46,"ion-input",13),t._UZ(47,"ion-icon",14),t.qZA(),t._UZ(48,"hr",15),t.TgZ(49,"ion-item"),t.TgZ(50,"ion-label"),t._uU(51,"C\xf3digo Qr"),t.qZA(),t._UZ(52,"ion-icon",16),t._UZ(53,"ion-icon",7),t.qZA(),t.TgZ(54,"ion-item"),t.TgZ(55,"ion-label"),t._uU(56,"Mi medalla"),t.qZA(),t._UZ(57,"ion-icon",7),t.qZA(),t.TgZ(58,"ion-item",4),t.TgZ(59,"ion-label"),t._uU(60,"Asistente de facturas"),t.qZA(),t._UZ(61,"ion-icon",7),t.qZA(),t._UZ(62,"hr",15),t.TgZ(63,"ion-item",4),t.TgZ(64,"ion-label"),t._uU(65,"Verificado"),t.qZA(),t._uU(66," No verificado "),t._UZ(67,"ion-icon",7),t.qZA(),t.qZA(),t.qZA())},directives:[o.Gu,o.sr,o.Sm,o.gu,o.wd,o.W2,o.q_,o.Ie,o.BJ,o.Q$,o.t9,o.QI,o.n0,o.x4,o.pK,o.j9],styles:[".color-header[_ngcontent-%COMP%]{height:40px}ion-header[_ngcontent-%COMP%]:after{background-image:none}ion-col[_ngcontent-%COMP%]{padding:10px 5px}"]}),i})()},7325:(i,e,n)=>{"use strict";n.d(e,{J:()=>Z});var t=n(4762),o=n(3126),s=n(8619),r=n(6611),g=n(7438),l=n(1116);function a(i,e){if(1&i){const i=s.EpF();s.TgZ(0,"ion-row",8),s.TgZ(1,"ion-col"),s.TgZ(2,"div",9),s._uU(3),s.TgZ(4,"span"),s.TgZ(5,"ion-icon",10),s.NdJ("click",function(){const e=s.CHM(i).$implicit;return s.oxw(2).delete(null==e?null:e._id)}),s.qZA(),s.TgZ(6,"ion-icon",11),s.NdJ("click",function(){const e=s.CHM(i).$implicit;return s.oxw(2).presentModal(null==e?null:e._id)}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"div",12),s._uU(8),s.qZA(),s.TgZ(9,"div",13),s.TgZ(10,"div",14),s._UZ(11,"ion-icon",15),s._uU(12," Zip Code "),s.qZA(),s.TgZ(13,"div",16),s.TgZ(14,"div",17),s._uU(15),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&i){const i=e.$implicit;s.xp6(3),s.hij(" ",null==i?null:i.name," "),s.xp6(5),s.hij(" ",null==i?null:i.address," "),s.xp6(7),s.hij(" ",null==i?null:i.zip," ")}}function c(i,e){if(1&i&&(s.TgZ(0,"ion-grid"),s.YNc(1,a,16,3,"ion-row",7),s.qZA()),2&i){const i=s.oxw();s.xp6(1),s.Q6J("ngForOf",i.shippings)}}function d(i,e){1&i&&(s.TgZ(0,"ion-grid"),s.TgZ(1,"ion-row"),s.TgZ(2,"ion-col",18),s.TgZ(3,"p",19),s._uU(4,"Your Shipping is Empty!"),s.qZA(),s.qZA(),s.TgZ(5,"ion-col"),s._UZ(6,"img",20),s.qZA(),s.qZA(),s.qZA())}let Z=(()=>{class i{constructor(i,e,n,t){this.modalController=i,this.shiipingSrv=e,this.alertCtrl=n,this.toastController=t}ngOnInit(){this.getAll()}getAll(){this.user=JSON.parse(localStorage.getItem("user")),this.shiipingSrv.getAllByuser(this.user._id).subscribe(i=>{this.shippings=i.data})}presentToast(i){return(0,t.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:i,duration:2e3})).present()})}dismiss(){this.modalController.dismiss({dismissed:!0})}presentModal(i){return(0,t.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:o.Z,cssClass:"my-model-class",componentProps:{routeId:i}});return yield e.present()})}ionViewWillEnter(){this.getAll()}delete(i){return(0,t.mG)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({header:"Are you sure",message:"You want to delete it",buttons:[{text:"NO",role:"cancel",cssClass:"secondary",handler:i=>{this.dismiss()}},{text:"Yes",handler:()=>(0,t.mG)(this,void 0,void 0,function*(){this.shiipingSrv.delete(i).subscribe(i=>{"success"===i.message&&(this.presentToast("Delete successfully"),this.getAll())})})}]});yield e.present()})}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(r.IN),s.Y36(g.N),s.Y36(r.Br),s.Y36(r.yF))},i.\u0275cmp=s.Xpm({type:i,selectors:[["app-shipping-address-model"]],decls:12,vars:3,consts:[[1,"color-header",2,"position","relative",3,"translucent"],["name","chevron-back-outline",2,"position","absolute","top","4px","font-size","30px",3,"click"],[2,"display","flex","justify-content","center","align-items","center","height","100%","font-size","20px"],[4,"ngIf"],[2,"margin-top","15px","padding","10px"],[2,"border-radius","5px","background","#df2b26","color","#FFFFFF","display","flex","align-items","center","height","40px","justify-content","center",3,"click"],["name","add-circle",2,"display","block","margin-right","5px"],["style","background: #FFFFFF; font-size: 15px; margin: 10px 0px;",4,"ngFor","ngForOf"],[2,"background","#FFFFFF","font-size","15px","margin","10px 0px"],["id","name"],["name","trash-outline",1,"actionIcon",3,"click"],["name","create-outline",1,"actionIcon",3,"click"],["id","address"],[2,"color","grey","display","flex","justify-content","space-between","margin-top","15px"],[2,"display","flex","align-items","center"],["name","ellipse-outline",2,"display","block","margin-right","5px"],[2,"display","flex"],[2,"margin-right","10px"],["size","12"],["id","EmptyShipping"],["src","../../../assets/shipping.png","alt",""]],template:function(i,e){1&i&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-icon",1),s.NdJ("click",function(){return e.dismiss()}),s.qZA(),s.TgZ(2,"div",2),s.TgZ(3,"div"),s._uU(4," Shipping address "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(5,"ion-content"),s.YNc(6,c,2,1,"ion-grid",3),s.YNc(7,d,7,0,"ion-grid",3),s.TgZ(8,"div",4),s.TgZ(9,"div",5),s.NdJ("click",function(){return e.presentModal("new")}),s._UZ(10,"ion-icon",6),s._uU(11," CLICK THIS "),s.qZA(),s.qZA(),s.qZA()),2&i&&(s.Q6J("translucent",!0),s.xp6(6),s.Q6J("ngIf",(null==e.shippings?null:e.shippings.length)>0),s.xp6(1),s.Q6J("ngIf",(null==e.shippings?null:e.shippings.length)<1))},directives:[r.Gu,r.gu,r.W2,l.O5,r.jY,l.sg,r.Nd,r.wI],styles:[".color-header[_ngcontent-%COMP%]{height:40px}ion-content[_ngcontent-%COMP%]{--ion-background-color:#efeeee}div[_ngcontent-%COMP%]{line-height:22px}#EmptyShipping[_ngcontent-%COMP%]{margin:40px auto;display:block;text-align:center;font-size:25px}#name[_ngcontent-%COMP%]{font-size:20px}#address[_ngcontent-%COMP%], #name[_ngcontent-%COMP%]{padding:5px 10px}#address[_ngcontent-%COMP%]{font-size:16px;color:#818181}.actionIcon[_ngcontent-%COMP%]{float:right;padding:0 5px}"]}),i})()}}]);