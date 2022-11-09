var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = false;

var forceStop = true;


function startRecognition(lntCode){

    recognition.lang = 'es';

    forceStop = false;

    var translate = "";

    recognition.start();

    recognition.onresult = function(event) {
       
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            translate = event.results[i][0].transcript;
            console.log(translate);
            var data = {
                'action' : 'caption',
                'result' : translate
            };
            window.parent.postMessage(data,"*");
        }
        
    };

    recognition.addEventListener('error',(event) => {
        stopRecognition(false);
        console.log(event);
    });

    recognition.addEventListener('speechend',(event) => {
        if(!forceStop){
            recognition.start();
        }
        console.log(event);
    });

    recognition.addEventListener('start',(event)=>{
        var data = {
            'action' : 'status',
            'result' : true
        };  
        window.parent.postMessage(data,"*");
    });

    recognition.addEventListener('end',(event)=>{
        var data = {
            'action' : 'status',
            'result' : false
        };
        window.parent.postMessage(data,"*");

        if(!forceStop){
            recognition.start();
        }
        console.log("speech recoginition end");
    });

}

function changeRecognitionLng(lntcode){
    recognition.lang = lntcode;
    stopRecognition(false);
}

async function stopRecognition(isforcestop){
    forceStop = isforcestop;
    await recognition.stop();
}

//var source = "https://developer.voicemaker.in/uploads/1667965874459-voicemaker.in-speech.mp3";
//var audio = new Audio();
//audio.src = source;
// audio.autoplay = true;

// function getPermission(){
//     audio.autoplay = true;
// }

// function playaudio(path){
//     audio.src = path;
//     audio.play();
// }




// function otherAudio(){

//     var source = "https://developer.voicemaker.in/uploads/1667966299959-voicemaker.in-speech.mp3";
//     var audio = new Audio();
//     audio.src = source;
//     audio.autoplay = true;
//     audio.play();

// }