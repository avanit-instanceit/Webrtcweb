window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
recognition = new SpeechRecognition();
recognition.interimResults = true;


function startspeech() {
    recognition.start();
    recognition.onresult = (event) => {
        console.log(event);
        const speechToText = event.results[0][0].transcript;
        console.log(speechToText);

//        window.state = {
//            speech: speechToText
//        };
     };
 };