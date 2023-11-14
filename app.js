var numeroSecreto = parseInt(Math.random() * 1001);


while(chute != numeroSecreto){

    var chute = prompt('Digite o número entre 1 e 1000');

    if (chute == numeroSecreto){
        alert('Acertou!');
    } else if (chute > numeroSecreto){
        alert('Errou... o número secreto é menor');
    }else if (chute < numeroSecreto){
        alert('Errou... o número secreto é maior');
    }
}

/*
Na segunda aula da imersão, aprendemos a criar um jogo chamado Mentalista, onde o objetivo 
é adivinhar um número sorteado.

Os comandos utilizados foram:

parseInt(Math.random() * 1001): Esse comando gera um número aleatório entre 0 e 1000 e o 
converte para um número inteiro. Esse número será o número secreto que o jogador precisa 
adivinhar.

while(chute != numeroSecreto): Esse comando cria um laço de repetição que irá executar o c
ódigo dentro dele enquanto a condição chute != numeroSecreto for verdadeira. Ou seja, o 
código será repetido até que o jogador acerte o número secreto.

var chute = prompt('Digite um número entre 0 e 1000'): Esse comando exibe um prompt na tela, 
onde o jogador pode digitar um número. O número digitado pelo jogador será armazenado na 
variável chute.

if (chute == numeroSecreto) { ... }: Esse comando verifica se o número digitado pelo jogador 
é igual ao número secreto. Se for igual, exibe um alerta informando que o jogador acertou.

else if (chute > numeroSecreto) { ... }: Esse comando verifica se o número digitado pelo 
jogador é maior que o número secreto. Se for maior, exibe um alerta informando que o número 
secreto é menor.

else if (chute < numeroSecreto) { ... }: Esse comando verifica se o número digitado pelo 
ogador é menor que o número secreto. Se for menor, exibe um alerta informando que o número 
secreto é maior.

Esses comandos são utilizados para controlar o fluxo do jogo e dar feedback ao jogador 
sobre seus palpites. O jogo continua até que o jogador acerte o número secreto.
*/