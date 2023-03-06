// para referenciar que está pegando informação, sendo referencia de elemento do html
// podemos chamar de contentElement, elementContent ou contentRef

const contentRef = document.querySelector("#content");

// criar elemento dentro do html
// contudo só funciona para texto e de forma simples
// não é muito usado pois é menos complexo

//let texto = document.createTextNode("Texto criado pelo Javascript");

//contentRef.appendChild(texto);

// Colocar conteúdos e repetir em tela
// os dados são obtidos de um API - na prática
// em aula exemplos serão obtidos do js

const noticias = [
  {
    titulo:
      "Esse é o primeiro Post ",
    descricao: "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit",
    url: "#",
  },
  {
    titulo: "Esse é o segundo Post",
    descricao:
      "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit",
    url: "#",
  },
  {
    titulo: "Esse é o terceiro Post",
    descricao:
      "Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit",
    url: "#",
  },
];

// maneira mais eficiente de colocar conteúdos no html (popular, colocar conteúdos)

for (let noticia of noticias) {
  contentRef.innerHTML += `  
    <article>
        <h1>${noticia.titulo}</h1>
        <p>${noticia.descricao}</p>
        <a href="${noticia.url}"></a>
    </article>`
}


