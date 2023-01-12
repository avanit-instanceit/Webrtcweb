
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
])

async function detectFaceFromImage(base64){

  const img = await faceapi.fetchImage("data:image/png;base64,"+base64);
  const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
  // console.log(detections.detection.classScore);

  if(detections == undefined){
    return false;
  }else{
    const score = detections.detection.classScore;
    if(score > 0.80){
      return true;
    }else{
      return false;
    }
  }
}