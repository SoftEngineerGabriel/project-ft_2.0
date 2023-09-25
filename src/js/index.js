const buttonPLay = document.getElementById('play');
const buttonStop = document.getElementById('stop');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const minutes = Number(minutesDisplay.textContent);



//funtion

function countdown(){
    setTimeout(function(){
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        secondsDisplay.textContent = "00";

        if(minutes <= 0){
            return //se os minutos da aplicação for 00:00 ou minutes <0 a aplicação vai parar
        }

        if(seconds <= 0){
            seconds = 60;
            

            minutesDisplay.textContent = String(minutes -1).padStart(2, '0');
        }

        secondsDisplay.textContent = String(seconds -1).padStart(2, '0');
        countdown();

    }, 1000)

}

buttonPLay.addEventListener('click', ()=>{
    countdown()
})