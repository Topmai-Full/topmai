(self.webpackChunktopmai=self.webpackChunktopmai||[]).push([[2554],{2554:(o,n,e)=>{"use strict";e.r(n),e.d(n,{OrderWizardPageModule:()=>g});var i=e(1116),t=e(1462),r=e(6611),a=e(5860),Z=e(8619);const c=[{path:"",component:(()=>{class o{constructor(o,n){this.location=o,this.router=n}ngOnInit(){}goBack(){this.location.back()}gotoFormPaquete(){this.router.navigate(["form-paquete"])}}return o.\u0275fac=function(n){return new(n||o)(Z.Y36(i.Ye),Z.Y36(a.F0))},o.\u0275cmp=Z.Xpm({type:o,selectors:[["app-order-wizard"]],decls:129,vars:1,consts:[[1,"color-header",3,"translucent"],[2,"height","50px"],["size","1"],["name","chevron-back-outline",2,"font-size","30px","color","white","margin","0px 5px",3,"click"],[1,"font-mai",2,"color","#fff","margin-top","7px","font-size","1.5rem","margin-left","10px"],["size","3"],["src","assets/homePage/scanIcon.png",2,"width","25px"],["name","ellipsis-vertical",2,"color","white","font-size","25px","margin-left","10px"],[2,"background","#f5f4f4","margin","25px","padding","20px 15px"],[2,"font-weight","bold"],["rows","6","cols","20","placeholder","Pega la direcci\xf3n completa de env\xedo y distribuye la informaci\xf3n"],[1,"form-input"],["value","volvo"],["value","saab"],["value","audi"],["value","fiat"],["placeholder","Nombre de la persona",1,"form-input"],["placeholder","Compania (Opcional)",1,"form-input"],["placeholder","Correo electronico (Opcional)",1,"form-input"],["placeholder","Telefono (10 digitos)",1,"form-input"],["placeholder","Codigo postal",1,"form-input"],["placeholder","Direccion 1",1,"form-input"],["placeholder","Direccion 2",1,"form-input"],["placeholder","Ciudad",1,"form-input"],[2,"margin-bottom","0px"],["type","checkbox","id","form-one","name","form-one","placeholder","Estado"],["for","form-one",1,"checkbox-text"],["placeholder","Buscar en libreta de direcciones",1,"form-input"],["placeholder","Calle y numero",1,"form-input"],["placeholder","Referencias",1,"form-input"],["placeholder","Contenido del paquete (obligatorio)",1,"form-input"],["type","checkbox","id","fill-form-one","name","form-one","placeholder","Estado"],["for","fill-form-one",1,"checkbox-text"],[3,"click"]],template:function(o,n){1&o&&(Z.TgZ(0,"ion-header",0),Z.TgZ(1,"ion-grid",1),Z.TgZ(2,"ion-row"),Z.TgZ(3,"ion-col",2),Z.TgZ(4,"ion-icon",3),Z.NdJ("click",function(){return n.goBack()}),Z.qZA(),Z.qZA(),Z.TgZ(5,"ion-col",4),Z._uU(6," topmai env\xedo "),Z.qZA(),Z.TgZ(7,"ion-col",5),Z._UZ(8,"img",6),Z._UZ(9,"ion-icon",7),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(10,"ion-content"),Z.TgZ(11,"ion-grid",8),Z.TgZ(12,"ion-row",9),Z._uU(13," Copia y Pega "),Z.qZA(),Z.TgZ(14,"ion-item"),Z._UZ(15,"ion-textarea",10),Z.qZA(),Z.qZA(),Z.TgZ(16,"ion-grid",8),Z.TgZ(17,"ion-row",9),Z._uU(18," Direccion de origen "),Z.qZA(),Z.TgZ(19,"ion-row"),Z.TgZ(20,"select",11),Z.TgZ(21,"option",12),Z._uU(22,"Buscar en libreta de direcciones"),Z.qZA(),Z.TgZ(23,"option",13),Z._uU(24,"Mexica"),Z.qZA(),Z.TgZ(25,"option",14),Z._uU(26,"Brazil"),Z.qZA(),Z.TgZ(27,"option",15),Z._uU(28,"Canada"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"ion-row"),Z._UZ(30,"input",16),Z.qZA(),Z.TgZ(31,"ion-row"),Z._UZ(32,"input",17),Z.qZA(),Z.TgZ(33,"ion-row"),Z._UZ(34,"input",18),Z.qZA(),Z.TgZ(35,"ion-row"),Z._UZ(36,"input",19),Z.qZA(),Z.TgZ(37,"ion-row"),Z.TgZ(38,"select",11),Z.TgZ(39,"option",12),Z._uU(40,"Selecciona un pais"),Z.qZA(),Z.TgZ(41,"option",13),Z._uU(42,"Mexica"),Z.qZA(),Z.TgZ(43,"option",14),Z._uU(44,"Brazil"),Z.qZA(),Z.TgZ(45,"option",15),Z._uU(46,"Canada"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(47,"ion-row"),Z._UZ(48,"input",20),Z.qZA(),Z.TgZ(49,"ion-row"),Z._UZ(50,"input",21),Z.qZA(),Z.TgZ(51,"ion-row"),Z._UZ(52,"input",22),Z.qZA(),Z.TgZ(53,"ion-row"),Z._UZ(54,"input",23),Z.qZA(),Z.TgZ(55,"ion-row"),Z.TgZ(56,"select",11),Z.TgZ(57,"option",12),Z._uU(58,"Selecciona un estado"),Z.qZA(),Z.TgZ(59,"option",13),Z._uU(60,"Mexica"),Z.qZA(),Z.TgZ(61,"option",14),Z._uU(62,"Brazil"),Z.qZA(),Z.TgZ(63,"option",15),Z._uU(64,"Canada"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(65,"ion-row",24),Z._UZ(66,"input",25),Z.TgZ(67,"label",26),Z._uU(68,"Agregar a mi libreta de direcciones"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(69,"ion-grid",8),Z.TgZ(70,"ion-row",9),Z._uU(71," Direccion de destino "),Z.qZA(),Z.TgZ(72,"ion-row"),Z._UZ(73,"input",27),Z.qZA(),Z.TgZ(74,"ion-row"),Z._UZ(75,"input",16),Z.qZA(),Z.TgZ(76,"ion-row"),Z._UZ(77,"input",17),Z.qZA(),Z.TgZ(78,"ion-row"),Z._UZ(79,"input",18),Z.qZA(),Z.TgZ(80,"ion-row"),Z._UZ(81,"input",19),Z.qZA(),Z.TgZ(82,"ion-row"),Z.TgZ(83,"select",11),Z.TgZ(84,"option",12),Z._uU(85,"Selecciona un pais"),Z.qZA(),Z.TgZ(86,"option",13),Z._uU(87,"Saab"),Z.qZA(),Z.TgZ(88,"option",15),Z._uU(89,"Fiat"),Z.qZA(),Z.TgZ(90,"option",14),Z._uU(91,"Audi"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(92,"ion-row"),Z._UZ(93,"input",20),Z.qZA(),Z.TgZ(94,"ion-row"),Z._UZ(95,"input",28),Z.qZA(),Z.TgZ(96,"ion-row"),Z.TgZ(97,"select",11),Z.TgZ(98,"option",12),Z._uU(99,"Selecciona un Colonia"),Z.qZA(),Z.TgZ(100,"option",13),Z._uU(101,"Saab"),Z.qZA(),Z.TgZ(102,"option",15),Z._uU(103,"Fiat"),Z.qZA(),Z.TgZ(104,"option",14),Z._uU(105,"Audi"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(106,"ion-row"),Z._UZ(107,"input",23),Z.qZA(),Z.TgZ(108,"ion-row"),Z.TgZ(109,"select",11),Z.TgZ(110,"option",12),Z._uU(111,"Selecciona un estado"),Z.qZA(),Z.TgZ(112,"option",13),Z._uU(113,"Saab"),Z.qZA(),Z.TgZ(114,"option",15),Z._uU(115,"Fiat"),Z.qZA(),Z.TgZ(116,"option",14),Z._uU(117,"Audi"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(118,"ion-row"),Z._UZ(119,"input",29),Z.qZA(),Z.TgZ(120,"ion-row"),Z._UZ(121,"input",30),Z.qZA(),Z.TgZ(122,"ion-row"),Z._UZ(123,"input",31),Z.TgZ(124,"label",32),Z._uU(125,"Agregar a mi libreta de direcciones"),Z.qZA(),Z.qZA(),Z.TgZ(126,"ion-row",24),Z.TgZ(127,"button",33),Z.NdJ("click",function(){return n.gotoFormPaquete()}),Z._uU(128," Guardar y continuar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&o&&Z.Q6J("translucent",!0)},directives:[r.Gu,r.jY,r.Nd,r.wI,r.gu,r.W2,r.Ie,r.g2,r.j9,t.YN,t.Kr],styles:[".form-input[_ngcontent-%COMP%]{width:100%;height:34px;border-radius:5px;border:1px solid #bdbcbc;padding-left:10px;color:#444}.form-input[_ngcontent-%COMP%]:focus{outline:none;border:1px solid #1b97f5;box-shadow:0 0 10px #9ecaed}ion-row[_ngcontent-%COMP%]{margin-bottom:18px}input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.2);margin-right:7px;margin-top:2px}.checkbox-text[_ngcontent-%COMP%]{font-size:15px;display:block}button[_ngcontent-%COMP%]{border-radius:5px;color:#fff;background:#49ad3c;height:34px;width:100%}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#039be5 0,#039be5)}.topchat-title[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem}.sc-ion-searchbar-md-h[_ngcontent-%COMP%]{--border-radius:20px!important}.color-header[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#fb0f3a 0,#fb0f3a)}.font-mai[_ngcontent-%COMP%]{font-family:Arista}"]}),o})()},{path:"form-paquete",loadChildren:()=>e.e(4883).then(e.bind(e,4883)).then(o=>o.FormPaquetePageModule)},{path:"form-paqueterias",loadChildren:()=>e.e(9195).then(e.bind(e,9195)).then(o=>o.FormPaqueteriasPageModule)}];let p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=Z.oAB({type:o}),o.\u0275inj=Z.cJS({imports:[[a.Bz.forChild(c)],a.Bz]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=Z.oAB({type:o}),o.\u0275inj=Z.cJS({imports:[[i.ez,t.u5,r.Pc,p]]}),o})()}}]);