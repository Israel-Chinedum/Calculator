let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let eql = document.querySelector('#equal-to');
let remove = document.querySelector('#remove');
let calcRe = document.querySelector('#calc-result');
let hiddenScreen = document.querySelector('#hidden-screen')
let calcBody = document.querySelector('.calc-body')



btn.forEach(btn =>{
    btn.addEventListener('click', ()=>{

        screen.value += btn.value;
        evaluate2()
       
    })
})

eql.addEventListener('click', evaluate);

function evaluate(){
       if(screen.value != ''){
        let arr = Array.from(screen.value);
        screen.value = '';
      for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'x'){
            arr.splice(i,1,'*');
        }

        screen.value += arr[i];
      }

   
      calcRe.value = '';
   screen.value = eval(screen.value);

       }
             
}

function evaluate2(){

    hiddenScreen.value = '';

    let arr = Array.from(screen.value);

  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 'x'){
        arr.splice(i,1,'*');
    }

    hiddenScreen.value += arr[i];
  }
  
  calcRe.value = eval(hiddenScreen.value);

}


function del(){

    screen.value = screen.value.substring(0, screen.value.length - 1);
    
}

function ac(){
    screen.value = '';
}

function exp(){
    screen.value += 'x10'
}

function ans(){
    screen.value = eval(hiddenScreen.value);
}


calcBody.addEventListener('click', (e)=>{
    switch(e.target.value){
        case 'sin':
            screen.value = Math.sin(screen.value)
            break;
        case 'tan':
            screen.value = Math.tan(screen.value)
            break;
        case 'cos':
            screen.value = Math.cos(screen.value)
            break;
        case 'hyp':
            screen.value = Math.
            break;
        case 'log':
            screen.value = Math.log(screen.value)
    }
})



document.addEventListener('keydown', (e)=>{

    if(e.keyCode == 48 || e.keyCode == 45){
        screen.value += 0;
        evaluate2();
    }

    if(e.keyCode == 49 || e.keyCode == 35){
        screen.value += 1;
        evaluate2();
    }

    if(e.keyCode == 50 || e.keyCode == 40){
        screen.value += 2;
        evaluate2();
    }

    if(e.keyCode == 51 || e.keyCode == 34){
        screen.value += 3;
        evaluate2();
    }

    if(e.keyCode == 52 || e.keyCode == 37){
        screen.value += 4;
        evaluate2();
    }

    if(e.keyCode == 53 || e.keyCode == 12){
        screen.value += 5;
        evaluate2();
    }

    if(e.keyCode == 54 || e.keyCode == 39){
        screen.value += 6;
        evaluate2();
    }

    if(e.keyCode == 55 || e.keyCode == 36){
        screen.value += 7;
        evaluate2();
    }

    if(e.keyCode == 56 || e.keyCode == 38){
        screen.value += 8;
        evaluate2();
    }

    if(e.keyCode == 57 || e.keyCode == 33){
        screen.value += 9;
        evaluate2();
    }

    if(e.keyCode == 106){
        screen.value += 'x';
        evaluate2();
    }

    if(e.keyCode == 111){
        screen.value += '/';
        evaluate2();
    }

    if(e.keyCode == 107){
        screen.value += '+';
        evaluate2();
    }

    if(e.keyCode == 109){
        screen.value += '-';
        evaluate2();
    }

    if(e.keyCode == 13){
        evaluate();
    }

    if(e.keyCode == 8){
        del();
    }

    if(e.keyCode == 67){
        ac();
    }
})