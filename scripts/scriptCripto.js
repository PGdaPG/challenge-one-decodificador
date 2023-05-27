
var regexMinusculas = /^[a-z]$/;
var regexMaiusculas = /^[a-zA-Z]+\n$/;

function autoResizeTextare(el){ 
    el.style.height = "auto"
    el.style.height = el.scrollHeight + "px";
}
function transformaMinuscula() {
        var textoMinusculo = textoUsuario.value
        textoMinusculo = textoMinusculo.toLowerCase();
        textoUsuario.value = textoMinusculo;
}
function testeRegex(texto) {
    texto = texto.replace(/\n/gi,"");
    var regexMinusculas = /^[a-z ]+\n?$/;
    var regexMaiusculas = /^[a-zA-Z ]+\n?$/;

        if(regexMinusculas.test(texto)) {
            return true;
        }
        else if(regexMaiusculas.test(texto)){
            var respostaUsuario = confirm("Você digitou Letra Maiuscula. Gostaria de transformar em minusculas?");
            if (respostaUsuario) {
                transformaMinuscula();
              }
              else {
                alert("Digite Apenas Letras Minusculas.!");
                return false;
              }
        }
        else {
            alert("Digite Apenas Letras Minusculas.!");
            return false;
        }
}

function criptografar() {
    var newString = textoUsuario.value;
    if(testeRegex(newString)) {
        newString = newString.replace(/e/gi,"enter");
        newString = newString.replace(/i/gi,"imes");
        newString = newString.replace(/a/gi,"ai");
        newString = newString.replace(/o/gi,"ober");
        newString = newString.replace(/u/gi,"ufat");
    
        textoSaida.textContent = newString;
    
        if (newString.length > 2){
            divMensagemNaoOk.style.display = 'none';
            divMensagemOk.style.display = 'flex';
            autoResizeTextare(textoSaida);
        }
        else {
            divMensagemNaoOk.style.display = 'flex';
            divMensagemOk.style.display = 'none';
        }
    }
}

function descriptografar() {
    var newString = textoUsuario.value;
    if(testeRegex(newString)) { 
         
newString = newString.replace(/enter/gi,"e");
    newString = newString.replace(/imes/gi,"i");
    newString = newString.replace(/ai/gi,"a");
    newString = newString.replace(/ober/gi,"o");
    newString = newString.replace(/ufat/gi,"u");      
         textoSaida.textContent = newString; 
      
         if (newString.length > 2){ 
             divMensagemNaoOk.style.display = 'none'; 
             divMensagemOk.style.display = 'flex'; 
             autoResizeTextare(textoSaida); 
         } 
         else { 
             divMensagemNaoOk.style.display = 'flex'; 
             divMensagemOk.style.display = 'none'; 
         } 
     }
}

function copiar() {
    textoSaida.select();
    document.execCommand('copy');
}

var textoUsuario = document.querySelector(".are-texto-usuario");
textoUsuario.focus();
var texto = textoUsuario.value;
//trecho que verifica quando o usuario digitou algo no textare, e redmenciona 
textoUsuario.addEventListener("input", () => {
    setTimeout(() => {
        autoResizeTextare(textoUsuario);
      }, 0);
  });
//keydown é um parametro que verifica se alguma tecla foi clicada e event,key armazena atecla.
textoUsuario.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.key === 'Backspace' || event.key === 'Delete' || event.ctrlKey === true) { //ctrlKey identifica se foi apertado ctrl + alguma tecla
            autoResizeTextare(textoUsuario);
          }
      }, 0); //0 milissegundos geralmente é feito para agendar a execução do código para a próxima iteração do ciclo de eventos JavaScript, 
  });

var buttonCriptografar = document.querySelector("#botao-criptografar");
buttonCriptografar.onclick = criptografar;

var buttonDescriptografar = document.querySelector("#botao-descriptografar");
buttonDescriptografar.onclick = descriptografar;

var buttonCopiar = document.querySelector("#botao-copiar");
buttonCopiar.onclick = copiar;

var textoSaida =document.getElementById("are-texto-saida");

var divMensagemOk = document.querySelector(".mensagem-encontrada");
var divMensagemNaoOk = document.querySelector(".mensagem-nao-encontrada");

divMensagemOk.style.display = 'none';

var divAreQuadradoEntrada = document.querySelector(".are-quadrado-entrada");
