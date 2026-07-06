const lista=document.getElementById("lista");

function mostrar(){

const texto=document.getElementById("buscar").value.toLowerCase();

const marca=document.getElementById("marca").value;

lista.innerHTML="";

celulares

.filter(c=>

(marca==""||c.marca==marca)

&&

c.modelo.toLowerCase().includes(texto)

)

.forEach(c=>{

lista.innerHTML+=`

<div class="card">

<div class="logo">

${c.marca.charAt(0)}

</div>

<div class="modelo">

${c.modelo}

</div>

<div class="marca">

${c.marca}

</div>

<div class="info">

<p><b>Procesador:</b> ${c.procesador}</p>

<p><b>Binario soportado:</b> ${c.Binario}</p>

<p><b>Version:</b> ${c.Version}</p>

</div>

<div class="descripcion">

${c.descripcion}

</div>

</div>

`;

});

}

mostrar();

buscar.addEventListener("keyup",mostrar);

marca.addEventListener("change",mostrar);