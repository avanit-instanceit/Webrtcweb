
var audio = new Audio();


function permissionStatus(){
    return audio.autoplay;
}

function giveAudioPermission(){
    audio.autoplay = true;
    console.log(`autoplay permission allowd : ${audio.autoplay}`)
}

function playAudio(path){
    audio.volume = 1.0;
    console.log(audio.autoplay);
    try{
        audio.src = path;
        audio.play();
        handleAudioEvent();
    }catch(e){
        console.log(e);
    }
}

function handleAudioEvent(){
    audio.onplay = function(){
        console.log("play");
        sendStatusToDart("play");
    };
    audio.onabort = function(){
        console.log("abort");
        sendStatusToDart("abort");
    }
    audio.onplaying = function(){
        console.log("playing");
        sendStatusToDart("playing");
    }
    audio.onerror = function(){
        console.log("error");
        sendStatusToDart("error");
    }
    audio.onended = function(){
        console.log("ended");
        sendStatusToDart("ended");
    }
}

function sendStatusToDart(status){
    var data = {
        'action' : 'audiostatus',
        'status' : status
    };

    window.parent.postMessage(data,"*");
}


// async function getBytes(path){
//     // var request = new XMLHttpRequest();
//     // request.open('GET',path,true);
//     // request.responseType = 'arraybuffer';

//     // request.onload = function(){
//     //     console.log(request);
//     // }
//     // fe

//     // request.send();
//     const response = await fetch(path);
//     const data = await response.blob();

//     window.postMessage(data,"*");
// }

