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
let powerupcount = 0;
let it = 0;
let PowerupTypes = ['invisibility.gif','speed.gif', 'jump.gif', 'gravity.gif', 'auto-switch.gif', 'teleport.gif', 'freeze.gif','growing.gif','shrinking.gif','time+.gif','time-.gif'];
document.getElementById('player').style.display = "block";
document.getElementById('player2').style.display = "block";
document.getElementById('player3').style.display = "block";
setInterval(spawnPowerups,5000/*30000*/)
const player = {
    x: 21.978021978021978,
    y: 3.6630036630036633,
    width: 2.783882783882784,
    height: 1.9047619047619049,
    speed: 0.21978021978021978,
    velocityY: 0,
    gravity: -0.021978021978021976,
    jumping: false,
    jumping2: false,
    it: false,
    Powerup:[]
};
const player2 = {
    x: 3.6630036630036633,
    y: 3.6630036630036633,
    width: 2.783882783882784,
    height: 1.9047619047619049,
    speed: 0.21978021978021978,
    velocityY: 0,
    gravity: -0.021978021978021976,
    jumping: false,
    jumping2: false,
    it: true,
    Powerup:[]
};
const player3 = {
    x: 36.630036630036633,
    y: 3.6630036630036633,
    width: 2.783882783882784,
    height: 1.9047619047619049,
    speed: 0.21978021978021978,
    velocityY: 0,
    gravity: -0.021978021978021976,
    jumping: false,
    jumping2: false,
    it: false,
    Powerup:[]
};
const player4 = {
    x: 29.304029304029307,
    y: 3.6630036630036633,
    width: 2.783882783882784,
    height: 1.9047619047619049,
    speed: 0.21978021978021978,
    velocityY: 0,
    gravity: -0.021978021978021976,
    jumping: false,
    jumping2: false,
    it: true,
    Powerup:[]
};
let platforms = [
    { x:0,y:0,width:100,height:1.465201465201465},//This is the ground ***DON"T CHANGE THE ORDER***
    { x:0,y:7.326007326007327,width:14.652014652014653,height:1.611721611721612},
    { x:21.978021978021978,y:36.63003663003663,width:14.652014652014653,height:1.611721611721612},
    { x:36.63003663003663,y:29.304029304029307,width:14.652014652014653,height:1.611721611721612},
    { x:0,y:21.978021978021978,width:14.652014652014653,height:1.611721611721612},
    { x:21.978021978021978,y:21.978021978021978,width:14.652014652014653,height:1.611721611721612},
    { x:14.652014652014653,y:14.652014652014653,width:29.304029304029307,height:1.611721611721612},
    { x:65.93406593406593,y:36.63003663003663,width:14.652014652014653,height:1.611721611721612},
    { x:51.28205128205128,y:21.978021978021978,width:36.63003663003663,height:1.611721611721612},
    { x:73.26007326007326,y:14.652014652014653,width:14.652014652014653,height:1.611721611721612},
    { x:80.58608058608058,y:29.304029304029307,width:14.652014652014653,height:1.611721611721612},
    { x:73.26007326007326,y:43.956043956043956,width:14.652014652014653,height:1.611721611721612},
    { x:36.63003663003663,y:43.956043956043956,width:14.652014652014653,height:1.611721611721612},
    { x:59.60805860805861,y:43.956073575742097,width:4.652014652014653,height:1.611721611721612},
    { x:36.63003663003663,y:7.326007326007327,width:14.652014652014653,height:1.611721611721612}
];
const PowerupsOnScreen = []
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
            player.velocityY = 0.6593406593406593;

    }
    if((keys['w']|| keys['W']) && player2.jumping == false && player2.speed != 0){
            player2.jumping = true;
            player2.velocityY = 0.6593406593406593;
    }
    if((keys['i']|| keys['I']) && player3.jumping == false && player3.speed != 0){
            player3.jumping = true;
            player3.velocityY = 0.6593406593406593;
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
        if (areTouching(player,player2) && touching == false) {
            if (player.it && playerDiv2.style.opacity != 0.5) {
                player.it = false;
                player2.it = true;
                player3.it = false;
                playerDiv.classList.remove('it-circle');
                playerDiv2.classList.add('it-circle');
                playerDiv3.classList.remove('it-circle');
            } else if (player2.it && playerDiv.style.opacity != 0.5) {
                player2.it = false;
                player.it = true; 
                player3.it = false;
                playerDiv2.classList.remove('it-circle');
                playerDiv.classList.add('it-circle');
                playerDiv3.classList.remove('it-circle');
            }
            touching = true;
        } else if (areTouching(player,player3) && touching == false) {
            if (player.it && playerDiv3.style.opacity != 0.5) {
                player.it = false;
                player3.it = true;
                player2.it = false;
                playerDiv.classList.remove('it-circle');
                playerDiv3.classList.add('it-circle');
                playerDiv2.classList.remove('it-circle');
            } else if (player3.it && playerDiv.style.opacity != 0.5) {
                player3.it = false;
                player.it = true;
                player2.it = false;
                playerDiv3.classList.remove('it-circle');
                playerDiv.classList.add('it-circle');
                playerDiv2.classList.remove('it-circle');
            }
            touching = true;
        } else if (areTouching(player2,player3) && touching == false) {
            if (player2.it && playerDiv3.style.opacity != 0.5) {
                player2.it = false;
                player3.it = true;
                player.it = false;
                playerDiv2.classList.remove('it-circle');
                playerDiv3.classList.add('it-circle');
                playerDiv.classList.remove('it-circle');
            } else if (player3.it && playerDiv2.style.opacity != 0.5) {
                player3.it = false;
                player2.it = true;
                player.it = false;
                playerDiv3.classList.remove('it-circle');
                playerDiv2.classList.add('it-circle');
                playerDiv.classList.remove('it-circle');
            }
            touching = true;
        } else if (!areTouching(player,player2) && !areTouching(player,player3) && !areTouching(player2,player3)) {
            touching = false;
        }
    });
    PowerupsOnScreen.forEach(powerup => {
        if (areTouching(player, powerup)) {
            if (powerup.type == 'speed.gif') {
                if(player.Powerup.includes('speed.gif')){
                    player.Powerup.indexOf('speed.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                player.speed += 0.07326007326007326;
            } else if (powerup.type == 'jump.gif') {
                player.velocityY += 1.465201465201465;
            } else if (powerup.type == 'gravity.gif') {
                if(player.Powerup.includes('gravity.gif')){
                    player.Powerup.indexOf('gravity.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                player.gravity = -0.014652014652014652;
            } else if (powerup.type == 'auto-switch.gif') {
                if (player.it == true) {
                    player.it = false;
                    playerDiv.classList.remove('it-circle');
                    if (multimode == '2') {
                        player2.it = true;
                        playerDiv2.classList.add('it-circle');
                    } else if (multimode == '3') {
                        if (Math.floor(Math.random() * 2) == 1) {
                            player2.it = true;
                            playerDiv2.classList.add('it-circle');
                        }else{
                            player3.it = true;
                            playerDiv3.classList.add('it-circle');
                        }
                    }
                }
            } else if (powerup.type == 'teleport.gif') {
                player.x = Math.floor(Math.random() * 100);
                player.y = Math.floor(Math.random() * 56.26373626373626);
            } else if (powerup.type == 'freeze.gif') {
                if(player.Powerup.includes('freeze.gif')){
                    player.Powerup.indexOf('freeze.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                player2.speed = 0;
                player3.speed = 0;
            } else if (powerup.type == 'invisibility.gif') {
                if(player.Powerup.includes('invisibility.gif')){
                    player.Powerup.indexOf('invisibility.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                playerDiv.style.opacity = 0.5;
            }
            else if (powerup.type == 'growing.gif') {
                if(player.Powerup.includes('growing.gif')){
                    player.Powerup.indexOf('growing.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                if(player.width == 1.3186813186813187){
                    playerDiv.style.width =2.783882783882784 +'vw';
                    playerDiv.style.height = 1.9047619047619049+'vw';
                    player.width = 2.783882783882784;
                    player.height = 1.9047619047619049;
                    playerDiv.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw'
                }
                else if (player.width < 100) {
                    playerDiv.style.width = player.width + 2.783882783882784 + 'vw';
                    playerDiv.style.height = player.height + 1.9047619047619049 + 'vw'; 
                    player.width += 2.783882783882784;
                    player.height += 1.9047619047619049;
                    playerDiv.style.backgroundSize = player.width + 'vw ' + player.height + 'vw';
                }
            } else if (powerup.type == 'shrinking.gif') {
                if(player.Powerup.includes('shrinking.gif')){
                    player.Powerup.indexOf('shrinking.gif').time += 10;
                }else{
                    player.Powerup.push(powerup);
                }
                if(player.width == 2.783882783882784){
                    playerDiv.style.width = 1.3186813186813187+'vw';
                    playerDiv.style.height = 0.9523809523809524+'vw';
                    player.width = 1.3186813186813187;
                    player.height = 0.9523809523809524;
                    playerDiv.style.backgroundSize = '1.3186813186813187vw 0.9523809523809524vw'
                }
                else if (player.width > 2.783882783882784) {
                    playerDiv.style.width = player.width - 2.783882783882784 + 'vw';
                    playerDiv.style.height = player.height - 1.9047619047619049 + 'vw';
                    player.width -= 2.783882783882784;
                    player.height -= 1.9047619047619049;
                    playerDiv.style.backgroundSize = player.width + 'vw ' + player.height + 'vw';
                }
            }else if(powerup.type == 'time+.gif'){
                timer.textContent = parseInt(timer.textContent) + 10;
            }else if(powerup.type == 'time-.gif'){
                timer.textContent = parseInt(timer.textContent) - 10;
            }
            player.Powerup.push(powerup)
            document.getElementById(powerup.id).remove();
            PowerupsOnScreen.splice(PowerupsOnScreen.indexOf(powerup), 1);
        }
        if (areTouching(player2, powerup)) {
            if (powerup.type == 'speed.gif') {
                if(player2.Powerup.includes('speed.gif')){
                    player2.Powerup.indexOf('speed.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                player2.speed += 0.07326007326007326;
            } else if (powerup.type == 'jump.gif') {
                player2.velocityY += 1.465201465201465;
            } else if (powerup.type == 'gravity.gif') {
                if(player2.Powerup.includes('gravity.gif')){
                    player2.Powerup.indexOf('gravity.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                player2.gravity = -0.014652014652014652;
            } else if (powerup.type == 'auto-switch.gif') {
                if (player2.it == true) {
                    player2.it = false;
                    playerDiv2.classList.remove('it-circle');
                    if (multimode == '2') {
                        player.it = true;
                        playerDiv.classList.add('it-circle');
                    } else if (multimode == '3') {
                        if (Math.floor(Math.random() * 2) == 1) {
                            player.it = true;
                            playerDiv.classList.add('it-circle');
                        }else{
                            player3.it = true;
                            playerDiv3.classList.add('it-circle');
                        }
                    }
                }
            } else if (powerup.type == 'teleport.gif') {
                player2.x = Math.floor(Math.random() * 100);
                player2.y = Math.floor(Math.random() * 56.26373626373626);
            } else if (powerup.type == 'freeze.gif') {
                if(player2.Powerup.includes('freeze.gif')){
                    player2.Powerup.indexOf('freeze.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                player.speed = 0;
                player3.speed = 0;
            } else if (powerup.type == 'invisibility.gif') {
                if(player2.Powerup.includes('invisibility.gif')){
                    player2.Powerup.indexOf('invisibility.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                playerDiv2.style.opacity = 0.5;
            }
            else if (powerup.type == 'growing.gif') {
                if(player2.Powerup.includes('growing.gif')){
                    player2.Powerup.indexOf('growing.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                if(player2.width == 1.3186813186813187){
                    playerDiv2.style.width =2.783882783882784 +'vw';
                    playerDiv2.style.height = 1.9047619047619049+'vw';
                    player2.width = 2.783882783882784;
                    player2.height = 1.9047619047619049;
                    playerDiv2.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw'
                }
                else if (player2.width < 100) {
                    playerDiv2.style.width = player2.width + 2.783882783882784 + 'vw';
                    playerDiv2.style.height = player2.height + 1.9047619047619049 + 'vw'; 
                    player2.width += 2.783882783882784;
                    player2.height += 1.9047619047619049;
                    playerDiv2.style.backgroundSize = player2.width + 'vw ' + player2.height + 'vw';
                }
            } else if (powerup.type == 'shrinking.gif') {
                if(player2.Powerup.includes('shrinking.gif')){
                    player2.Powerup.indexOf('shrinking.gif').time += 10;
                }else{
                    player2.Powerup.push(powerup);
                }
                if(player2.width == 2.783882783882784){
                    playerDiv2.style.width = 1.3186813186813187+'vw';
                    playerDiv2.style.height = 0.9523809523809524+'vw';
                    player2.width = 1.3186813186813187;
                    player2.height = 0.9523809523809524;
                    playerDiv2.style.backgroundSize = '1.3186813186813187vw 0.9523809523809524vw'
                }
                else if (player2.width > 2.783882783882784) {
                    playerDiv2.style.width = player2.width - 2.783882783882784 + 'vw';
                    playerDiv2.style.height = player2.height - 1.9047619047619049 + 'vw';
                    player2.width -= 2.783882783882784;
                    player2.height -= 1.9047619047619049;
                    playerDiv2.style.backgroundSize = player2.width + 'vw ' + player2.height + 'vw';
                }
            }else if(powerup.type == 'time+.gif'){
                timer.textContent = parseInt(timer.textContent) + 10;
            }else if(powerup.type == 'time-.gif'){
                timer.textContent = parseInt(timer.textContent) - 10;
            }
            player2.Powerup.push(powerup)
            document.getElementById(powerup.id).remove();
            PowerupsOnScreen.splice(PowerupsOnScreen.indexOf(powerup), 1);
        }
        if (areTouching(player3, powerup)) {
            if (powerup.type == 'speed.gif') {
                if(player3.Powerup.includes('speed.gif')){
                    player3.Powerup.indexOf('speed.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                player3.speed += 0.07326007326007326;
            } else if (powerup.type == 'jump.gif') {
                player3.velocityY += 1.465201465201465;
            } else if (powerup.type == 'gravity.gif') {
                if(player3.Powerup.includes('gravity.gif')){
                    player3.Powerup.indexOf('gravity.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                player3.gravity = -0.014652014652014652;
            } else if (powerup.type == 'auto-switch.gif') {
                if (player3.it == true) {
                    player3.it = false;
                    playerDiv3.classList.remove('it-circle');
                    if (multimode == '2') {
                        player2.it = true;
                        playerDiv2.classList.add('it-circle');
                    } else if (multimode == '3') {
                        if (Math.floor(Math.random() * 2) == 1) {
                            player2.it = true;
                            playerDiv2.classList.add('it-circle');
                        }else{
                            player.it = true;
                            playerDiv.classList.add('it-circle');
                        }
                    }
                }
            } else if (powerup.type == 'teleport.gif') {
                player3.x = Math.floor(Math.random() * 100);
                player3.y = Math.floor(Math.random() * 56.26373626373626);
            } else if (powerup.type == 'freeze.gif') {
                if(player3.Powerup.includes('freeze.gif')){
                    player3.Powerup.indexOf('freeze.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                player.speed = 0;
                player2.speed = 0;
            } else if (powerup.type == 'invisibility.gif') {
                if(player3.Powerup.includes('invisibility.gif')){
                    player3.Powerup.indexOf('invisibility.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                playerDiv3.style.opacity = 0.5;
            } else if (powerup.type == 'growing.gif') {
                if(player3.Powerup.includes('growing.gif')){
                    player3.Powerup.indexOf('growing.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                if(player3.width == 1.3186813186813187){
                    playerDiv2.style.width = 2.783882783882784+'vw';
                    playerDiv2.style.height = 1.9047619047619049+'vw';
                    player2.width = 2.783882783882784;
                    player2.height = 1.9047619047619049;
                    playerDiv2.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw'
                }
                else if (player3.width < 100) {
                    playerDiv3.style.width = player3.width + 2.783882783882784 + 'vw';
                    playerDiv3.style.height = player3.height + 1.9047619047619049 + 'vw'; 
                    player3.width += 2.783882783882784;
                    player3.height += 1.9047619047619049;
                    playerDiv3.style.backgroundSize = player3.width + 'vw ' + player3.height + 'vw';
                }
            } else if (powerup.type == 'shrinking.gif') {
                if(player3.Powerup.includes('shrinking.gif')){
                    player3.Powerup.indexOf('shrinking.gif').time += 10;
                }else{
                    player3.Powerup.push(powerup);
                }
                if (player3.width > 2.783882783882784) {
                    playerDiv3.style.width = player3.width - 2.783882783882784 + 'vw';
                    playerDiv3.style.height = player3.height - 1.9047619047619049 + 'vw';
                    player3.width -= 2.783882783882784;
                    player3.height -= 1.9047619047619049;
                    playerDiv3.style.backgroundSize = player3.width + 'vw ' + player3.height + 'vw';
                }else if(player3.width == 2.783882783882784){
                    playerDiv3.style.width = 1.3186813186813187+'vw';
                    playerDiv3.style.height = 0.9523809523809524+'vw';
                    player3.width = 1.3186813186813187;
                    player3.height = 0.9523809523809524;
                    playerDiv3.style.backgroundSize = '1.3186813186813187vw 0.9523809523809524vw'
                }
            }else if(powerup.type == 'time+.gif'){
                timer.textContent = parseInt(timer.textContent) + 10;
            }else if(powerup.type == 'time-.gif'){
                timer.textContent = parseInt(timer.textContent) - 10;
            }
            player3.Powerup.push(powerup)
            document.getElementById(powerup.id).remove();
            PowerupsOnScreen.splice(PowerupsOnScreen.indexOf(powerup), 1);
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
function random(min,max) {
return Math.floor((Math.random())*(max-min+1))+min;
}
function TimerCheck(){
    if(started == true){
        if (parseInt(timer.textContent) >= 1) {
            timer.textContent = parseInt(timer.textContent) - 1
            powerDown();
        }
        else{
            started = false
            document.getElementById('endDiv').style.display = 'block';
            if (playerDiv.className == 'it-circle') {
                document.getElementById('h1 end').innerHTML = 'player 2 lost'
            }else if(playerDiv2.className == 'it-circle'){
                document.getElementById('h1 end').innerHTML = 'player 1 lost'
            } else if(playerDiv3.className == 'it-circle'){
                document.getElementById('h1 end').innerHTML = 'player 3 lost'
            }
            else{
                document.getElementById('h1 end').innerHTML = 'no one won'
            }
            timer.textContent = '';
        }
    }
}
function spawnPowerups(NewPowerup,PlatformNumber){
    if(started){
        PlatformNumber = platforms[Math.floor(Math.random() * platforms.length)];
        NewPowerup = {x:null, y:null, width:1.8315018315018317, height:1.8315018315018317, type: null, id:`powerup${powerupcount}`,time:10};
        NewPowerup.x = Math.floor(Math.random() * (PlatformNumber.width - NewPowerup.width)) + PlatformNumber.x;
        NewPowerup.y = PlatformNumber.y+1.465201465201465;
        NewPowerup.type = PowerupTypes[Math.floor(Math.random() * PowerupTypes.length)];
        PowerupsOnScreen.push(NewPowerup);
        const powerupDiv = document.createElement('div');
        powerupDiv.style.borderRadius = '7.326007326007327vw';
        powerupDiv.style.backgroundImage = `url("assets/other/power ups/${NewPowerup.type}")`;
        powerupDiv.style.position = 'absolute';
        powerupDiv.style.width = '1.8315018315018317vw';
        powerupDiv.style.height = '1.8315018315018317vw';
        powerupDiv.style.left = NewPowerup.x + 'vw';
        powerupDiv.style.bottom = NewPowerup.y + 'vw';
        powerupDiv.style.backgroundSize = '1.8315018315018317vw 1.8315018315018317vw';
        powerupDiv.id = NewPowerup.id;
        gameContainer.appendChild(powerupDiv);
        powerupcount++;
        }}
function createPlatforms() {
    platforms.forEach(platform => {
        const platformDiv = document.createElement('div');
        platformDiv.classList.add('platform');
        platformDiv.style.bottom = platform.y + 'vw';
        platformDiv.style.height = platform.height + 'vw';
        if (platformCount == 0) {
            if(gameContainer.style.backgroundImage == 'url("assets/backgrounds/sky.png")'){
                platformDiv.style.backgroundImage = 'url("assets/other/cloud.png")';
                platformDiv.style.backgroundColor = 'transparent';
            }
            else if(gameContainer.style.backgroundImage == 'url("assets/backgrounds/forest.png")'){
                platformDiv.style.backgroundImage = 'url("assets/other/grass.png")';
            }  
            platformDiv.style.left = '0px'
            platformDiv.style.right = '0px'
        }
        else{
            if(gameContainer.style.backgroundImage == 'url("assets/backgrounds/sky.png")'){
                platformDiv.style.backgroundImage = 'url("assets/other/cloud.png")';
                platformDiv.style.backgroundColor = 'transparent';
                platformDiv.style.borderBottom = 'solid rgb(250, 230, 151)';
                platformDiv.style.borderRight = 'solid rgb(250, 230, 151)';
                platformDiv.style.borderLeft = 'solid rgb(250, 230, 151)';
            }
            else if(gameContainer.style.backgroundImage == 'url("assets/backgrounds/forest.png")'){
                platformDiv.style.background = 'url("assets/other/wood.png")'
            }    
            platformDiv.style.left = platform.x + 'vw';
            platformDiv.style.width = platform.width + 'vw'; 
        }
        if(platformCount == 14){
            platformCount = 0;
        }else{
            platformCount++
        }
        gameContainer.appendChild(platformDiv);
    });
}    
function powerDown() {
    player.Powerup.forEach(powerup => {
        if (powerup.time > 0) {
            powerup.time -= 1;
        } else if (powerup.time == 0) {
            if (powerup.type == 'speed.gif') {
                player.speed = 0.21978021978021978;
            } else if (powerup.type == 'gravity.gif') {
                player.gravity = -0.021978021978021978;
            } else if (powerup.type == 'invisibility.gif') {
                playerDiv.style.opacity = 1;
            } else if (powerup.type == 'growing.gif' && player.width > 2.783882783882784) {
                playerDiv.style.width = '2.783882783882784vw';
                playerDiv.style.height = '1.9047619047619049vw';
                player.width = 2.783882783882784;
                player.height = 1.9047619047619049;
                playerDiv.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'shrinking.gif' && player.width < 2.783882783882784) {
                playerDiv.style.width = '2.783882783882784vw';
                playerDiv.style.height = '1.9047619047619049vw';
                player.width = 2.783882783882784;
                player.height = 1.9047619047619049;
                playerDiv.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'freeze.gif') {
                player2.speed = 0.21978021978021978;
                player3.speed = 0.21978021978021978;
            }
            player.Powerup.splice(player.Powerup.indexOf(powerup), 1);
        }
    });
    player2.Powerup.forEach(powerup => {
        if (powerup.time > 0) {
            powerup.time -= 1;
        } else if (powerup.time == 0) {
            if (powerup.type == 'speed.gif') {
                player2.speed = 0.21978021978021978;
            } else if (powerup.type == 'gravity.gif') {
                player2.gravity = -0.021978021978021978;
            } else if (powerup.type == 'invisibility.gif') {
                playerDiv2.style.opacity = 1;
            } else if (powerup.type == 'growing.gif' && player2.width > 2.783882783882784) {
                playerDiv2.style.width = '2.783882783882784vw';
                playerDiv2.style.height = '1.9047619047619049vw';
                player2.width = 2.783882783882784;
                player2.height = 1.9047619047619049;
                playerDiv2.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'shrinking.gif' && player2.width < 2.783882783882784) {
                playerDiv2.style.width = '2.783882783882784vw';
                playerDiv2.style.height = '1.9047619047619049vw';
                player2.width = 2.783882783882784;
                player2.height = 1.9047619047619049;
                playerDiv2.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'freeze.gif') {
                player3.speed = 0.21978021978021978;
                player.speed = 0.21978021978021978;
            }
            player2.Powerup.splice(player2.Powerup.indexOf(powerup), 1);
        }
    });
    player3.Powerup.forEach(powerup => {
        if (powerup.time > 0) {
            powerup.time -= 1;
        } else if (powerup.time == 0) {
            if (powerup.type == 'speed.gif') {
                player3.speed = 0.21978021978021978;
            } else if (powerup.type == 'gravity.gif') {
                player3.gravity = -0.021978021978021978;
            } else if (powerup.type == 'invisibility.gif') {
                playerDiv3.style.opacity = 1;
            } else if (powerup.type == 'growing.gif' && player3.width > 2.783882783882784) {
                playerDiv3.style.width = '2.783882783882784vw';
                playerDiv3.style.height = '1.9047619047619049vw';
                player3.width = 2.783882783882784;
                player3.height = 1.9047619047619049;
                playerDiv3.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'shrinking.gif' && player3.width < 2.783882783882784) {
                playerDiv3.style.width = '2.783882783882784vw';
                playerDiv3.style.height = '1.9047619047619049vw';
                player3.width = 2.783882783882784;
                player3.height = 1.9047619047619049;
                playerDiv3.style.backgroundSize = '2.783882783882784vw 1.9047619047619049vw';
            } else if (powerup.type == 'freeze.gif') {
                player2.speed = 0.21978021978021978;
                player.speed = 0.21978021978021978;
            }
            player3.Powerup.splice(player3.Powerup.indexOf(powerup), 1);
        }
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
    playerDiv2.style.backgroundImage = `url("assets/turtle/${Charcter2}/(state-ready-left).png")`;
    playerDiv3.style.backgroundImage = `url("assets/turtle/${Charcter3}/(state-ready-left).png")`;
    playerDiv.style.backgroundSize = "2.783882783882784vw 1.9047619047619049vw";
    playerDiv2.style.backgroundSize = "2.783882783882784vw 1.9047619047619049vw";
    playerDiv3.style.backgroundSize = "2.783882783882784vw 1.9047619047619049vw";
    playerDiv.style.width = "2.783882783882784vw";
    playerDiv2.style.width = "2.783882783882784vw";
    playerDiv3.style.width = "2.783882783882784vw";
    playerDiv.style.height = "1.9047619047619049vw";
    playerDiv2.style.height = "1.9047619047619049vw";
    playerDiv3.style.height = "1.9047619047619049vw";
    player.width = 2.783882783882784;
    player2.width = 2.783882783882784;
    player3.width = 2.783882783882784;
    player.height = 1.9047619047619049;
    player2.height = 1.9047619047619049;
    player3.height = 1.9047619047619049;
    player.x = 10.989010989010989;
    player.y = 3.6630036630036633;
    player2.x = 3.6630036630036633;
    player2.y = 3.6630036630036633;
    if(multimode == '2'){
        player3.y = 99.92673992673993
        player3.x = 1;
    }else if(multimode == '3'){
        player3.y = 3.6630036630036633;
        player3.x = 21.978021978021978;
    }
    
    timer.textContent = document.getElementById('timeSet').value
    started = true;
    if(multimode == '3'){
        it = Math.floor(Math.random() * 3)
    }
    else if(multimode == '2'){
        it = Math.floor(Math.random() * 2)
    }
    if (it == 0 && playerDiv.classList != 'it-circle') {
        player.it = true
        player2.it = false
        player3.it = false
        playerDiv.classList.add('it-circle');
        playerDiv2.classList.remove('it-circle');
        playerDiv3.classList.remove('it-circle');
    }
    else if (it == 1 && playerDiv2.classList != 'it-circle') {
        player2.it = true
        player.it = false
        player3.it = false
        playerDiv2.classList.add('it-circle');
        playerDiv.classList.remove('it-circle');
        playerDiv3.classList.remove('it-circle');
    }
    else if (it == 2 && playerDiv3.classList != 'it-circle') {
        player3.it = true
        player.it = false
        player2.it = false
        playerDiv3.classList.add('it-circle');
        playerDiv.classList.remove('it-circle');
        playerDiv2.classList.remove('it-circle');
    }
    createPlatforms()
    gameLoop()
    powerupcount=0;
    PowerupsOnScreen.forEach(powerup => {
        document.getElementById(powerup.id).remove()
    });
    PowerupsOnScreen.length = 0
    player.Powerup = []
    player2.Powerup = []
    player3.Powerup = []
    playerDiv.style.opacity = 1
    playerDiv2.style.opacity = 1
    if (multimode == '3') {
        playerDiv3.style.opacity = 1
        player3.jumping = false;
        player3.gravity = -0.021978021978021976;
    }
    player.speed = 0.21978021978021978;
    player2.speed = 0.21978021978021978;
    player3.speed = 0.21978021978021978;
    player.gravity = -0.021978021978021976;
    player2.gravity = -0.021978021978021976;
    player.jumping = false;
    player2.jumping = false;
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
    document.getElementById('img2').style.width = '29.304029304029307vw'; 
    document.getElementById('selectCharcter2').style.position = 'absolute';
    document.getElementById('selectCharcter2').style.right = '5%'; 
    document.getElementById('img1').style.width = '29.304029304029307vw'; 
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
    document.getElementById('selectCharcter1').style.bottom = '17vw'; 
    document.getElementById('img2').style.width = '25.64102564102564vw';  
    document.getElementById('selectCharcter2').style.position = 'absolute';
    document.getElementById('selectCharcter2').style.right = '5%'; 
    document.getElementById('selectCharcter2').style.bottom = '17vw';
    document.getElementById('img1').style.width = '25.64102564102564vw';  
    document.getElementById('selectCharcter3').style.position = 'absolute';
    document.getElementById('selectCharcter3').style.left = '50%'; 
    document.getElementById('selectCharcter3').style.top = '32vw'; 
    document.getElementById('selectCharcter3').style.transform = 'translate(-50%, -50%)';
    document.getElementById('img3').style.width = '25.64102564102564vw'; 
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
window.setting = setting;
window.volume = volume;
window.select1 = select1;
window.select2 = select2;
window.select3 = select3;
window.select4 = select4;
window.select5 = select5;
window.select6 = select6;
window.Submit1 = Submit1;
window.Submit2 = Submit2;
window.Submit3 = Submit3;
window.rebindKey = rebindKey;
window.changeTheme = changeTheme;
window.updateFPS = updateFPS;
window.loadSettings = loadSettings;
window.multi1 = multi1;
window.multi2 = multi2;
