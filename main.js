function startFunc(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/74RrRkB9T/model.json", modelReady);
}

function modelReady(){
    console.log("Model loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        document.getElementById("a").innerHTML = "I can hear - "+ results[0].label;

        image_1 = document.getElementById("img_show");
        lbl = document.getElementById("a");

        if(results[0].label == 'Barking'){
            image_1.src = "Dog.png";
        }else if(results[0].label == 'Meowing'){
            image_1.src = "Cat.png";
        }else if(results[0].label == 'Moowing'){
            image_1.src = "Cow.png";
        }else if(results[0].label == 'Roar'){
            image_1.src = "Lion.png";
        }else{
            console.log("Not clear...");
        }

        lbl.innerHTML = "I can hear - "+results[0].label;
    }
}