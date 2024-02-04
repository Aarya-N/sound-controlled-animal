https://teachablemachine.withgoogle.com/models/msv4T8EBu/

function start()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bCCujDFXo/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else 
    {
        console.log(result);
        random_number_r = Math.floor(Math.random()*225)+1;
        random_number_g = Math.floor(Math.random()*225)+1;
        random_number_b = Math.floor(Math.random()*225)+1;

        document.getElementById("result_label").innerHTML='I can hear -'+
        result[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy -'+
        (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('cat.jpeg');
        img1 = document.getElementById('dog.jpeg');
        img2 = document.getElementById('cow.jpeg');
        img3 = document.getElementById('tiger.jpeg');

        if(result[0].label == "meow meow")
        {
            img.src='cat.jpeg';
        }
        if(result[0].label == "braking")
        {
            img1.src='dog.jpeg';
            
        }
        if(result[0].label == "mooing")
        {
            
            img2.src='cow.jpeg';
            
        }
        if(result[0].label == "mooing")
        {
            
            img3.src='tiger.jpeg';
            
        }
        








        9
        

    }
}
