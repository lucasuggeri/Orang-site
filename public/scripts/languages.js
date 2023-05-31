
// Seletor dos elementos
const menuToggle = document.querySelector('.menu-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownDiv = document.querySelectorAll('#dropdownDiv a')
const elementosP = document.querySelectorAll('p');



// Evento de clique no ícone de menu
menuToggle.addEventListener('click', ()=>{ 
    dropdownContent.classList.add('open');
}); 
  dropdownDiv.forEach((item)=>{
    item.addEventListener('click', (e)=>{
      e.preventDefault();
      switch(item.textContent){
        case "Chinese" :       
            
            for (let i = 0; i < elementosP.length; i++) {
              elementosP[i].innerHTML = languages.chinese[i];
            }
        
          break;
        
        case "Portuguese" :
          
            for (let i = 0; i < elementosP.length; i++) {
              elementosP[i].innerHTML = languages.portuguese[i];
            }
          break;
            
        case "English" :
              
           for (let i = 0; i < elementosP.length; i++) {
                elementosP[i].innerHTML = languages.english[i];
              }
          break;
            }  
          })
    })



// Função para fechar o menu dropdown ao clicar fora dele
document.addEventListener('click', (event) =>{
  const targetElement = event.target;

  if (!targetElement.closest('.dropdown')) {
    dropdownContent.classList.remove('open');
  }
});
