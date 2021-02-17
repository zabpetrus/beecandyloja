/*
**************************************************
Document Javascript
página produtos

**************************************************
*/

function resetBox()
{
    var tam, container, atributo;
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    tam = container.length;        
    for(j = 0; j < tam; j++)
    {
        var atributo = container.item(j).hasAttribute("style");
        if(atributo)
        {
            container.item(j).removeAttribute("style");
        }
    }
}


function mostraCor( nomedacor )
{
    var i, j, container, tam, havedata, hasColor, div_selec, status, atributo;        
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    tam = container.length;
    resetBox();   
    for(i = 0; i < tam; i++)
    {
        div_selec = container.item(i).getElementsByTagName("img").item(0);
        havedata = div_selec.hasAttribute("data-cor");
        hasColor = div_selec.getAttribute("data-cor");

        if((havedata == true) && (hasColor == nomedacor))
        {
            container.item(i).style.display = "inherit";
        }
        else
        {
            container.item(i).style.display = "none";
        }          
        
    }        
    window.clearInterval(mostraCor);
}

function check_boxes( valor )
{
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    resetBox();   
    
    for(i = 0; i < container.length; i++)
    {
        div_selec = container.item(i).getElementsByTagName("img").item(0);
        alt = div_selec.getAttribute("alt");

        if(alt.search(valor) != -1)
        {
            container.item(i).style.display = "inherit";
        }
        else
        {
            container.item(i).style.display = "none";
        }        
    }
}

function procurar( umvalor )
{
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    resetBox();   
    
    for(i = 0; i < container.length; i++)
    {
        div_selec = container.item(i).getElementsByTagName("img").item(0);
        alt = div_selec.getAttribute("alt");

        if(alt.search(umvalor) != -1)
        {
            container.item(i).style.display = "inherit";
        }
        else
        {
            container.item(i).style.display = "none";
        }        
    }
}

var selection_box = document.getElementById("categorias").addEventListener("change", function()
{
    var i, j, candy, container, data_selection, div_selec;       

    candy = this.value;
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    resetBox();   
    
    for(i = 0; i < container.length; i++)
    {
        div_selec = container.item(i).getElementsByTagName("img").item(0);
        if(div_selec.hasAttribute("data-collection") && ( div_selec.getAttribute("data-collection")==candy))
        {
            container.item(i).style.display = "inherit";
        }            
        else
        {
            if(candy=="")
            {
                resetBox();
            }
            container.item(i).style.display = "none";
        }
    }
});

document.getElementById("procura_produto").addEventListener("click", function()
{
    var x = document.getElementById("pr").value;    
    procurar( x );
});
