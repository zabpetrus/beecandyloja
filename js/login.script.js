/*
**************************************************
Document Javascript
página login

**************************************************
*/



function showStatus(login, senha)
{
    document.getElementById("login").removeAttribute("class");
    if((login.value != "abc")||(senha.value != "123")||(login.value == " ")||(senha.value == " "))
    {
        document.getElementById("login").setAttribute("class","treme");
        if(senha.value==" ")
        {
            document.getElementById("msg_error1").innerHTML = "O campo login não pode estar vazio.";
        }
        return false;
    }
    else
    {
        return true;
    }
}

document.getElementById("submeter").addEventListener("click", function()
{    
    var login = document.getElementById("username");
    var senha = document.getElementById("password");

    var status = showStatus(login, senha);
    var formul = document.getElementById("login");
    if(formul.getAttribute("class") == "treme")
    {
        formul.removeAttribute("class");
    }

    if(status == true)
    {
        formul.setAttribute("action","index.html");
        localStorage.setItem("lastname", "Smith");
        formul.submit();
    }
    else
    {
        login.value = "";
        senha.value = "";
        alert("Ops!") ;
        document.getElementById("login").setAttribute("class","treme");
    }
});

function return_history()
{
    window.history.back();
}
