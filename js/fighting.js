let Charcter1 = 'red';
let Charcter2 = 'red';
let Charcter3 = 'red';
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const gameContainer = document.getElementById('gameContainer');
const playerDiv = document.getElementById('player');
const playerDiv2 = document.getElementById('player2');
const playerDiv3 = document.getElementById('player3');
const timer = document.getElementById('timer');
let touching = false;
let started = false;
document.getElementById('player').style.display = "block";
document.getElementById('player2').style.display = "block";
document.getElementById('player3').style.display = "block";
const player = {
    x: 21.978021978021978,
    y: 3.6630036630036633,
    width: 5.567765567765568,
    height: 3.8095238095238098,
    speed: 0.6,
    velocityY: 0,
    gravity: -0.03,
    jumping: false,
    BP:100
};
const player2 = {
    x: 3.6630036630036633,
    y: 3.6630036630036633,
    width: 5.567765567765568,
    height: 3.8095238095238098,
    speed: 0.6,
    velocityY: 0,
    gravity: -0.03,
    jumping: false,
    BP:100
};
const player3 = {
    x: 36.630036630036633,
    y: 3.6630036630036633,
    width: 5.567765567765568,
    height: 3.8095238095238098,
    speed:0.6,
    velocityY: 0,
    gravity: -0.03,
    jumping: false,
    BP:100
};
let platforms = [
    { x:0,y:0,width:100,height:1.611721611721612},//This is the ground ***DON"T CHANGE THE ORDER***
];
setInterval(TimerCheck,1000)
const keys = {};
document.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});
document.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});
let platformCount = 0;
function gameLoop() {
    if(started == true){
    if (keys['ArrowLeft']) {
        player.x -= player.speed;
        playerDiv.style.animation = `0.5s ease 0s infinite normal none running ${Charcter1}-state-moving-left`
    }
    if (keys['ArrowRight']) {
        player.x += player.speed;
        playerDiv.style.animation = `0.5s ease 0s infinite normal none running ${Charcter1}-state-moving-right`
    }
    if (keys['a']||keys['A']) {
        player2.x -= player2.speed;
        playerDiv2.style.animation = `0.5s ease 0s infinite normal none running ${Charcter2}-state-moving-left`
    }
    if (keys['d']||keys['D']) {
        player2.x += player2.speed;
        playerDiv2.style.animation = `0.5s ease 0s infinite normal none running ${Charcter2}-state-moving-right`
    }
    if (keys['j']||keys['J']) {
        player3.x -= player3.speed;
        playerDiv3.style.animation = `0.5s ease 0s infinite normal none running ${Charcter3}-state-moving-left`
    }
    if (keys['l']||keys['L']) {
        player3.x += player3.speed;
        playerDiv3.style.animation = `0.5s ease 0s infinite normal none running ${Charcter3}-state-moving-right`
    }
    //not moving
    if (!keys['ArrowLeft']&&!keys['ArrowRight']) {
        if(playerDiv.style.animation == `0.5s ease 0s infinite normal none running ${Charcter1}-state-moving-left`){
        playerDiv.style.backgroundImage = `url("assets/turtle/${Charcter1}/(state-ready-left).png")`;
        }else if(playerDiv.style.animation == `0.5s ease 0s infinite normal none running ${Charcter1}-state-moving-right`){
        playerDiv.style.backgroundImage = `url("assets/turtle/${Charcter1}/(state-ready-right).png")`;
        }
        setTimeout(() => { playerDiv.style.animation = ``; }, 200);
    }
    if (!keys['a']&&!keys['A']&&!keys['d']&&!keys['D']) {
        if(playerDiv2.style.animation == `0.5s ease 0s infinite normal none running ${Charcter2}-state-moving-left`){
        playerDiv2.style.backgroundImage = `url("assets/turtle/${Charcter2}/(state-ready-left).png")`;
        }else if(playerDiv2.style.animation == `0.5s ease 0s infinite normal none running ${Charcter2}-state-moving-right`){
        playerDiv2.style.backgroundImage = `url("assets/turtle/${Charcter2}/(state-ready-right).png")`;
        }
        setTimeout(() => { playerDiv2.style.animation = ``; }, 200);
    }
    if (!keys['j']&&!keys['J']&&!keys['l']&&!keys['L']) {
        if(playerDiv3.style.animation == `0.5s ease 0s infinite normal none running ${Charcter3}-state-moving-left`){
        playerDiv3.style.backgroundImage = `url("assets/turtle/${Charcter3}/(state-ready-left).png")`;
        }else if(playerDiv3.style.animation == `0.5s ease 0s infinite normal none running ${Charcter3}-state-moving-right`){
        playerDiv3.style.backgroundImage = `url("assets/turtle/${Charcter3}/(state-ready-right).png")`;
        }
        setTimeout(() => { playerDiv3.style.animation = ``; }, 200);
    }

    //jumping
    if (keys['ArrowUp'] && player.jumping == false && player.speed != 0) {
            player.jumping = true;
            player.velocityY = 1;

    }
    if((keys['w']|| keys['W']) && player2.jumping == false && player2.speed != 0){
            player2.jumping = true;
            player2.velocityY = 1;
    }
    if((keys['i']|| keys['I']) && player3.jumping == false && player3.speed != 0){
            player3.jumping = true;
            player3.velocityY = 1;
    }
    player.velocityY += player.gravity;
    player.y += player.velocityY;
    player2.velocityY += player2.gravity;
    player2.y += player2.velocityY;
    player3.velocityY += player3.gravity;
    player3.y += player3.velocityY;
    platforms.forEach(platform => {
        if (areTouching(player,platform)) {
            if (player.velocityY < 0) {
                player.y = platform.y + platform.height;
                player.velocityY = 0;
                player.jumping = false;
            }
        }
        if (areTouching(player2,platform)) {
            if (player2.velocityY < 0) {
                player2.y = platform.y + platform.height;
                player2.velocityY = 0;
                player2.jumping = false;
            }
        }
        if (areTouching(player3,platform)) {
            if (player3.velocityY < 0) {
                player3.y = platform.y + platform.height;
                player3.velocityY = 0;
                player3.jumping = false;
            }
        }
    });

    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x + player.width > 100) {
        player.x = 100 - player.width;
    }
    if (player2.x < 0) {
        player2.x = 0;
    }
    if (player2.x + player2.width > 100) {
        player2.x = 100 - player2.width;
    }
    if (player3.x < 0) {
        player3.x = 0;
    }
    if (player3.x + player3.width > 100) {
        player3.x = 100 - player3.width;
    }
    playerDiv.style.left = player.x + 'vw';
    playerDiv.style.bottom = player.y + 'vw';
    playerDiv2.style.left = player2.x + 'vw';
    playerDiv2.style.bottom = player2.y + 'vw';
    playerDiv3.style.left = player3.x + 'vw';
    playerDiv3.style.bottom = player3.y + 'vw';
    requestAnimationFrame(gameLoop);
}
}
function areTouching(player,player2) {
    if(
    player2.x < player.x + player.width &&
    player2.x + player2.width > player.x &&
    player2.y < player.y + player.height &&
    player2.y + player2.height > player.y){
        return true
    }
}
function areTouchingAOE(AOE,player2) {
    if(
    player2.x < (AOE.x*1.5) + AOE.width &&
    player2.x + player2.width > (AOE.x*1.5) &&
    player2.y < (AOE.y*1.5) + (AOE.height) &&
    player2.y + player2.height > (AOE.y*1.5)){
        return true
    }
}
function random(min,max) {
return Math.floor((Math.random())*(max-min+1))+min;
}
function TimerCheck(){
    if(started == true){
        if (parseInt(timer.textContent) >= 1) {
            timer.textContent = parseInt(timer.textContent) - 1
        }
        else{
            started = false
            document.getElementById('endDiv').style.display = 'block';
            
        }
    }
}
function createPlatforms() {
    platforms.forEach(platform => {
        const platformDiv = document.createElement('div');
        platformDiv.classList.add('platform');
        platformDiv.style.bottom = platform.y + 'vw';
        platformDiv.style.height = platform.height + 'vw';
        platformDiv.style.backgroundImage = 'url("assets/other/cloud.png")';
        platformDiv.style.backgroundColor = 'transparent';
        platformDiv.style.borderBottom = 'solid rgb(250, 230, 151)';
        platformDiv.style.borderRight = 'solid rgb(250, 230, 151)';
        platformDiv.style.borderLeft = 'solid rgb(250, 230, 151)';
        platformDiv.style.left = platform.x + 'vw';
        platformDiv.style.width = platform.width + 'vw'; 
        gameContainer.appendChild(platformDiv);
    });
}    

window.onbeforeunload = function() {
     return "Nah don't leave";
};
function startGame() {
    document.getElementById('selectCharcter').style.display = 'none';
    document.getElementById('endDiv').style.display = 'none'
    document.getElementById('gameContainer').style.display = 'block';
    playerDiv.style.backgroundImage = `url("assets/turtle/${Charcter1}/(state-ready-left).png")`;
    playerDiv2.style.backgroundImage = `url("assets/turtle/${Charcter2}/(state-ready-right).png")`;
    playerDiv3.style.backgroundImage = `url("assets/turtle/${Charcter3}/(state-ready-left).png")`;
    playerDiv.style.backgroundSize = "5.567765567765568vw 3.8095238095238098vw";
    playerDiv2.style.backgroundSize = "5.567765567765568vw 3.8095238095238098vw";
    playerDiv3.style.backgroundSize = "5.567765567765568vw 3.8095238095238098vw";
    playerDiv.style.width = "5.567765567765568vw";
    playerDiv2.style.width = "5.567765567765568vw";
    playerDiv3.style.width = "5.567765567765568vw";
    playerDiv.style.height = "3.8095238095238098vw";
    playerDiv2.style.height = "3.8095238095238098vw";
    playerDiv3.style.height = "3.8095238095238098vw";
    player.width = 5.567765567765568;
    player2.width = 5.567765567765568;
    player3.width = 5.567765567765568;
    player.height = 3.8095238095238098;
    player2.height = 3.8095238095238098;
    player3.height = 3.8095238095238098;
    player.x = 150;
    player.y = 50;
    player2.x = 50;
    player2.y = 50;
    if(multimode == '2'){
        player3.y = 1364
        player3.x = 1;
    }else if(multimode == '3'){
        player3.y = 50;
        player3.x = 300;
    }
    
    timer.textContent = document.getElementById('timeSet').value
    started = true;
    createPlatforms()
    gameLoop()
    playerDiv.style.opacity = 1
    playerDiv2.style.opacity = 1
    if (multimode == '3') {
        playerDiv3.style.opacity = 1
        player3.jumping = false;
        player3.gravity = -0.3;
    }
}
window.startGame = startGame;
//Menu stuff
let shopClickCount = 0;
let settingClickCount = 0;
let submit1 = false;
let submit2 = false;
let submit3 = false;
let multimode = null;
let audio = document.getElementById('audio');
let keyBindings = {
    player1: localStorage.getItem("player1") || "W",
    player2: localStorage.getItem("player2") || "ARROWRIGHT",
    player3: localStorage.getItem("player3") || "J"
};
let dark = {
    backgroundColor: 'darkblue',
    text: 'teal',
    multi: 'darkred',
    single: 'darkslategrey',
    menus: 'blue'
};
let light = {
    backgroundColor: 'blue',
    text: 'teal',
    multi: 'red',
    single: 'DodgerBlue',
    menus: 'teal'
};
let color = light;

function setting() {
    if (settingClickCount % 2 == 0) {
        document.getElementById('settings').style.display = 'block';
        document.getElementById('shopbutton').style.display = 'none';
        document.getElementById('modeSelect').style.display = 'none';
    } else {
        document.getElementById('settings').style.display = 'none';
        document.getElementById('shopbutton').style.display = 'block';
        document.getElementById('modeSelect').style.display = 'block';
        localStorage.setItem("volume", document.getElementById("slider").value);
    }
    settingClickCount++;
}

function volume() {
    let audiovolume = document.getElementById('slider').value;
    audio.volume = (audiovolume / 100);
}

function select1() {
    if (Charcter1 == 'red') {
        img1.src = 'assets/turtle/box/(state-ready-left).png';
        Charcter1 = 'box';
    } else if (Charcter1 == 'box') {
        img1.src = 'assets/turtle/paint/(state-ready-left).png';
        Charcter1 = 'paint';
    } else if (Charcter1 == 'paint') {
        img1.src = 'assets/turtle/yellow/(state-ready-left).png';
        Charcter1 = 'yellow';
    } else if (Charcter1 == 'yellow') {
        img1.src = 'assets/turtle/red/(state-ready-left).png';
        Charcter1 = 'red';
    }
}

function select2() {
    if (Charcter1 == 'paint') {
        img1.src = 'assets/turtle/box/(state-ready-left).png';
        Charcter1 = 'box';
    } else if (Charcter1 == 'yellow') {
        img1.src = 'assets/turtle/paint/(state-ready-left).png';
        Charcter1 = 'paint';
    } else if (Charcter1 == 'red') {
        img1.src = 'assets/turtle/yellow/(state-ready-left).png';
        Charcter1 = 'yellow';
    } else if (Charcter1 == 'box') {
        img1.src = 'assets/turtle/red/(state-ready-left).png';
        Charcter1 = 'red';
    }
}

function select3() {
    if (Charcter2 == 'red') {
        img2.src = 'assets/turtle/box/(state-ready-right).png';
        Charcter2 = 'box';
    } else if (Charcter2 == 'box') {
        img2.src = 'assets/turtle/paint/(state-ready-right).png';
        Charcter2 = 'paint';
    } else if (Charcter2 == 'paint') {
        img2.src = 'assets/turtle/yellow/(state-ready-right).png';
        Charcter2 = 'yellow';
    } else if (Charcter2 == 'yellow') {
        img2.src = 'assets/turtle/red/(state-ready-right).png';
        Charcter2 = 'red';
    }
}

function select4() {
    if (Charcter2 == 'paint') {
        img2.src = 'assets/turtle/box/(state-ready-right).png';
        Charcter2 = 'box';
    } else if (Charcter2 == 'yellow') {
        img2.src = 'assets/turtle/paint/(state-ready-right).png';
        Charcter2 = 'paint';
    } else if (Charcter2 == 'red') {
        img2.src = 'assets/turtle/yellow/(state-ready-right).png';
        Charcter2 = 'yellow';
    } else if (Charcter2 == 'box') {
        img2.src = 'assets/turtle/red/(state-ready-right).png';
        Charcter2 = 'red';
    }
}

function select5() {
    if (Charcter3 == 'red') {
        img3.src = 'assets/turtle/box/(state-ready-left).png';
        Charcter3 = 'box';
    } else if (Charcter3 == 'box') {
        img3.src = 'assets/turtle/paint/(state-ready-left).png';
        Charcter3 = 'paint';
    } else if (Charcter3 == 'paint') {
        img3.src = 'assets/turtle/yellow/(state-ready-left).png';
        Charcter3 = 'yellow';
    } else if (Charcter3 == 'yellow') {
        img3.src = 'assets/turtle/red/(state-ready-left).png';
        Charcter3 = 'red';
    }
}
  
function select6() {
    if (Charcter3 == 'paint') {
        img3.src = 'assets/turtle/box/(state-ready-left).png';
        Charcter3 = 'box';
    } else if (Charcter3 == 'yellow') {
        img3.src = 'assets/turtle/paint/(state-ready-left).png';
        Charcter3 = 'paint';
    } else if (Charcter3 == 'red') {
        img3.src = 'assets/turtle/yellow/(state-ready-left).png';
        Charcter3 = 'yellow';
    } else if (Charcter3 == 'box') {
        img3.src = 'assets/turtle/red/(state-ready-left).png';
        Charcter3 = 'red';
    }
}

function Submit1() {
    submit1 = true;
    if (multimode == '2' && submit2 == true) {
        startGame();
    } else if (multimode == '3' && submit2 == true && submit3 == true){
        startGame();
    }
}
function Submit2() {
    submit2 = true;
    if (multimode == '2' && submit1 == true ) {
        startGame();
    }
    else if(multimode == '3' && submit1 == true && submit3 == true ){
        startGame()
    }
}
function Submit3() {
    submit3 = true;
    if ( submit1 == true && submit2 == true ) {
        startGame();
    }
}
function rebindKey(action) {
    let newKey = prompt(`Press a new key for ${action}:`);
    if (newKey) {
        keyBindings[action] = newKey.toUpperCase();
        localStorage.setItem(action, keyBindings[action]); 
        // Update displayed key in settings
        document.getElementById(action).textContent = newKey.toUpperCase();
    }
}
function changeTheme() {
    if (document.getElementById('theme').value == 'dark') {
        color = dark;
        document.getElementById('gameScreen').style.backgroundColor = color.backgroundColor;
        document.getElementById('settings').style.backgroundColor = color.menus;
        document.getElementById('theme').style.backgroundColor = color.menus;
        document.getElementById('modeSelect').style.backgroundColor = color.menus;
        document.getElementById('gameContainer').style.backgroundColor = color.single;
    } else if (document.getElementById('theme').value == 'light') {
        color = light;
        document.getElementById('gameScreen').style.backgroundColor = color.backgroundColor;
        document.getElementById('settings').style.backgroundColor = color.menus;
        document.getElementById('theme').style.backgroundColor = color.menus;
        document.getElementById('modeSelect').style.backgroundColor = color.menus;
        document.getElementById('gameContainer').style.backgroundColor = color.single;
    }
}

function updateFPS() {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;

    function calculateFPS() {
        frameCount++;
        const now = performance.now();
        const delta = now - lastTime;

        if (document.getElementById('fpsonoff').checked == true) {
            document.getElementById("fpsCounter").style.display = 'block';
        } else {
            document.getElementById("fpsCounter").style.display = 'none';
        }

        if (delta >= 1000) { // Update every second
            fps = Math.round((frameCount / delta) * 1000);
            document.getElementById("fpsCounter").innerText = `FPS: ${fps}`;
            frameCount = 0;
            lastTime = now;
        }

        requestAnimationFrame(calculateFPS);
    }

    requestAnimationFrame(calculateFPS);
}

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    // Update keybindings display on load
    //document.getElementById('player1').textContent = keyBindings.player1;
    //document.getElementById('player2').textContent = keyBindings.player2;
    //document.getElementById('player3').textContent = keyBindings.player3;
});

function loadSettings() {
    let volume = localStorage.getItem("volume");
    if (volume !== undefined) {
        document.getElementById("slider").value = volume;
        audio.volume = volume / 100;
    }
}
function multi1() {
    document.getElementById('modeSelect').style.display = 'none';
    document.getElementById('settingIcon').style.display = 'none';
    document.getElementById('shopbutton').style.display = 'none';
    //document.getElementById('Shop').style.backgroundColor = color.menus;
    document.getElementById('selectCharcter').style.display = 'block';
    document.getElementById('selectCharcter2').style.display = 'block';
    document.getElementById('selectCharcter1').style.position = 'absolute';
    document.getElementById('selectCharcter1').style.left = '5%'; 
    document.getElementById('img2').style.width = '400px'; 
    document.getElementById('selectCharcter2').style.position = 'absolute';
    document.getElementById('selectCharcter2').style.right = '5%'; 
    document.getElementById('img1').style.width = '400px'; 
    document.getElementById('selectCharcter3').style.display = 'none'; 
    document.getElementById('img3').style.display = 'none'; 
    player3.gravity = 0;
    multimode = '2';
}
function multi2() { 
    document.getElementById('modeSelect').style.display = 'none';
    document.getElementById('settingIcon').style.display = 'none';
    document.getElementById('shopbutton').style.display = 'none';
    //document.getElementById('Shop').style.backgroundColor = color.menus;
    document.getElementById('selectCharcter').style.display = 'block';
    document.getElementById('selectCharcter1').style.display = 'block'; 
    document.getElementById('selectCharcter2').style.display = 'block'; 
    document.getElementById('selectCharcter3').style.display = 'block'; 
    document.getElementById('selectCharcter1').style.position = 'absolute';
    document.getElementById('selectCharcter1').style.left = '5%'; 
    document.getElementById('selectCharcter1').style.bottom = '50%'; 
    document.getElementById('img2').style.width = '350px';  
    document.getElementById('selectCharcter2').style.position = 'absolute';
    document.getElementById('selectCharcter2').style.right = '5%'; 
    document.getElementById('selectCharcter2').style.bottom = '50%';
    document.getElementById('img1').style.width = '350px';  
    document.getElementById('selectCharcter3').style.position = 'absolute';
    document.getElementById('selectCharcter3').style.left = '50%'; 
    document.getElementById('selectCharcter3').style.top = '50%'; 
    document.getElementById('selectCharcter3').style.transform = 'translate(-50%, -50%)';
    document.getElementById('img3').style.width = '350px'; 
    multimode = '3'; 
}
function changeBackground(theValue) {
    if(theValue == 'sky'){
        platforms = [
            {x: 0, y: 0, width: 1365, height: 20},
            {x: 0, y: 100, width: 200, height: 20},
            {x: 1200, y: 200, width: 200, height: 20},
            {x: 1000, y: 300, width: 200, height: 20},
            {x: 800, y: 400, width: 200, height: 20},
            {x: 600, y: 500, width: 200, height: 20},
            {x: 400, y: 600, width: 200, height: 20},
            {x: 200, y: 700, width: 200, height: 20},
        ]
    }else if(theValue == 'forest'){
        platforms = [
            {x: 0, y: 0, width: 1365, height: 20},
            {x: 0, y: 100, width: 200, height: 20},
            {x: 200, y: 200, width: 200, height: 20},
            {x: 400, y: 300, width: 200, height: 20},
            {x: 600, y: 400, width: 200, height: 20},
            {x: 800, y: 500, width: 200, height: 20},
            {x: 1000, y: 600, width: 200, height: 20},
            {x: 1200, y: 700, width: 200, height: 20},
        ]
    }
    else if(theValue == 'pond'){}
    else if(theValue == 'city'){}
    else if(theValue == 'tank'){}
    else if(theValue == 'sea'){}
    gameContainer.style.backgroundImage = `url("assets/backgrounds/${theValue}.png")`;
    gameContainer.style.backgroundSize = 'cover';
    gameContainer.style.backgroundRepeat = 'no-repeat';
}
function attack(){
}