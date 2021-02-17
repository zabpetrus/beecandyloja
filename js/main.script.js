/*
**************************************************
Document Javascript
Comum a todas as páginas

**************************************************
*/

writeCookie();

function writeCookie()
{
    var ominilink = document.getElementById("cookie"); 
    if ((localStorage.getItem("lastname") == "")||(localStorage.getItem("lastname") == null))
    {
        ominilink.style.display = "block";
        ominilink.innerHTML = "Login";        
    }
    else
    {
        ominilink.style.display = "none";

        var ncumprimentos = document.createElement("a");
        ncumprimentos.innerHTML = "Bem vindo, " + localStorage.getItem("lastname");
        ncumprimentos.setAttribute("href","javascript:abreform()");
        ominilink.parentElement.appendChild(ncumprimentos);
        
        var sair = document.createElement("a");
        sair.setAttribute("href","javascript:sair()");
        sair.setAttribute("class","querosair");
        sair.innerHTML = "Sair";
        ominilink.parentElement.appendChild(sair);   
    }    
}

function sair()
{
    localStorage.removeItem("lastname");
    location.reload();
}


// Coloca novamente a classe hide para ocultar a div
function fechaform()
{
    var f = document.getElementById("modal");
    f.setAttribute("class","hide");
}

// Abre a janela modal removendo a classe hide
function abreform()
{
    var f = document.getElementById("modal");
    f.removeAttribute("class");
}

function amei()
{    
    var texto = document.getElementById("cont").innerHTML;
    var variavel = parseInt(texto);
    variavel = variavel + 1;
    document.getElementById("cont").innerHTML = variavel;
    alert("Amei!");
}

function alert_addition()
{ 
    alert('Adicionado ao carrinho');
    
}

function return_history()
{
    window.history.back();
}
