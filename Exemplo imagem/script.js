// const clicou =()=>{
    // Estre aspas, retorna em mensagem
//     console.log ("Deu certo")
// }
// querySelectorAll (usado para class)
let lista=document.querySelectorAll('.item')

// console.log(lista)

// getElementById (usado para id)
let next= document.getElementById('proximo')
let prev=document.getElementById('anterior')

let contar=lista.length
// Porque queremos que o número ativo sempre seja o 0
let ativo= 0
// console.log(contar)

next.onclick=()=>{
    // console.log("proximo")
    let desativar=document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    // ativo=ativo+1
    // lista[1].classList.add('ativo')

    // quando o ativo dentro da lista for 2, ele fica 0
    if(ativo>=contar-1){
        ativo=0
    }else{
        ativo=ativo+1
    }
    lista[ativo].classList.add('ativo')
}

prev.onclick=()=>{
    // console.log("proximo")
    let desativar=document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    // ativo=ativo+1
    // lista[1].classList.add('ativo')
    
    if(ativo>=contar-1){
        ativo=0
    }else{
        ativo=ativo+1
    }
    lista[ativo].classList.add('ativo')

}
