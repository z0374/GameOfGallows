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

/*Arrays de palavras
*/
var frts = ['maçã','banana','laranja','uva','morango','abacaxi','pêssego','manga','limão','kiwi','mamão','pera','cereja','framboesa','mirtilo','maracujá','ameixa','coco','açaí','acerola','ananás','anona','arando','cacau','caju','cajá','cajuí','caqui','cidra','damasco','figo','goiaba','graviola','guaraná','ingá','jabuticaba','jaca','jambo','jatobá','janipapo','lichia','lima','mabolo','macadâmia','mangaba','mangostão','marula','murici','nectarina','nêspera','pupunha','romã','salak','sapoti','spondias','tamarindo','tangerina','tacumã','umbu','uvaia','akee','alfarroba','amora','azeda','bacaba','bacuri'];

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
			btn('RESET','index()');
			vltr('C');
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
		vltr('C');
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
	/*Fun*/
function sctp(){
	est("D","plv","");
	plvr = srt(frts);
   acnt = rmact(plvr).split("");
	console.log(plvr);
    ltrs = plvr.split("");
		for(let i = 0; i  < ltrs.length; i++){
			est("B","plv",`<h1 id="${i}">_&nbsp;</h1>`);
			
	}
pts = Array.from(new Set(acnt));
	

	
}
function enter(){
	document.getElementById('lt').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    bjg();
  }
});
    }
function rmact (txt){      
 
    text = txt.toUpperCase();                                                         
    txt = txt.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
    txt = txt.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
    txt = txt.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
    txt = txt.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
    txt = txt.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
    txt = txt.replace(new RegExp('[Ç]','gi'), 'C');
    return txt;                 
}
