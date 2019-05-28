//Exercício 01
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
const usuario = 'Amélia';
const idade = 25;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos')

//Exercício 02
//O curso da Reprograma acontece na Estação Hack que fica localizada em São Paulo / SP, no bairro Bela Vista, na "Avenida Paulista", nº 1374.
let endereco = {
  curso: 'Reprograma',  
  local: 'Estação Hack',
  rua: 'Avenida Paulista',
  numero: 1374,
  bairro: 'Bela Vista',
  cidade: 'São Paulo',
  uf: 'SP'
};

console.log('O curso da ' + endereco.curso + ' acontece na ' + endereco.local + ' que fica localizada em ' + endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro + ', na ' + endereco.rua + ', número ' + endereco.numero);

//Exercício 03
//A Bruna possui as habilidades: Javascript, ReactJS, Redux
//A Gabriela possui as habilidades: VueJS, Ruby on Rails, Elixir

// let usuarios = [
//     {
//       nome: 'Bruna',
//       habilidades: ['Javascript', 'ReactJS', 'Redux']
//     },
//     {
//       nome: 'Gabriela',
//       habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
//     }
// ];


// console.log('A ' + usuarios[0].nome + ' possui as habilidades: ' + usuarios[0].habilidades);
// console.log('A ' + usuarios[1].nome + ' possui as habilidades: ' + usuarios[1].habilidades);

let usuarios = [
    {
      nome: "Bruna",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriela",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
      nome: "Julia",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];
  
  function exibeHabilidades(usuarios) {  
      for (elemento of usuarios) {
        console.log(
            //`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.toString()}`
            `A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join(" - ")}`
            // join junta os elementos dentro do array e espera um separador que deve ser declarado entre os parênteses que seguem a função;
            //o "toString" transforma esse mesmo array em uma string;
        );
      }
    }
  
  exibeHabilidades(usuarios);

// JOIN --> array.join("separador");


//Exercício 04

const alunas = [
    { nome: "Ingrid", idade: 26, materia_preferida: "JavaScript" },
    { nome: "Gabi", idade: 25, materia_preferida: "JQuery" },
    { nome: "Isa", idade: 24, materia_preferida: "Bootstrap" }
  ];

//map
let idades = alunas.map(alunas[0].idade);

//filter

//find
