/*
**************************************************
Document Javascript
página galeria

**************************************************
*/

function limpar_gerenciador_de_galeria()
{
    var x, getcoluna, col_image, atributo;
    x = this.value;
    getcoluna = document.getElementById("mix").getElementsByClassName("row").item(0).getElementsByClassName("column");
    for(i = 0; i < getcoluna.length; i++ )
    {
        col_image = getcoluna.item(i).getElementsByTagName("img");
        for(j = 0; j < col_image.length; j++)
        {
            col_image.item(j).removeAttribute("style");    
        }
    }
}

function gerenciador_de_galeria( valor_do_select )
{
    var getcoluna, col_image;
    limpar_gerenciador_de_galeria();
    
    getcoluna = document.getElementById("mix").getElementsByClassName("row").item(0).getElementsByClassName("column");
    for(i = 0; i < getcoluna.length; i++ )
    {
        col_image = getcoluna.item(i).getElementsByTagName("img")
        for(j = 0; j < col_image.length; j++)
        {
            var data_collection = col_image.item(j).getAttribute("data-collection");

            if(valor_do_select != "")
            {
                if( data_collection != valor_do_select )
                {
                
                    col_image.item(j).style.display = "none";
                }

                else
                {
                    col_image.item(j).style.display = "inherit";
                }           
            }
            else
            {
                limpar_gerenciador_de_galeria();
            }           
        }            
    }
}

/* Coleção Todas, primavera, verão e urbana*/
document.getElementById("collection").addEventListener("change", function()
{
    var x = this.value;   
    limpar_gerenciador_de_galeria();
    gerenciador_de_galeria( x );
});

function procurar( umvalor )
{
    container = document.getElementById("galeria_produtos").getElementsByTagName("section").item(0).getElementsByClassName("block_container");
    limpar_gerenciador_de_galeria();   
    
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

document.getElementById("btn_galeria_search").addEventListener("click", function()
{
    var x = document.getElementById("searchgaleria").value;    
    procurar( x );
});


function passa_por_cima()
{
    var getcoluna, col_image;
    limpar_gerenciador_de_galeria();
    
    getcoluna = document.getElementById("mix").getElementsByClassName("row").item(0).getElementsByClassName("column");
    for(i = 0; i < getcoluna.length; i++ )
    {
        col_image = getcoluna.item(i).getElementsByTagName("img");
        for(j = 0; j < col_image.length; j++)
        {
            var a = document.createElement("a");            
            a.setAttribute("class","vanilla");                   
            a.setAttribute("href","javascript:amei()" );
            a.innerHTML = "&#9829;";
            col_image.item(j).after(a);            
        }
    }
}

passa_por_cima();

/* Organizar por lançamentos tamanho e todos */


function rearrumar( umvalor )
{
    var getcoluna, col_image, selecionado;
    limpar_gerenciador_de_galeria();

    getcoluna = document.getElementById("mix").getElementsByClassName("row").item(0).getElementsByClassName("column");
    for(i = 0; i < getcoluna.length; i++ )
    {
        col_image = getcoluna.item(i).getElementsByTagName("img");
        for(j = 0; j < col_image.length; j++)
        {
            if(umvalor != "")
            {
                selecionado  = col_image.item(j).getAttribute("data-organization");
                if(selecionado != umvalor)
                {
                    col_image.item(j).style.display = "none";
                }            
                else
                {
                    col_image.item(j).style.display = "inherit";
                }    
            }
            else
            {
                limpar_gerenciador_de_galeria();
            }
        }
    }
}

document.getElementById("organization").addEventListener("change", function()
{
    var x = this.value;   
    rearrumar( x );    
});