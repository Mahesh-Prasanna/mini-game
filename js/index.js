const player = document.getElementById('player');
const ground = document.getElementById('ground');

let dx = 0;
let dy = 5;
let acceleration = 0.3;
let f = 0;

// let yUp = 0;

let index = 1;

const draw = ()=>{
    if(dy !=0){
        player.style.backgroundImage = `url('img/templerun/Jump__00${index++}.png') `
   
    }else if( dx != 0){
        player.style.backgroundImage = `url('img/templerun/Run__00${index++}.png') `
        
    }else if(f==1){
        player.style.backgroundImage = `url('img/templerun/Dead__00${index++}.png')`
    }else{
        player.style.backgroundImage = `url('img/templerun/Idle__00${index++}.png')`

    }
    if(index>9)index=1,f=0;


    if( player.offsetWidth + player.offsetLeft + dx >= innerWidth ){
        dx = 0;
        player.style.left = `${innerWidth-player.offsetWidth}px`;

    } else if(player.offsetLeft < 0 ){
        dx = 0;
       player.style.left = '0';
    }

    if(dy < -30) dy = -10;

    dy += acceleration;

    if((player.offsetTop + player.offsetHeight) > ground.offsetTop){
        dy = 0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
        acceleration =0;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop + dy}px`;
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);


// setInterval(() => {
    

//     if(dy !=0){
//         player.style.backgroundImage = `url('../img/templerun/Jump__00${index++}.png') `
   
//     } else if( dx != 0){
//         player.style.backgroundImage = `url('../img/templerun/Run__00${index++}.png') `
        
//     }else{
//         player.style.backgroundImage = `url('../img/templerun/Idle__00${index++}.png') `

//     }
//     if(index>9)index=1;


//     if( player.offsetWidth + player.offsetLeft + dx >= innerWidth ){
//         dx = 0;
//         player.style.left = `${innerWidth-player.offsetWidth}px`;

//     } else if(player.offsetLeft < 0 ){
//         dx = 0;
//        player.style.left = '0';
//     }

//     if(dy < -30) dy = -10;

//     dy += acceleration;

//     if((player.offsetTop + player.offsetHeight) > ground.offsetTop){
//         dy = 0;
//         player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
//         acceleration =0;
//     }
//     player.style.left = `${player.offsetLeft + dx}px`;
//     player.style.top = `${player.offsetTop + dy}px`;
//     // dx=0;
// },10);





addEventListener('keydown', ({key}) =>{
    if(key === 'ArrowRight'){
        index = 1;
        dx = 10;
        player.classList.remove('turn');

    }else if(key === 'ArrowLeft'){
        index = 1;
        dx = -10;
        player.classList.add('turn');
    }if(key === `ArrowUp`){
        index = 1;
        // dx=0;
        dy = -10;  
        acceleration = 0.2;
    }if(key === ` `){
        index = 1;
        f = 1;

    }

});

addEventListener('keyup', ({key}) =>{
    if(key === 'ArrowRight' ||  key === 'ArrowLeft') {
        dx = 0;
    }
    // dx=0;

});

let j=0;
let t1=0;
const interval = 1;
// function repaint(timestamp){
//     if(!t1) t1= timestamp;
//     const diff = timestamp -t1;
//     if(diff>= (interval * 1000)){
//         t1=timestamp;
//         console.log('Painted: ' + j++);
//     }
//     requestAnimationFrame(repaint)

// };
// requestAnimationFrame(repaint);