document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLocaleLowerCase());
});

let botao = document.querySelector('.combo button') as HTMLButtonElement;
    botao.addEventListener('click',()=>{
    let song = document.querySelector('#input') as HTMLInputElement;
    let valueSong: string = song.value
    if(valueSong !== ''){
        let songArray = valueSong.split('');
        playComposition(songArray);
    }
});

function playSound(sound: string){
    let audioElement = document.querySelector(`#s_${sound}`) as HTMLAudioElement;
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) as HTMLElement;

    console.log(audioElement);
    if(audioElement){   
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('on');
        setTimeout(() => {
            keyElement.classList.remove('on');
        }, 200);
    }
};


function playComposition(songArray: string[]){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);            
        }, wait);

        wait += 250;
    };
}