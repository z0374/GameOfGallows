/*pega o span do desenho
*/
let spngll = document.getElementById('gll');
//Sprite
var gllws 
= [
	'<path d="M 300 120 V 60 H 100 V 600" class="gll"/>',
	'<circle cx="300" cy="192" r="72" class="enf"/>',
	'<path d="M 300 263 V 420" class="enf"/>',
	'<path d="M 300 273 L 390 366" class="enf"/>',
	'<path d="M 300 273 L 210 366" class="enf"/>',
	'<path d="M 300 420 L 210 510" class="enf"/>',
	'<path d="M 300 420 L 390 510" class="enf"/>'
]; const death = '<path d="M 90 42 L 510 600" stroke="red" stroke-width="12" fill="none"/> <path d="M 510 42 L 100 600" stroke="red" stroke-width="12" fill="none"/>';

/*Arrays de palavras*/
const frts = ["maçã", "banana", "laranja", "uva", "morango", "kiwi", "pêra", "abacaxi", "mamão", "melancia","melão", "limão", "lima", "pêssego", "ameixa", "cereja", "mirtilo", "framboesa", "goiaba", "caqui","figo", "manga", "maracujá", "carambola", "tangerina", "abacate", "jaca", "pitaya", "coco", "nectarina","cereja", "pêssego", "manga", "caju", "tâmara", "damasco", "melão", "goiaba", "ameixa", "mamão","kiwi", "uva", "maracujá", "melancia", "limão", "lima", "abacaxi", "laranja", "pera", "banana","maçã", "morango", "abacate", "figo", "framboesa", "tangerina", "carambola", "pitanga", "pupunha","jabuticaba", "graviola", "cajá", "acerola", "amora", "jambo", "pêssego", "manga", "caju", "tâmara","damasco", "melão", "goiaba", "ameixa", "mamão", "kiwi", "uva", "maracujá", "melancia", "limão","lima", "abacaxi", "laranja", "pera", "banana", "maçã", "morango", "abacate", "figo", "framboesa","tangerina", "carambola", "pitanga", "pupunha", "jabuticaba", "graviola", "cajá", "acerola", "amora","jambo","caqui", "mexerica", "tangerina", "nectarina", "romã", "ameixa", "pêssego", "pitaya", "melão","melancia", "jaca", "abiu", "ata", "biribá", "cupuaçu", "durião", "ingá", "jujuba", "pequi", "sapoti","tucumã", "umbu", "abacaba", "anona", "cambuci", "calabura", "cambucá", "canistel", "carabola", "cataia","cato", "citrus", "cupuí", "grumixama", "groselha", "grumixaba", "imbe", "ingá", "jaracatiá", "jitamaca","jujuba", "kahili", "kamala", "katembê", "lucuma", "lulo", "mamei", "maracujá", "murici", "nêspera","noni", "paterna", "patauá", "pindaíba", "piquiá", "pixirica", "pupunha", "pupunheira", "rhubarb","salak", "sapodila", "sapoti", "siriguela", "tamarindo", "taperebá", "uvaia", "vangha", "wampi", "zevia"];

const cdGO = ["Abadia_de_Goiás", "Abadiânia", "Acreúna", "Adelândia", "Água_Fria_de_Goiás", "Água_Limpa", "Águas_Lindas_de_Goiás", "Alexânia", "Aloândia", "Alto_Horizonte", "Alto_Paraíso_de_Goiás", "Alvorada_do_Norte", "Amaralina", "Americano_do_Brasil", "Amorinópolis", "Anápolis", "Anhanguera", "Anicuns", "Aparecida_de_Goiânia", "Aparecida_do_Rio_Doce", "Aporé", "Araçu", "Aragarças", "Aragoiânia", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro_Alto", "Bela_Vista_de_Goiás", "Bom_Jardim_de_Goiás", "Bom_Jesus_de_Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buriti_Alegre", "Buriti_de_Goiás", "Buritinópolis", "Cabeceiras", "Cachoeira_Alta", "Cachoeira_de_Goiás", "Cachoeira_Dourada", "Caçu", "Caiapônia", "Caldas_Novas", "Caldazinha", "Campestre_de_Goiás", "Campinaçu", "Campinorte", "Campo_Alegre_de_Goiás", "Campo_Limpo_de_Goiás", "Campos_Belos", "Campos_Verdes", "Carmo_do_Rio_Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão_do_Céu", "Cidade_Ocidental", "Cocalzinho_de_Goiás", "Colinas_do_Sul", "Córrego_do_Ouro", "Corumbá_de_Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis_de_Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela_do_Norte", "Faina", "Fazenda_Nova", "Firminópolis", "Flores_de_Goiás", "Formosa", "Formoso", "Gameleira_de_Goiás", "Goianápolis", "Goiandira", "Goianésia", "Goiânia", "Goianira", "Goiás", "Goiatuba", "Gouvelândia", "Guapó", "Guaraíta", "Guarani_de_Goiás", "Guarinos", "Heitoraí", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga_de_Goiás", "Iporá", "Israelândia", "Itaberaí", "Itaguari", "Itaguaru", "Itajá", "Itapaci", "Itapirapuã", "Itapuranga", "Itarumã", "Itauçu", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa_Santa", "Leopoldo_de_Bulhões", "Luziânia", "Mairipotaba", "Mambaí", "Mara_Rosa", "Marzagão", "Matrinchã", "Maurilândia", "Mimoso_de_Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte_Alegre_de_Goiás", "Montes_Claros_de_Goiás", "Montividiu", "Montividiu_do_Norte", "Morrinhos", "Morro_Agudo_de_Goiás", "Mossâmedes", "Mozarlândia", "Mundo_Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova_América", "Nova_Aurora", "Nova_Crixás", "Nova_Glória", "Nova_Iguaçu_de_Goiás", "Nova_Roma", "Nova_Veneza", "Novo_Brasil", "Novo_Gama", "Novo_Planalto", "Orizona", "Ouro_Verde_de_Goiás", "Ouvidor", "Padre_Bernardo", "Palestina_de_Goiás", "Palmeiras_de_Goiás", "Palmelo", "Palminópolis", "Panamá", "Paranaiguara", "Paraúna", "Perolândia", "Petrolina_de_Goiás", "Pilar_de_Goiás", "Piracanjuba", "Piranhas", "Pirenópolis", "Pires_do_Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Portelândia", "Posse", "Professor_Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio_Quente", "Rio_Verde", "Rubiataba", "Sanclerlândia", "Santa_Bárbara_de_Goiás", "Santa_Cruz_de_Goiás", "Santa_Fé_de_Goiás", "Santa_Helena_de_Goiás", "Santa_Isabel", "Santa_Rita_do_Araguaia", "Santa_Rita_do_Novo_Destino", "Santa_Rosa_de_Goiás", "Santa_Tereza_de_Goiás", "Santa_Terezinha_de_Goiás", "Santo_Antônio_da_Barra", "Santo_Antônio_de_Goiás", "Santo_Antônio_do_Descoberto", "São_Domingos", "São_Francisco_de_Goiás", "São_João_d'Aliança", "São_João_da_Paraúna", "São_Luís_de_Montes_Belos", "São_Luiz_do_Norte", "São_Miguel_do_Araguaia", "São_Miguel_do_Passa_Quatro", "São_Patrício", "São_Simão", "Senador_Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio_d'Abadia", "Taquaral_de_Goiás", "Teresina_de_Goiás", "Terezópolis_de_Goiás", "Três_Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso_de_Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila_Boa", "Vila_Propício"];


const grl = frts.concat(cdGO);

/*variaveis que serão utilizadas
*/
let plvr;
let err = 0;
let splv = '';
let pts = [];
var ltrs = [];
var acnt = [];
var dgt = [];
let vlltr;
let txt;


index()

//Tela inicial
function index(){
	err = 0;
	pts = 0;
	dgt = [];
	est('D','ttl','<h1>Jogo da Forca</h1><h4>Não se enforque com as palavras</h4>');
	spngll.setAttribute('hidden','true');
	est('D','plv','<select><option>Geral</option><option>Frutas</option><option>Cidades</option><option selected disabled>escolha um TEMA</oion></select><br>');
	est('D','txt','');
	btn('INICIAR', 'fjg()');
	
}

/*Tela do front do Jogo
*/
function fjg(){
	sctp();
	est('D','ttl','<h1>Jogo da Forca</h1><h4>Escolha uma letra</h4>');
	spngll.removeAttribute('hidden');
	est('C','SVG',gllws[err]);
	est('D','txt',`<p>${ltrs.length} letras</p><input type="text" id="lt" onkeyup="enter()" maxlength="1">`);
	btn('<i class="fa-solid fa-thumbs-up"></i>','bjg()');
	
}

/*BackEnd do jogo*/
function bjg(){
	
	/*verifica se o input esta vazio */
	if(vltr('A') == ""){return};	
	
	/*verifica se a letra ja foi citada antes*/
	if(dgt.includes(vltr('B'))){
		
		est('C','h4','Letra ja ditada');
		return vltr('C');
		
}
	
	/*verifica se a letra citada esta correta*/
	if(acnt.includes(vltr('B'))){
	    
		/*adiciona pontos*/
		pts.pop();
		
		/*adiciona a letra ja digitada no array de digitados*/
		dgt.push(vltr('B'));
	    
		/*itera o array que contém as letras da palavra secreta*/
		acnt.forEach(crt);
	    /*função que substitui o espaço vazio pela letra da palavra*/
		function crt(doguim,id){
		if(doguim == vltr('B')){
	        document.getElementById(id).innerHTML = ltrs[id];
		
	        }
}		
	    /*Atualização do display h4*/
	    est('C','h4','Digite uma letra');
	    vltr('C');
	    
		
		/*Verifica se ganhou o jogo*/
			if(pts.length <= 0){
		/*Atualiza o display*/
			est('C','h4','<p class="vnc">VENCEU</p>');
			    est('D','txt','')
			btn('RESET','index()');
			return;
		
}
	/*verifica se a letra citada esta correta*/
	}else{
		err++;
		dgt.push(vltr('B'));
		est('C','h4','<p class="err">Escolha a letra correta</p>');
		est('A','svg',gllws[err]);
		vltr('C');

	/*Verifica se perdeu o jogo*/
	if(err >= gllws.length-1){
		est('A','svg',death);
		est('C','h4','PERDEU');
		est('D','txt','')
		btn('RESET','index()');
		est('D','plv',`<h1 class="err"><u>${plvr}</u></h1>`);
	return ;
}
		
	}
	
	
	
}
	/*Função que estrutura o HTML*/
function est(gatim, jabuti, doguim){
	let passarim = gatim;
	let peixim ='';
	if(passarim == 'A'){
		peixim = document.querySelector(jabuti);
		peixim.innerHTML = peixim.innerHTML + doguim;
	}if(passarim == 'B'){
		peixim = document.getElementById(jabuti);
		peixim.innerHTML = peixim.innerHTML + doguim;
	}if(passarim == 'C'){
			peixim = document.querySelector(jabuti);
			peixim.innerHTML = doguim;
	}if(passarim == 'D'){
			peixim = document.getElementById(jabuti);
			peixim.innerHTML = doguim;
}
}

	/*Função que estrutura o botão*/
function btn(doguim,gatim){
	let btn = document.querySelector('button');
	btn.innerHTML = doguim;
	btn.setAttribute('onclick',gatim);
}

	/*Sorteia a palavra secreta*/
function srt(doguim){
	let srplv = doguim[Math.floor(Math.random() * doguim.length)];
	return srplv.toString().toUpperCase();
	
	
}

	/*Função que resume o valor do input*/
function vltr(doguim){
	 vlltr = document.querySelector("input");
	if(doguim == 'A'){return vlltr.value;}
	if(doguim == 'B'){return vlltr.value.toUpperCase();}
	if(doguim == 'C'){return vlltr.value = "";}
}
	/*Função que manipula a palavra secreta*/
function sctp(){
	/*esvazia o seletor plv no HTML*/
	est("D","plv","");
	/*atribua a palavra secreta a variável plvr*/
	plvr = srt(cdGO);
	/*separa as letras da palavra secreta e retira todos os acentos*/
   acnt = rmact(plvr).split("");
	/*separa as letras da palavra secreta deixando os acentos*/
    ltrs = plvr.split("");
		/*imprime os espaços vazios que ocultam a palavra secreta de acordo com o número de letras da palavra*/
		for(let i = 0; i  < ltrs.length; i++){
			est("B","plv",`<h1 id="${i}">_&nbsp</h1>`);
		/*Verifica e coloca o hífen e o espaço no lugar adequado*/ 
			if(ltrs[i] == "-"){est('D',`${i}`,'&nbsp;-&nbsp;')}
			if(ltrs[i] == "_"){est('D',`${i}`,'&nbsp; &nbsp;')}
			
	}
/*Cria um array com as letras da palavra sem repetir os caracteres(usamos para calcular os pontos precisos para vencer)*/
pts = Array.from(new Set(he(rmact(plvr)).split("")));
	
console.log(pts);
	
}

/*Função responsável por escutar quando precionamos ENTER no input*/
function enter(){
	document.getElementById('lt').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    bjg();
  }
});
    }

/*função que retira os acentos*/
function rmact (txt){                                  
    txt = txt.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
    txt = txt.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
    txt = txt.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
    txt = txt.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
    txt = txt.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
    txt = txt.replace(new RegExp('[Ç]','gi'), 'C');
    txt = txt.replace(new RegExp('[_]','gi'), ' ');
    return txt;                 
}
function he (pl){
	pl = pl.replace(new RegExp('[-]','gi'), '');
	pl = pl.replace(new RegExp('[_]','gi'), '');
	pl = pl.replace(/\s/g, '');
	return pl;
	      }/*pega o span do desenho
*/
let spngll = document.getElementById('gll');
//Sprite
var gllws 
= [
	'<path d="M 300 120 V 60 H 100 V 600" class="gll"/>',
	'<circle cx="300" cy="192" r="72" class="enf"/>',
	'<path d="M 300 263 V 420" class="enf"/>',
	'<path d="M 300 273 L 390 366" class="enf"/>',
	'<path d="M 300 273 L 210 366" class="enf"/>',
	'<path d="M 300 420 L 210 510" class="enf"/>',
	'<path d="M 300 420 L 390 510" class="enf"/>'
]; const death = '<path d="M 90 42 L 510 600" stroke="red" stroke-width="12" fill="none"/> <path d="M 510 42 L 100 600" stroke="red" stroke-width="12" fill="none"/>';

/*Arrays de palavras*/
const frts = ["maçã", "banana", "laranja", "uva", "morango", "kiwi", "pêra", "abacaxi", "mamão", "melancia","melão", "limão", "lima", "pêssego", "ameixa", "cereja", "mirtilo", "framboesa", "goiaba", "caqui","figo", "manga", "maracujá", "carambola", "tangerina", "abacate", "jaca", "pitaya", "coco", "nectarina","cereja", "pêssego", "manga", "caju", "tâmara", "damasco", "melão", "goiaba", "ameixa", "mamão","kiwi", "uva", "maracujá", "melancia", "limão", "lima", "abacaxi", "laranja", "pera", "banana","maçã", "morango", "abacate", "figo", "framboesa", "tangerina", "carambola", "pitanga", "pupunha","jabuticaba", "graviola", "cajá", "acerola", "amora", "jambo", "pêssego", "manga", "caju", "tâmara","damasco", "melão", "goiaba", "ameixa", "mamão", "kiwi", "uva", "maracujá", "melancia", "limão","lima", "abacaxi", "laranja", "pera", "banana", "maçã", "morango", "abacate", "figo", "framboesa","tangerina", "carambola", "pitanga", "pupunha", "jabuticaba", "graviola", "cajá", "acerola", "amora","jambo","caqui", "mexerica", "tangerina", "nectarina", "romã", "ameixa", "pêssego", "pitaya", "melão","melancia", "jaca", "abiu", "ata", "biribá", "cupuaçu", "durião", "ingá", "jujuba", "pequi", "sapoti","tucumã", "umbu", "abacaba", "anona", "cambuci", "calabura", "cambucá", "canistel", "carabola", "cataia","cato", "citrus", "cupuí", "grumixama", "groselha", "grumixaba", "imbe", "ingá", "jaracatiá", "jitamaca","jujuba", "kahili", "kamala", "katembê", "lucuma", "lulo", "mamei", "maracujá", "murici", "nêspera","noni", "paterna", "patauá", "pindaíba", "piquiá", "pixirica", "pupunha", "pupunheira", "rhubarb","salak", "sapodila", "sapoti", "siriguela", "tamarindo", "taperebá", "uvaia", "vangha", "wampi", "zevia"];

const cdGO = ["Abadia_de_Goiás", "Abadiânia", "Acreúna", "Adelândia", "Água_Fria_de_Goiás", "Água_Limpa", "Águas_Lindas_de_Goiás", "Alexânia", "Aloândia", "Alto_Horizonte", "Alto_Paraíso_de_Goiás", "Alvorada_do_Norte", "Amaralina", "Americano_do_Brasil", "Amorinópolis", "Anápolis", "Anhanguera", "Anicuns", "Aparecida_de_Goiânia", "Aparecida_do_Rio_Doce", "Aporé", "Araçu", "Aragarças", "Aragoiânia", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro_Alto", "Bela_Vista_de_Goiás", "Bom_Jardim_de_Goiás", "Bom_Jesus_de_Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buriti_Alegre", "Buriti_de_Goiás", "Buritinópolis", "Cabeceiras", "Cachoeira_Alta", "Cachoeira_de_Goiás", "Cachoeira_Dourada", "Caçu", "Caiapônia", "Caldas_Novas", "Caldazinha", "Campestre_de_Goiás", "Campinaçu", "Campinorte", "Campo_Alegre_de_Goiás", "Campo_Limpo_de_Goiás", "Campos_Belos", "Campos_Verdes", "Carmo_do_Rio_Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão_do_Céu", "Cidade_Ocidental", "Cocalzinho_de_Goiás", "Colinas_do_Sul", "Córrego_do_Ouro", "Corumbá_de_Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis_de_Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela_do_Norte", "Faina", "Fazenda_Nova", "Firminópolis", "Flores_de_Goiás", "Formosa", "Formoso", "Gameleira_de_Goiás", "Goianápolis", "Goiandira", "Goianésia", "Goiânia", "Goianira", "Goiás", "Goiatuba", "Gouvelândia", "Guapó", "Guaraíta", "Guarani_de_Goiás", "Guarinos", "Heitoraí", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga_de_Goiás", "Iporá", "Israelândia", "Itaberaí", "Itaguari", "Itaguaru", "Itajá", "Itapaci", "Itapirapuã", "Itapuranga", "Itarumã", "Itauçu", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa_Santa", "Leopoldo_de_Bulhões", "Luziânia", "Mairipotaba", "Mambaí", "Mara_Rosa", "Marzagão", "Matrinchã", "Maurilândia", "Mimoso_de_Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte_Alegre_de_Goiás", "Montes_Claros_de_Goiás", "Montividiu", "Montividiu_do_Norte", "Morrinhos", "Morro_Agudo_de_Goiás", "Mossâmedes", "Mozarlândia", "Mundo_Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova_América", "Nova_Aurora", "Nova_Crixás", "Nova_Glória", "Nova_Iguaçu_de_Goiás", "Nova_Roma", "Nova_Veneza", "Novo_Brasil", "Novo_Gama", "Novo_Planalto", "Orizona", "Ouro_Verde_de_Goiás", "Ouvidor", "Padre_Bernardo", "Palestina_de_Goiás", "Palmeiras_de_Goiás", "Palmelo", "Palminópolis", "Panamá", "Paranaiguara", "Paraúna", "Perolândia", "Petrolina_de_Goiás", "Pilar_de_Goiás", "Piracanjuba", "Piranhas", "Pirenópolis", "Pires_do_Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Portelândia", "Posse", "Professor_Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio_Quente", "Rio_Verde", "Rubiataba", "Sanclerlândia", "Santa_Bárbara_de_Goiás", "Santa_Cruz_de_Goiás", "Santa_Fé_de_Goiás", "Santa_Helena_de_Goiás", "Santa_Isabel", "Santa_Rita_do_Araguaia", "Santa_Rita_do_Novo_Destino", "Santa_Rosa_de_Goiás", "Santa_Tereza_de_Goiás", "Santa_Terezinha_de_Goiás", "Santo_Antônio_da_Barra", "Santo_Antônio_de_Goiás", "Santo_Antônio_do_Descoberto", "São_Domingos", "São_Francisco_de_Goiás", "São_João_d'Aliança", "São_João_da_Paraúna", "São_Luís_de_Montes_Belos", "São_Luiz_do_Norte", "São_Miguel_do_Araguaia", "São_Miguel_do_Passa_Quatro", "São_Patrício", "São_Simão", "Senador_Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio_d'Abadia", "Taquaral_de_Goiás", "Teresina_de_Goiás", "Terezópolis_de_Goiás", "Três_Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso_de_Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila_Boa", "Vila_Propício"];


const grl = frts.concat(cdGO);

/*variaveis que serão utilizadas
*/
let plvr;
let err = 0;
let splv = '';
let pts = [];
var ltrs = [];
var acnt = [];
var dgt = [];
let vlltr;
let txt;


index()

//Tela inicial
function index(){
	err = 0;
	pts = 0;
	dgt = [];
	est('D','ttl','<h1>Jogo da Forca</h1><h4>Não se enforque com as palavras</h4>');
	spngll.setAttribute('hidden','true');
	est('D','plv','<select><option>Geral</option><option>Frutas</option><option>Cidades</option><option selected disabled>escolha um TEMA</oion></select><br>');
	est('D','txt','');
	btn('INICIAR', 'fjg()');
	
}

/*Tela do front do Jogo
*/
function fjg(){
	sctp();
	est('D','ttl','<h1>Jogo da Forca</h1><h4>Escolha uma letra</h4>');
	spngll.removeAttribute('hidden');
	est('C','SVG',gllws[err]);
	est('D','txt',`<p>${ltrs.length} letras</p><input type="text" id="lt" onkeyup="enter()" maxlength="1">`);
	btn('<i class="fa-solid fa-thumbs-up"></i>','bjg()');
	
}

/*BackEnd do jogo*/
function bjg(){
	
	/*verifica se o input esta vazio */
	if(vltr('A') == ""){return};	
	
	/*verifica se a letra ja foi citada antes*/
	if(dgt.includes(vltr('B'))){
		
		est('C','h4','Letra ja ditada');
		return vltr('C');
		
}
	
	/*verifica se a letra citada esta correta*/
	if(acnt.includes(vltr('B'))){
	    
		/*adiciona pontos*/
		pts.pop();
		
		/*adiciona a letra ja digitada no array de digitados*/
		dgt.push(vltr('B'));
	    
		/*itera o array que contém as letras da palavra secreta*/
		acnt.forEach(crt);
	    /*função que substitui o espaço vazio pela letra da palavra*/
		function crt(doguim,id){
		if(doguim == vltr('B')){
	        document.getElementById(id).innerHTML = ltrs[id];
		
	        }
}		
	    /*Atualização do display h4*/
	    est('C','h4','Digite uma letra');
	    vltr('C');
	    
		
		/*Verifica se ganhou o jogo*/
			if(pts.length <= 0){
		/*Atualiza o display*/
			est('C','h4','<p class="vnc">VENCEU</p>');
			    est('D','txt','')
			btn('RESET','index()');
			return;
		
}
	/*verifica se a letra citada esta correta*/
	}else{
		err++;
		dgt.push(vltr('B'));
		est('C','h4','<p class="err">Escolha a letra correta</p>');
		est('A','svg',gllws[err]);
		vltr('C');

	/*Verifica se perdeu o jogo*/
	if(err >= gllws.length-1){
		est('A','svg',death);
		est('C','h4','PERDEU');
		est('D','txt','')
		btn('RESET','index()');
		est('D','plv',`<h1 class="err"><u>${plvr}</u></h1>`);
	return ;
}
		
	}
	
	
	
}
	/*Função que estrutura o HTML*/
function est(gatim, jabuti, doguim){
	let passarim = gatim;
	let peixim ='';
	if(passarim == 'A'){
		peixim = document.querySelector(jabuti);
		peixim.innerHTML = peixim.innerHTML + doguim;
	}if(passarim == 'B'){
		peixim = document.getElementById(jabuti);
		peixim.innerHTML = peixim.innerHTML + doguim;
	}if(passarim == 'C'){
			peixim = document.querySelector(jabuti);
			peixim.innerHTML = doguim;
	}if(passarim == 'D'){
			peixim = document.getElementById(jabuti);
			peixim.innerHTML = doguim;
}
}

	/*Função que estrutura o botão*/
function btn(doguim,gatim){
	let btn = document.querySelector('button');
	btn.innerHTML = doguim;
	btn.setAttribute('onclick',gatim);
}

	/*Sorteia a palavra secreta*/
function srt(doguim){
	let srplv = doguim[Math.floor(Math.random() * doguim.length)];
	return srplv.toString().toUpperCase();
	
	
}

	/*Função que resume o valor do input*/
function vltr(doguim){
	 vlltr = document.querySelector("input");
	if(doguim == 'A'){return vlltr.value;}
	if(doguim == 'B'){return vlltr.value.toUpperCase();}
	if(doguim == 'C'){return vlltr.value = "";}
}
	/*Função que manipula a palavra secreta*/
function sctp(){
	/*esvazia o seletor plv no HTML*/
	est("D","plv","");
	/*atribua a palavra secreta a variável plvr*/
	plvr = srt(cdGO);
	/*separa as letras da palavra secreta e retira todos os acentos*/
   acnt = rmact(plvr).split("");
	/*separa as letras da palavra secreta deixando os acentos*/
    ltrs = plvr.split("");
		/*imprime os espaços vazios que ocultam a palavra secreta de acordo com o número de letras da palavra*/
		for(let i = 0; i  < ltrs.length; i++){
			est("B","plv",`<h1 id="${i}">_&nbsp</h1>`);
		/*Verifica e coloca o hífen e o espaço no lugar adequado*/ 
			if(ltrs[i] == "-"){est('D',`${i}`,'&nbsp;-&nbsp;')}
			if(ltrs[i] == "_"){est('D',`${i}`,'&nbsp; &nbsp;')}
			
	}
/*Cria um array com as letras da palavra sem repetir os caracteres(usamos para calcular os pontos precisos para vencer)*/
pts = Array.from(new Set(he(rmact(plvr)).split("")));
	
console.log(pts);
	
}

/*Função responsável por escutar quando precionamos ENTER no input*/
function enter(){
	document.getElementById('lt').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    bjg();
  }
});
    }

/*função que retira os acentos*/
function rmact (txt){                                  
    txt = txt.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
    txt = txt.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
    txt = txt.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
    txt = txt.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
    txt = txt.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
    txt = txt.replace(new RegExp('[Ç]','gi'), 'C');
    txt = txt.replace(new RegExp('[_]','gi'), ' ');
    return txt;                 
}
function he (pl){
	pl = pl.replace(new RegExp('[-]','gi'), '');
	pl = pl.replace(new RegExp('[_]','gi'), '');
	pl = pl.replace(/\s/g, '');
	return pl;
	      }
