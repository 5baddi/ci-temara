var xmlHttp1;
 function LoadXHR()
 {
	try{
		var xhr = new XMLHttpRequest();
	}
	catch(e){
		try{
			var xhr = new ActiveXObject('Msxml2.XMLHTTP');
		}
		catch(e){
			try{
				var xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}
			catch(e){
				var xhr = null;
			}
		}
	}
	return xhr
}


function Getuser()
{
return document.form.users.value;
}
function Getnom_tr()
{
return document.form.txtnomtr.value;
}
function Getdesc_tr()
{
return document.form.txtdesctr.value;
}
function Getcreer_tr()
{
return document.form.creer.value;
}
function Getrs()
{
//alert (document.form.users.value);
return document.form.routesection.value;
}
function Getdpet()
{
//alert (document.form.users.value);
return document.form.dpet.value;
}

function GetPr()
{
//alert (document.form.users.value);
return document.form.province.value;
}
function Getdret()
{
//alert (document.form.users.value);
return document.form.dret.value;
}
function Getrmi()
{
//alert (document.form.users.value);
return document.form.region.value;
}
function Getsection()
{
//alert (document.form.users.value);
return document.form.section.value;
}
function Getnoeud()
{
//alert (document.form.users.value);
return document.form.noeud.value;
}
function Getiddret()
{
//alert (document.form.users.value);
return document.form.dret.value;
}
function GetR()
{
//alert (document.form.users.value);
return document.form.users.value;
}
/* function AFF_PK_XY()
{
//alert (document.form.users.value);
return document.form.PKXY.value;
} */
function getmoins(){
return "moins";
}
function getplus(){
return "plus";
}
function normal()
{
return "normal" ;
}

function Getdpetmod()
{
//alert (document.form.users.value);
return document.form.dpetmod.value;
}
function Getprovmod()
{
//alert (document.form.users.value);
return document.form.prov.value;
}
function Getpkd()
{
//alert (document.form.users.value);
return document.form.PKDGENERER.value;
}
function Getpkf()
{
//alert (document.form.users.value);
return document.form.PKFGENERER.value;
}
function Getrt()
{
//alert (document.form.users.value);
return document.form.rout.value;
}

function listeActualisee00() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("connectes").innerHTML=xmlHttp1.responseText;
 } 
}

function listeActualiseedret() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("dpet_dret").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseeprov_TRF2() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("prov_dpet").innerHTML=xmlHttp1.responseText;
 } 
}

function listeActualiseeprov_agg() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("prov_dpet").innerHTML=xmlHttp1.responseText;
 } 
}

function listeActualiseerout_agg() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("rout_prov").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseedret_TRF2() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("dpet_dret").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseedret_agg() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("dpet_dret").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseRT_AGSU() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("AGSU").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseRT_AG_SU() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("xx").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseedpet() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("dpet").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseeroute() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("route").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseepk() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("pk").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseeprovince() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("province").innerHTML=xmlHttp1.responseText;
 } 
}
function Getpkchecked()
{
	pk_cohee="oui";
	return pk_cohee;
}
function Getprovchecked()
{
if (form.province.checked) {
		prov_cohee="oui";
	} else {
		prov_cohee = "non";
	}
	return prov_cohee;
}
function sipk_checked() {
	if (form.PK.checked) {
						
						generer(Getuser(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
	else if(!form.PK.checked)	{
						generer(Getuser(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
}
function siprov_checked() {
	if (form.province.checked) {
						generer(Getuser(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
	else if(!form.province.checked)	{
						generer(Getuser(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
}
function siprov_checked2() {
	if (form.province.checked) {
						generer(Getrt(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
	else if(!form.province.checked)	{
						generer(Getrt(),Getpkd(),Getpkf(),normal(),Getprovchecked(),Getpkchecked(),GetZM());
						}
}
function GetZM()
{
return document.form.valzomm.value;
}
function generer(route,pkd,pkf,plus_moins,prov_cohee,pk_cohee,valZom)
{
		xmlHttp1=LoadXHR();	
	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		
	// alert("prov_cohee ="+prov_cohee);
	// alert("pk_cohee ="+pk_cohee);
	
	pkf=parseInt(pkf,10);
	pkd=parseInt(pkd,10);
	diff_pkd_pkf=parseInt(pkf,10)-parseInt(pkd,10);
	if ( diff_pkd_pkf <=0){
				alert("attention!!!!!! PKF doit etre superieur au PKD ");
				}
	else{
			
			document.getElementById("connectes1").className="tumevois";
			document.getElementById("connectes").innerHTML="<img src='../images/ajax-loader.gif'>"; 
			var url="../consultation/generer?routeG="+route+"&pkdG="+pkd+"&pkfG="+pkf+"&prov_cohee="+prov_cohee+"&pk_cohee="+pk_cohee+"&plus_moins="+plus_moins+"&valZom="+valZom+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualisee00;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
			//alert("fffffffffffffff");
		}
	
}

function supprimer_Rt_NS(routeNS)
{
//alert(routeAG);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			
			var url="../NATURE_SECTION/suppression_RNS_db?routeNS="+routeNS+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseRT_AGSU;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
function supprimer_Rt_Agg(routeAG)
{
alert(routeAG);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			
			var url="../AGGLOMERATION/suppression_agglo_db?routeAG="+routeAG+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseRT_AGSU;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
function route_AG_SUP(route)
{
//alert(route);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			
			var url="../AGGLOMERATION/suppression_agglo?route="+route+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseRT_AG_SU;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
	function route_NS_SUP(route)
{
//alert(route);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			
			var url="../NATURE_SECTION/suppression_RNS?route="+route+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseRT_AG_SU;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
	
function chargerdpet(dret)
{
//alert (dret);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			document.getElementById('dpet').innerHTML = '';
			var url="../consultation/get_dpet_consultation?dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseedpet;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
	
function chargerdpet_mod(dret)
{
//alert (dret);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			document.getElementById('dpet').innerHTML = '';
			var url="../consultation/get_dpet_modification?dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseedpet;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}	
	function chargerprovince(dpet,dret)
{
/* alert (dpet);*/
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		
			var url="../consultation/get_province_consultation?dpet="+dpet+"&dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseeprovince;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null); 
	}
		function chargerprovince_mod(dpet,dret)
{
/* alert (dpet);*/
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		
			var url="../consultation/get_province_modification?dpet="+dpet+"&dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseeprovince;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null); 
	}
	function chargerroute(prov,dpet,dret)
{
/* alert (prov);*/
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		
			var url="../consultation/get_route_modification?prov="+prov+"&dpet="+dpet+"&dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseeroute;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null); 
	}
	function chargerPK(rout)
{
/* alert (prov);*/
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		 document.getElementById("connectes1").className="tumevois"; 
		 document.getElementById("pk").className="tumevois"; 
		document.getElementById("pk").innerHTML="<img src='../images/ajax-loader.gif'>"; 
		
			var url="../consultation/get_PK_modification?rout="+rout+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseepk;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null); 
	}
function remplir(dret)
{
//alert (dret);
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
			document.getElementById("dpet_dret").innerHTML='';
			document.getElementById("bottomdpet").innerHTML='';
			var url="../consultation/get_dpet?dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseedret;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);
	}
	function remplir_dpet(dret)
{

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	if(dret!=-1){
			document.getElementById("dpet_dret").innerHTML='';
			document.getElementById("actualiser_agg").innerHTML='';
			document.getElementById("prov_dpet").innerHTML='';
			document.getElementById("rout_prov").innerHTML='';
			var url="../agglomeration/get_dpet?dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseedret_agg;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);}
			else {
					document.getElementById("dpet_dret").innerHTML='';
			document.getElementById("actualiser_agg").innerHTML='';
			document.getElementById("prov_dpet").innerHTML='';
			document.getElementById("rout_prov").innerHTML='';
	}
	
	
	}
	function remplir_dpet_TRF2(dret)
{

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	if(dret!=-1){
			document.getElementById("dpet_dret").innerHTML='';
			document.getElementById("prov_dpet").innerHTML='';
			var url="../TR/get_dpet?dret="+dret+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseedret_TRF2;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);}
			else {
			document.getElementById("dpet_dret").innerHTML='';
			document.getElementById("prov_dpet").innerHTML='';
	}
	
	
	}
		function remplir_prov_TRF2(dpet)
{

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	if(dpet!=-1){
					
			var url="../TR/get_province?dpet="+dpet+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseeprov_TRF2;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);}
			else {

			document.getElementById("prov_dpet").innerHTML='';

	}
	}
	function remplir_prov(dpet)
{

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	if(dpet!=-1){
			document.getElementById("rout_prov").innerHTML='';
			document.getElementById("actualiser_agg").innerHTML='';
			var url="../agglomeration/get_province?dpet="+dpet+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseeprov_agg;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);}
			else {
			
			document.getElementById("actualiser_agg").innerHTML='';
			document.getElementById("prov_dpet").innerHTML='';
			document.getElementById("rout_prov").innerHTML='';
	}
	}
	function remplir_rout(prov)
{

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
		if(prov!=-1){
			document.getElementById("actualiser_agg").innerHTML='';
			var url="../agglomeration/get_route?prov="+prov+"&sid="+Math.random();
			xmlHttp1.onreadystatechange=listeActualiseerout_agg;
			xmlHttp1.open("GET",url,true);
			xmlHttp1.send(null);}
			else {
			
			document.getElementById("actualiser_agg").innerHTML='';
			document.getElementById("rout_prov").innerHTML='';
	}
	}
	function afficher_TRF2(type,id)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../TR/afficher_TRF2?type="+type+"&id="+id+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualisee_aggl;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
	function afficher_RA(type,id)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../AGGLOMERATION/afficher_route_agglomeration?type="+type+"&id="+id+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualisee_aggl;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function afficher_RNS(type,id)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../NATURE_SECTION/afficher_route_NS?type="+type+"&id="+id+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualisee_aggl;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function afficher_agg(type,id)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../AGGLOMERATION/afficher_agglomeration?type="+type+"&id="+id+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualisee_aggl;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
	function listeActualisee_aggl() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("actualiser_agg").innerHTML=xmlHttp1.responseText;
 } 
}	
function loadinfo(user)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../ROUTE/info_route?user="+user+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualisee;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}

function cons_dpet_traversee(route)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	document.getElementById("routedp").className="tumevois"; 
	document.getElementById("routedp").innerHTML="<img src='../images/ajax-loader.gif'>";	
	var url="../consultation/cons_route_dpet?route="+route+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualiseetoutedp;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function cons_dret_traversee(route)
{
 //alert (user) ;

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/cons_route_dret?route="+route+"&sid="+Math.random();

	xmlHttp1.onreadystatechange=listeActualiseetoutedp;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_section(section)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../section/modifier_section_anc_nouv_valeur?section="+section+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisesection;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_route_section(rs)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../route_section/modifier_route_section_anc_nouv_valeur?route_section="+rs+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualiseroutesection;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_route_section_cons(rs)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_route_section_anc_valeur?route_section="+rs+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualiseroutesection;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_dpet(dpet)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../dpet/modifier_dpet_anc_nouv_valeur?dpet="+dpet+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedpet;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function Creer_Rout_AGG()
{
idenrout=document.form.idenrout.value;
numenoeuddebut=document.form.numenoeuddebut.value;
numenoeudfin=document.form.numenoeudfin.value;
idenagglo=document.form.idenagglo.value;
txtdesccre=document.form.txtdesccre.value;
if(numenoeuddebut !="" && numenoeudfin!="" && idenagglo !=""){
if(verifNum(numenoeuddebut,' le PKD') && verifNum(numenoeudfin,' le PKF') ){
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../AGGLOMERATION/insrer_RA_db?idenrout="+idenrout+"&numenoeuddebut="+numenoeuddebut+"&numenoeudfin="+numenoeudfin+"&idenagglo="+idenagglo+"&txtdesccre="+txtdesccre+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualise_creer_RA;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	}
	else {
	alert("PKD et PKD doivent �tre numerique!!");
	}
}else
{
alert("selectionner une route pour lui adffecter une agglomeration entre (PKD et PKF)!!");
}
}
function Creer_Rout_NS()
{
idenrout=document.form.idenrout.value;
numenoeuddebut=document.form.numenoeuddebut.value;
numenoeudfin=document.form.numenoeudfin.value;
codnatse=document.form.codnatse.value;
txtdesccre=document.form.txtdesccre.value;
if(numenoeuddebut !="" && numenoeudfin!="" && codnatse !=""){
if(verifNum(numenoeuddebut,' le PKD') && verifNum(numenoeudfin,' le PKF') ){
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../NATURE_SECTION/insrer_RNS_db?idenrout="+idenrout+"&numenoeuddebut="+numenoeuddebut+"&numenoeudfin="+numenoeudfin+"&codnatse="+codnatse+"&txtdesccre="+txtdesccre+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualise_creer_RA;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	}
	else {
	alert("PKD et PKD doivent �tre numerique!!");
	}
}else
{
alert("selectionner une route pour affecter la nature au section entre (PKD et PKF)!!");
}
}
function noeud_par_route(idroute,idpr)
{
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/charger_noeud?idroute="+idroute+"&idpr="+idpr+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisencoharger_eud;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}
function noeud_par_route_AG(idroute)
{
//alert(idroute);
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../AGGLOMERATION/charger_noeud_D?idroute="+idroute+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisencoharger_NAG;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}

function noeud_par_route_NS(idroute)
{
//alert(idroute);
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../NATURE_SECTION/charger_noeud_NS?idroute="+idroute+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisencoharger_NAG;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}
function noeud_par_routefin(idroute,idpr)
{
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/charger_noeudfin?idroute="+idroute+"&idpr="+idpr+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisencoharger_eudfin;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}

function loadinfo_region(region)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../REGION_MI/modifier_region_anc_nouv_valeur?region="+region+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualiseregion;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_region_cons(region)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	document.getElementById("bottomregion").innerHTML="<img src='../images/ajax-loader.gif'>";	
	var url="../consultation/consulter_region_anc_valeur?region="+region+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualiseregion;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_provinceregion_cons(region)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_province_region?region="+region+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualiseregion;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_dret(dret)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../dret/modifier_dret_anc_nouv_valeur?dret="+dret+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedret;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_dret_cons(dret)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	//document.getElementById('bottomdret').innerHTML = '';
	document.getElementById("bottomdret").innerHTML="<img src='../images/ajax-loader.gif'>";
	var url="../consultation/consulter_dret_anc_valeur?dret="+dret+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedret;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_dret_cons_dpetdret(dret)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_dret_dpet?dret="+dret+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedret;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_dpet_cons(dpet)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	document.getElementById("bottomdpet").innerHTML="<img src='../images/ajax-loader.gif'>";
	var url="../consultation/consulter_dpet_anc_valeur?dpet="+dpet+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedpet;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}


function loadinfo_provincedpet_cons(dpet)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_dpet_province?dpet="+dpet+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisedpet;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_section_cons(section)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_section_anc_valeur?section="+section+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisesection;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_noeud(noeud)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../noeud/modifier_noeud_anc_nouv_valeur?noeud="+noeud+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisenoeud;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_noeud_cons(noeud)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../consultation/consulter_noeud_anc_valeur?noeud="+noeud+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisenoeud;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_route(user)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../ROUTE/modifier_route_anc_nouv_valeur?user="+user+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_route_cons(user)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	document.getElementById("bottomcons").className="tumevois"; 
	var url="../consultation/consulter_route_anc_valeur?user="+user+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee_cons;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (url);	
	//alert ("dkhal hna");
}
function getnomf(){
return document.form.nomf.value;
}
function getnomfupl(){
return document.form.pdffile.value;
}
function getnumero(){
return document.form.numero.value;
}
function getchemin(){
return document.form.chemin.value;
}
function getfichierexcel(){
return document.form.excel.value;
}


function getnomfparboite(){
    return document.getElementById("boite").value;
}
function getnomflikecin(){
    return document.getElementById("cin").value;
}
function getPage_rech_fichier_par_boite(page){
    var p = page.getAttribute("data-page");
    xmlHttp1=LoadXHR();	
    if (xmlHttp1==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
    var url="do/listeCin_boite.php?boite="+getnomfparboite()+"&page="+p+"&sid="+Math.random();
    xmlHttp1.onreadystatechange=listeA;
    xmlHttp1.open("GET",url,true);
    xmlHttp1.send(null);
    
    return this.innerText();
}
function rech_fichier_par_boite()
{
	//alert(getnomfparboite());
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	    
        document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
	var url="do/listeCin_boite.php?boite="+getnomfparboite()+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeA;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
        
        return this.innerText();

}
function getPage_rechercher_fichier_likeCIN(page){
    var p = page.getAttribute("data-page");
    xmlHttp1=LoadXHR();	
    if (xmlHttp1==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
    var url="do/listeCin_alpha.php?cin="+getnomflikecin()+"&page="+p+"&sid="+Math.random();
    xmlHttp1.onreadystatechange=listeA;
    xmlHttp1.open("GET",url,true);
    xmlHttp1.send(null);
    
    return this.innerText();
}
function rechercher_fichier_likeCIN()
{
	//alert(getnomflikecin());
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	
	document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
	var url="do/listeCin_alpha.php?cin="+getnomflikecin()+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeA;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}
function getPage_rechercher_fichier(page){
    var p = page.getAttribute("data-page");
    xmlHttp1=LoadXHR();	
    if (xmlHttp1==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
    var url="do/rechercher_fichier.php?nomf="+getnomf()+"&page="+p+"&sid="+Math.random();
    xmlHttp1.onreadystatechange=listeA;
    xmlHttp1.open("GET",url,true);
    xmlHttp1.send(null);
    
    return this.innerText();
}
function rechercher_fichier()
{	
	xmlHttp1=LoadXHR();	
	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
        document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
	var url="do/rechercher_fichier.php?nomf="+getnomf()+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeA;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
}



/*function ajouter_fichier()
{
	alert(getnomfupl());
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
	var url="Ajouter_fichier_php.php?nomfupload="+getnomfupl()+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeAcharger;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}*/
function getDoc(){
    return document.getElementById('doc').files[0];
}
function uploader(){
    var form_data = new FormData();
    form_data.append("doc", getDoc()), 
    $.ajax({
        url: "do/upload.php",
        method: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function(){
            $('#iddivcont').html('<p class="help-block"><i class="fa fa-spinner fa-spin"></i>&nbsp;En cours d\'ajouter la document...</p>');
        },  
        success: function(data)
        {
            $('#iddivcont').html(data);
        }
    });
}
function charger_fichier()
{
	//alert("xvcbcvssssbcvbcvb");
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	document.getElementById("iddivcont").innerHTML='<tr><td colspan="3"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></td></tr>';
	var url="do/charger_fichier.php?sid="+Math.random();
	xmlHttp1.onreadystatechange=listeAcharger;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}

function rechercher_fichier_excel()
{
//alert(getfichierexcel());
	//alert("qxqsdqs");
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	document.getElementById("bottomcons").className="tumevois"; 
	document.getElementById("bottomcons").innerHTML="<img src='images/ajax-loader.gif'>";
	var url="consultation/Rechercher_fichier_php2.php?chemin="+getchemin()+"&fichier="+getfichierexcel()+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee_rechercher_file;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}
function rechercher_projet()
{
alert("ffffffffffffff");
	//alert("qxqsdqs");
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}
	
	var url="consultation/Rechercher_projet.php?sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee_rechercher_file;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);

}
function loadinfo_province_cons(user)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	document.getElementById("bottomcons_province").innerHTML="<img src='../images/ajax-loader.gif'>";
	var url="../consultation/consulter_province_anc_valeur?user="+user+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee_cons_pr;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}
function loadinfo_province(user)
{
//alert (user);

	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url="../province/modifier_province_anc_nouv_valeur?user="+user+"&sid="+Math.random();
	xmlHttp1.onreadystatechange=listeActualisee_cons_pr;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert (user);	
	//alert ("dkhal hna");
}

function verifaffec(prpr,prli) {

xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../province/get_prli.php?prpr="+prpr+"&prli="+prli;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_provPRLI;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 
     }
	 function supprimer_affect_prov_limitr(idenlimite){
	  if (confirm("Vous desirez vraiment supprimer cet ligne ?")) {
	xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../province/supprimer_affectation_prov_limitrophe.php?idenlimite="+idenlimite;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_provPRLISUP;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 }
	 }
	 function charger_PRPRLI(provnceprli,type) {

xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../province/get_prprlisup.php?provnceprli="+provnceprli+"&type="+type;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_provPRLISUP;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 
     }
	 function Getprprsup()
{
return document.form.prprsupp.value;
}
	 function Getprlisup()
{
return document.form.prlisup.value;
}
	function listeActualisee_provPRLI() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomPRPRLI").innerHTML=xmlHttp1.responseText;
 } 
}

	function listeActualisee_provPRLISUPDB() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("PRPRLISUPPDB").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualisee_provPRLISUP() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("PRPRLISUPP").innerHTML=xmlHttp1.responseText;
 } 
}		 	

function ControleVides(nomtr,desctr,creer) {

 if (nomtr.length ==0 ) {

alert('tu dois remplir au moins le nom');

}
else{ 
/* alert (nomtr);
alert (desctr);
alert (creer); */
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../tr/creer_trdetail?nomtr="+nomtr+"&desctr="+desctr+"&creer="+creer;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_tr;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 }
     }
	 
	 
	function listeActualisee_tr() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("botom_tr").innerHTML=xmlHttp1.responseText;
 } 
}

	function listeActualisee() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottom").innerHTML=xmlHttp1.responseText;
 } 
}	

	function listeActualisesection() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomsect").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualiseroutesection() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomroutesect").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualiseregion() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomregion").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualisedpet() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomdpet").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualisedret() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomdret").innerHTML=xmlHttp1.responseText;
 } 
}
	function listeActualisenoeud() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomnoeud").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisee_cons() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomcons").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisee_cons_pr() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("bottomcons_province").innerHTML=xmlHttp1.responseText;
 } 
}

function listeActualise_creer_RA() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("creer_RA").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisencoharger_eud() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("charger_noeud").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisencoharger_NAG() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("charger_noeud").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisencoharger_eudfin() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("charger_noeudfin").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualiseetoutedp() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("routedp").innerHTML=xmlHttp1.responseText;
 } 
}
function listeActualisee_insrer_section() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("inserer_section").innerHTML=xmlHttp1.responseText;
 } 
}

function zoomer(zoom,rout) {
//alert(zoom);
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../consultation/zoom.php?zoom="+zoom+"&rout="+rout;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_zoom;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 
     }

	
	 function zoomerPRCTG(valzoom,rout) {
//alert(valzoom);
xmlHttp1=LoadXHR();	

	if (xmlHttp1==null)
	{
		 alert ("Browser does not support HTTP Request");
		 return;
	}

	
	var url ="../consultation/zoom.php?valzoom="+valzoom+"&rout="+rout;
	//alert (url);
	xmlHttp1.onreadystatechange=listeActualisee_zoom;
	xmlHttp1.open("GET",url,true);
	xmlHttp1.send(null);
	//alert ("dkhal hna");
  
 
     }
	 function listeActualisee_zoom() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("zoomm").innerHTML=xmlHttp1.responseText;
 } 
}

function listeA() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("iddivcont").innerHTML=xmlHttp1.responseText;
 } 
}


function listeAcharger() 
{ 
if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
 { 
 	document.getElementById("iddivcont").innerHTML=xmlHttp1.responseText;
 } 
}
//fonction qui controle le Cr�ation des sections
/* function test(route){
														xmlHttp1=LoadXHR();	
														if (xmlHttp1==null)
														{
															 alert ("Browser does not support HTTP Request");
															 return;
														}										
														var url="../section/inserer_section?&route="+route;
														xmlHttp1.onreadystatechange=listeActualisee_insrer_section;
														xmlHttp1.open("GET",url,true);
														xmlHttp1.send(null);} */
