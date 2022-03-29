//SELECIONOU AS TAGS 
// INTERCEPTAR O CLIQUE NO BOTÃO 
// PEGAR AS INFORMAÇÕES QUE ESTÃO DENTRO DO CAMPO 

const btnSortear         = document.querySelector(".botaoSortear")
const textarea           = document.querySelector("textarea")
const tagResultado       = document.querySelector(".resultado p")
const popUpResultado     = document.querySelector(".resultado")
const btnFechar          = document.querySelector(".fechar")

//PEGANDO DADOS DO FOMRULÁRIO
function pegarDadosFormulario(){
    
    //RECUPERANDO VALOR DO CAMPO (TEXTAREA)
    const valorCampo  = textarea.value
    const listaNomes  = valorCampo.split(",")
    const tamanhoArray= listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome        = listaNomes[posicaoNome]
    mostrarResultado(nome)

    textarea.value = ""
    
}

//INTERCEPTANDO O CLIQUE / EXECUTANDO FUNÇÃO
btnSortear.addEventListener("click", pegarDadosFormulario)

//GERANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(tamanhoArray){
    //RETORNA O NÚMERO
    return  Math.floor(Math.random() * (tamanhoArray - 0) + 0)

}

function mostrarResultado(nome){

    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
    
}

function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")

}
btnFechar.addEventListener("click", fecharPopUp)

const toggle = document.querySelector(".botaoDarkMode")
const theme = window.localStorage.getItem("theme");

/* verifica se o tema armazenado no localStorage é escuro */
if (theme === "dark") {document.body.classList.add("dark");
toggle.innerText = "Dark Mode ON"; document.getElementById("logo").src = "./assets/img/Logo - Made By_LP-Ramos_2.png"}
else {toggle.innerText = "Dark Mode OFF"; document.getElementById("logo").src = "./assets/img/Logo - Made By_LP-Ramos.png"}

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  });

toggle.addEventListener("click", () => {
if (toggle.innerText === "Dark Mode ON") {
    toggle.innerText = "Dark Mode OFF";
    } else toggle.innerText = "Dark Mode ON";
});

toggle.addEventListener("click", () => {
    if (toggle.innerText === "Dark Mode ON") {
        document.getElementById("logo").src = "./assets/img/Logo - Made By_LP-Ramos_2.png";
        } else document.getElementById("logo").src = "./assets/img/Logo - Made By_LP-Ramos.png";
    });
    