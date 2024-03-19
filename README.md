# Desafios em JavaScript

## Desafio 01 👩🏻‍💻

Escreva um código em JavaScript que resolva o problema descrito no 
livro Lógica de Programação I, p.,   
em que temos que obter as 3 notas de um aluno, calcular a média (>= 7) e exibir se o aluno foi aprovado,   
reprovado (<= 4) ou se ficou para exame (>= 5).   
Não é necessário ler as notas, você pode defini-las com variáveis.

 Você precisará utilizar uma estrutura de decisão composta, como a seguir:
 ~~~js
 if (condicao1) {
    código da condição 1
    } else if (condicao2) {
   código da condição 2
 } else {
    código se nenhuma das condições for verdadeira
 }
~~~
##

## Desafio 02 👩🏻‍💻

Instruções  
Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

Orientações:

- Utilize o método *prompt()* do objeto window para realizar a leitura dos dados de entrada.  
- Utilize a fórmula **IMC = peso / altura²** para calcular o IMC.  
- Utilize a estrutura if-else para classificar o IMC de acordo com a tabela da OMS:  

IMC  | Indicação
-----|----------  
Abaixo de 18,5| Abaixo do peso  
18,5 - 24,9| Peso normal  
25,0 - 29,9| Sobrepeso  
30,0 - 34,9| Obesidade grau I  
35,0 - 39,9| Obesidade grau II  
Acima de 40,0| Obesidade grau III  

## Desafio 03 👩🏻‍💻

Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a   
temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.  

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

Saída (1): valor convertido na escala de conversão.

**Fórmulas:**

De | Para | Fórmulas
---| -----| --------
Celsius| Fahrenheit| tF = (tC * 9/5) + 32
Celsius| Kelvin| tK = tC + 273.15
Fahrenheit| Celsius| tC = (tF - 32) * 5/9
Fahrenheit| Kelvin| tK = (tF + 459.67) * 5/9
Kelvin| Celsius| tC = tK - 273.15
Kelvin| Fahrenheit| tF = tK * 9/5 - 459.67
