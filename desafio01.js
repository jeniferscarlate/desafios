// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média (>= 7) e exibir se o aluno foi aprovado, reprovado (<= 4) ou se ficou para exame (<= 5, <= 6). Não é necessário ler as notas, você pode defini-las com variáveis.

// Você precisará utilizar uma estrutura de decisão composta, como a seguir:
// if (condicao1) {
//   // código da condição 1
// } else if (condicao2) {
//   // código da condição 2
// } else {
//   // código se nenhuma das condições for verdadeira
// }


const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;

if(media >= 7){
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está APROVADO!`);
}
else if(media <= 4){
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está REPROVADO!`);
}else{
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está de RECUPERAÇÃO!`);
}