//procurar o botao
document.querySelector("add-time")
.addEventListener('click, cloneField')
//quando clicar no botao
//executar uma acao
function cloneField(){
    const newfield= document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false
    const fields = newfield.querySelectorAll('input')
    
    fields.forEach(function(field){
        field.value=""
    })
    document.querySelector('#schedele-items').appendChild(field)//colocar onde?

}
   //duplicar os campos
   //colocar na pagina