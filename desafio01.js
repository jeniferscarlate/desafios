
const nota1 = 4;
const nota2 = 4;
const nota3 = 4;

const media = (nota1 + nota2 + nota3)/3;

if(media >= 7){
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está APROVADO!`);
}
else if(media >= 5 && media <= 6){
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está REPROVADO!`);
}
else{
    console.log(`A média do aluno é ${media.toFixed(2)}. O aluno está de RECUPERAÇÃO!`);
}