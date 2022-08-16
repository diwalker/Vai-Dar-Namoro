let audios = [
    {caminho:'audios/Ai.mp3', legenda: 'Ai'},
    {caminho:'audios/Aiaiaii.mp3', legenda: 'Aiaiaii'},
    {caminho:'audios/Cavalo.mp3', legenda: 'Cavalo'},
    {caminho:'audios/Cheega.mp3', legenda: 'Cheega'},
    {caminho:'audios/Dança gatinho dança.mp3', legenda: 'Dança gatinho dança'},
    {caminho:'audios/Demaais.mp3', legenda: 'Demaais'},
    {caminho:'audios/É brincadeira ein!.mp3', legenda: 'É brincadeira ein!'},
    {caminho:'audios/Ele goosta.mp3', legenda: 'Ele goosta'},
    {caminho:'audios/Esqueca-tudo.mp3', legenda: 'Esqueca-tudo'},
    {caminho:'audios/Não.mp3', legenda: 'Não'},
    {caminho:'audios/Pare!.mp3', legenda: 'Pare!'},
    {caminho:'audios/Que isso meu filho calma.mp3', legenda: 'Que isso meu filho calma'},
    {caminho:'audios/Que papelao ein.mp3', legenda: 'Que papelao ein'},
    {caminho:'audios/Risada atumalaca.mp3', legenda: 'Risada atumalaca'},
    {caminho:'audios/Tome.mp3', legenda: 'Tome'},
    {caminho:'audios/Ui.mp3', legenda: 'Ui'},
    {caminho:'audios/Vamo dança.mp3', legenda: 'Vamo dança'},
    {caminho:'audios/Xiiii.mp3', legenda: 'Xiiii.mp3'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 18; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});