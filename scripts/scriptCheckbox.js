// Mapeamento dos textos em inglês e espanhol
const translations = {
    pt: {
        msgPlaceholder: 'Digite seu texto...',
        msgExclamation: 'Apenas letras minúsculas e sem acento.',
        btnCrip: 'Criptografar',
        btnDescrip: 'Descriptografar',
        title: 'Mensagem não encontrada.',
        description: 'Digite um texto que você deseja criptografar ou descriptografar.',
    },

    es: {
        msgPlaceholder: 'Introduce tu texto...',
        msgExclamation: 'Solo letras minúsculas y sin acentos.',
        btnCrip: 'Encriptar',
        btnDescrip: 'Desencriptar',
        title: 'Mensaje no encontrado.',
        description: 'Introduzca el texto que desea cifrar o descifrar.',
    }
  };
  
const languageCheckbox = document.getElementById('language');
languageCheckbox.addEventListener('change', function() {
  const selectedLanguages = getSelectedLanguages();
  const selectedLanguage = selectedLanguages[0]; // Obtém o valor da primeira posição da matriz
  updateContent(selectedLanguage);
});

function getSelectedLanguages() {
  const selectedLanguages = [];
  if (languageCheckbox.checked) {
    selectedLanguages.push(languageCheckbox.value);
  }
  else {
    // Lógica para o checkbox não marcado
    selectedLanguages.push("pt");
  }
  return selectedLanguages;
}
function updateContent(selectedLanguages) {
    console.log(selectedLanguages);
    const textAreaElement = document.getElementById('texto-usuario');
    const msgExclamationElement = document.getElementById('msgExclamation');
    const btnCripElement = document.getElementById('botao-criptografar');
    const btnDescripElement = document.getElementById('botao-descriptografar');
    const titleElement = document.getElementById('title')
    const descriptionElement = document.getElementById('description');
  
    // Verifica se o idioma está disponível nas traduções
    if (translations.hasOwnProperty(selectedLanguages)) {
      const translation = translations[selectedLanguages];
      textAreaElement.placeholder = translation.msgPlaceholder;
      msgExclamationElement.textContent = translation.msgExclamation;
      btnCripElement.textContent = translation.btnCrip;
      btnDescripElement.textContent = translation.btnDescrip;
      titleElement.textContent = translation.title;
      descriptionElement.textContent = translation.description;
    }
  }

/*function updateContent(language) {
    console.log(language);
    */
  