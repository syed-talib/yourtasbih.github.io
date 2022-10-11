run = () =>{

    let t = 0;
    let val = document.getElementById('num').value;
    let tone = document.getElementById('tone');
    let box = document.getElementById('box');
    document.getElementById('num').style.display="none";
    document.getElementById('btn1').style.display="none";

    document.getElementById('plus').addEventListener('click',function(){

                     document.getElementById('demo').innerText=t=t+1;

                     if(val == t){
                        document.getElementById('plus').disabled=true;
                        tone.play();
                        show.innerText="your task is complete press the reset button";
                         box.style.backgroundImage="url('vi.gif')";
                        }
                       
                       
});

}

run2 = () =>{
    location.reload();
}

now = () =>{

    let input = document.getElementById('num').value;
    let show = document.getElementById('show');
    if(input == ''){
        show.innerText="null";
    }
    else if(input.length <=1){

        show.innerText="one";
    }

    else if(input.length <=2){

        show.innerText="tenth";
    }

    else if(input.length <=3){

        show.innerText="hundreds";
    }
    else if(input.length <=4){

        show.innerText="thousands";
    }

    else if(input.length <=5){

        show.innerText="10 thousands" ;
    }

    else if(input.length <=6){

        show.innerText="lack";
    }
    else if(input.length <=7){

        show.innerText="10 lacks";
    }

}