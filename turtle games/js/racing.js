let finishDiv = document.getElementById('finishDiv');
let SingleStarted = false;
let shopClickCount = 0;
let settingClickCount = 0;
let MultiStarted = false;
let racer1 = document.getElementById('racer1');
let racer2 = document.getElementById('racer2');
let racer1Right = 10;
let racer2Right = 10;
let multimode = null;/* if true multi player if false single*/
let boxReadyRight = 'assets/turtle/box/(state-ready-right).png';
let paintReadyRight = 'assets/turtle/paint/(state-ready-right).png';
let seayanReadyRight = 'assets/turtle/sea-yan/(state-ready-right).png';
let redReadyRight = 'assets/turtle/red/(state-ready-right).png'
let boxReadyLeft = 'assets/turtle/box/(state-ready-left).png';
let paintReadyLeft = 'assets/turtle/paint/(state-ready-left).png';
let seayanReadyLeft = 'assets/turtle/sea-yan/(state-ready-left).png';
let redReadyLeft = 'assets/turtle/red/(state-ready-left).png';
let Charcter1 = redReadyRight;
let Charcter2 = redReadyRight;
let Charcter1moving;
let Charcter2moving;
let submit1 = false;
let submit2 = false;
let audio = document.getElementById('audioPlayer');
let start = false;
let TurtleTokens = 0;
let shopbutton = document.getElementById('shopbutton');
let speed = 20;
let speedUpgradePrice = 20;
let fastStartUpgradePrice = 100;
let gameScreen = document.getElementById('gameScreen');
let AIwin = 'tbd';
let fastspeed = 20;
let loaded = false;
let keyBindings = {
    player1: localStorage.getItem("player1") || "D",
    player2: localStorage.getItem("player2") || "ARROWRIGHT"
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
setInterval(AIopponent,300)
setInterval(save, 1000);
document.addEventListener('keyup', function(keypressed){
if( start == true){
    if (AIwin == 'tbd') {
        if ( keypressed.key.toUpperCase() === keyBindings.player1.toUpperCase()) {
            if(multimode == false){
                if(Charcter1 == 'assets/turtle/red/(state-ready-right)'){
                    racer1.src = 'assets/turtle/red/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/box/(state-ready-right)'){
                    racer1.src = 'assets/turtle/box/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/paint/(state-ready-right)'){
                    racer1.src = 'assets/turtle/paint/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/sea-yan/(state-ready-right)'){
                    racer1.src = 'assets/turtle/sea-yan/(state-moving1-right).gif';
                }else{
        
                }
                
                racer1Right = racer1Right + speed;
                racer1.style.left = `${racer1Right}px`
            }else{
                if(Charcter1 == 'assets/turtle/red/(state-ready-right)'){
                    racer1.src = 'assets/turtle/red/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/box/(state-ready-right)'){
                    racer1.src = 'assets/turtle/box/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/paint/(state-ready-right)'){
                    racer1.src = 'assets/turtle/paint/(state-moving1-right).gif';
                }
                else if(Charcter1 == 'assets/turtle/sea-yan/(state-ready-right)'){
                    racer1.src = 'assets/turtle/sea-yan/(state-moving1-right).gif';
                }else{
        
                }
                
                racer1Right = racer1Right + 10;
                racer1.style.left = `${racer1Right}px`
            }
        }
    }
}
    

})
document.addEventListener('keyup', function(keypressed){
    if( start == true){
        if( multimode == true){
            if (AIwin == 'tbd') {
                if (keypressed.key.toUpperCase() === keyBindings.player2.toUpperCase()) {
                    if(Charcter2 == 'assets/turtle/red/(state-ready-left)'){
                        racer2.src = 'assets/turtle/red/(state-moving1-left).gif';
                    }else if(Charcter2 == 'assets/turtle/box/(state-ready-left)'){
                        racer2.src = 'assets/turtle/box/(state-moving1-left).gif';
                    }
                    else if(Charcter2 == 'assets/turtle/paint/(state-ready-left)'){
                        racer2.src = 'assets/turtle/paint/(state-moving1-left).gif';
                    }
                    else if(Charcter2 == 'assets/turtle/sea-yan/(state-ready-left)'){
                        racer2.src = 'assets/turtle/sea-yan/(state-moving1-left).gif';
                    }
                    racer2Right = racer2Right + 10;
                    racer2.style.left = `${racer2Right}px`
                }
            }
      }
    }
    
})

function single1(){
    document.getElementById('modeSelect').style.display = 'none';
    document.getElementById('gameScreen').style.backgroundColor = color.single;
    document.getElementById('selectCharcter').style.display = 'block';
    shopbutton.style.display = 'none';
    document.getElementById('settingIcon').style.display = 'none'
    multimode = false;
}
function multi1(){
    document.getElementById('modeSelect').style.display = 'none';
    document.getElementById('settingIcon').style.display = 'none'
    shopbutton.style.display = 'none';
    document.getElementById('Shop').style.backgroundColor = color.menus;
    document.getElementById('selectCharcter').style.display = 'block';
    document.getElementById('selectCharcter2').style.display = 'block';
    document.getElementById('selectCharcter1').style.position = 'absolute';
    document.getElementById('selectCharcter1').style.left = '50px';
    document.getElementById('selectCharcter2').style.position = 'absolute';
    document.getElementById('selectCharcter2').style.right = '50px';
    multimode = true;
}
function multiStart() {
    document.getElementById('selectCharcter').style.display = 'none';
    document.getElementById('raceCourse').style.display = 'block';
    document.getElementById('racer1').src = `${Charcter1}`;
    document.getElementById('racer2').src = `${Charcter2}`;
    start = true
}
function singleStart() {
    document.getElementById('selectCharcter').style.display = 'none';
    document.getElementById('raceCourse').style.display = 'block';
    document.getElementById('racer1').src = `${Charcter1}`;
    document.getElementById('racer2').src = `${Charcter2}`;
    start = true
}
function select1(){
    if (Charcter1 == redReadyRight) {
        img1.src = boxReadyRight;
        Charcter1 = boxReadyRight;
    } else if (Charcter1 == boxReadyRight) {
        img1.src = paintReadyRight;
        Charcter1 = paintReadyRight;
    } else if (Charcter1 == paintReadyRight) {
        img1.src = seayanReadyRight;
        Charcter1 = seayanReadyRight;
    } else if (Charcter1 == seayanReadyRight) {
        img1.src = redReadyRight;
        Charcter1 = redReadyRight;
    }    
}
function select2(){
    if (Charcter1 == paintReadyRight) {
        img1.src = boxReadyRight;
        Charcter1 = boxReadyRight;
    } else if (Charcter1 == seayanReadyRight) {
        img1.src = paintReadyRight;
        Charcter1 = paintReadyRight;
    } else if (Charcter1 == redReadyRight) {
        img1.src = seayanReadyRight;
        Charcter1 = seayanReadyRight;
    } else if (Charcter1 == boxReadyRight) {
        img1.src = redReadyRight;
        Charcter1 = redReadyRight;
    }
    
}
function select3(){
    if (Charcter2 == redReadyRight) {
        img2.src = boxReadyLeft;
        Charcter1 = boxReadyRight;
    } else if (Charcter2 == boxReadyRight) {
        img2.src = paintReadyLeft;
        Charcter2 = paintReadyRight;
    } else if (Charcter2 == paintReadyRight) {
        img2.src = seayanReadyLeft;
        Charcter2 = seayanReadyRight;
    } else if (Charcter2 == seayanReadyRight) {
        img2.src = redReadyLeft;
        Charcter2 = redReadyRight;
    } 
}
function select4(){
    if (Charcter2 == paintReadyRight) {
        img2.src = boxReadyLeft;
        Charcter2 = boxReadyRight;
    } else if (Charcter2 == seayanReadyRight) {
        img2.src = paintReadyLeft;
        Charcter2 = paintReadyRight;
    } else if (Charcter2 == redReadyRight) {
        img2.src = seayanReadyLeft;
        Charcter2 = seayanReadyRight;
    } else if (Charcter2 == boxReadyRight) {
        img2.src = redReadyLeft;
        Charcter2 = redReadyRight;
    }
}
function Submit1() {
    if(multimode == false){
    document.getElementById('selectCharcter').style.display = 'none';
    
    singleStart()
    SingleStarted = true;
    }else{
    submit1 = true;
    if(submit2 == true){  
        multiStart()
        MultiStarted = true;
    }
}
}
function Submit2() {
    submit2 = true
    if(submit1 == true){
        multiStart()
        MultiStarted = true;
        }
}
function AIopponent(){
    if (start == true) {
        if (parseInt(racer1.style.left) >= 710) {
            if (AIwin == 'tbd') {
                finishDiv.style.display = 'block';
                if (multimode == false) {
                    finishDiv.innerHTML = `<h2 style='color:${color.text};'>You won!</h2><h3 style='color:${color.text};'>+20 Turtle Tokens</h3><button onclick='gotomain()'>Go to main screen</button><button onclick='restart()'>Play again</button>`;
                    TurtleTokens = TurtleTokens + 20;
                    AIwin = false;
                } else {
                    finishDiv.innerHTML = `<h2 style='color:${color.text};'>Player 1 won!</h2><button onclick='gotomain()'>Go to main screen</button><button onclick='restart()'>Play again</button>`;
                    AIwin = false;
                }
            }
        }
    
        if (parseInt(racer2.style.left) >= 710) {
            if (AIwin == 'tbd'){
                finishDiv.style.display = 'block';
                if (multimode == false) {
                    finishDiv.innerHTML = `<h2 style='color:${color.text};'>You lost (sorry)</h2><button onclick='gotomain()'>Go to main screen</button><button onclick='restart()'>Play again</button>`;
                    AIwin = true;
                } else {
                    finishDiv.innerHTML = `<h2 style='color:${color.text};'>Player 2 won!</h2><button onclick='gotomain()'>Go to main screen</button><button onclick='restart()'>Play again</button>`;
                    AIwin = true;
                }
            }
        }
        if (multimode == false) {
            if (AIwin == 'tbd') {
                racer2Right = racer2Right + (speed * .9);
                racer2.style.left = `${racer2Right}px`;   
            }
        }
    }    
}

function gotomain(){
    finishDiv.style.display = 'none';
    document.getElementById('modeSelect').style.display = 'block';
    document.getElementById('gameScreen').style.backgroundColor = color.backgroundColor;
    document.getElementById('selectCharcter').style.left = 'none';
    document.getElementById('raceCourse').style.display = 'none';
    racer1.style.left = '10px';
    racer2.style.left = '10px';
    AIwin = 'tbd'; 
    start = false;
    racer2Right = 10;
    racer1Right = 10;
    multimode = false;
    document.getElementById('settingIcon').style.display = 'block'
    shopbutton.style.display = 'block'
}
function restart(){
    finishDiv.style.display = 'none';
    racer1.style.left = '10px';
    racer2.style.left = '10px';
    AIwin = 'tbd'; 
    racer2Right = 10;
    racer1Right = 10;
}
function shop() {
    if (shopClickCount % 2 == 0) {
        document.getElementById('Shop').style.display = 'block';
        document.getElementById('money').textContent = `Turtle Tokens: ${TurtleTokens}`;
        document.getElementById('modeSelect').style.display = 'none';
        document.getElementById('settingIcon').style.display = 'none';
        document.getElementById('upgradeSpeed').textContent = `Speed upgrade:${speedUpgradePrice}TT`
        document.getElementById('upgradeFastStart').textContent = `Fast start upgrade:${fastStartUpgradePrice}TT`
    } else {
        document.getElementById('Shop').style.display = 'none';
        document.getElementById('modeSelect').style.display = 'block';
        document.getElementById('settingIcon').style.display = 'block';
    }
shopClickCount++
}
function setting() {
    if (settingClickCount % 2 == 0) {
        document.getElementById('settings').style.display = 'block'
        document.getElementById('shopbutton').style.display = 'none'
        document.getElementById('modeSelect').style.display = 'none'
    }
    else{
        document.getElementById('settings').style.display = 'none'
        document.getElementById('shopbutton').style.display = 'block'
        document.getElementById('modeSelect').style.display = 'block'
        localStorage.setItem("volume", document.getElementById("slider").value);
    }
    settingClickCount++
}
function volume(){
    let audiovolume = document.getElementById('slider').value;
    audio.volume = (audiovolume / 100);
}
window.onclick = function(){
    let audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play(); // Play the audio after a user interaction
        loadSettings();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const secretCode = 'cheatcode';
    let inputString = '';
    const cheatMenu = document.getElementById('dontCheat');
  
    document.addEventListener('keydown', (event) => {
      inputString += event.key;
      inputString = inputString.slice(-secretCode.length); // Keep only the last 'secretCode.length' characters
  
      if (inputString === secretCode) {
        cheatMenu.style.display = 'block';
        document.getElementById('gamescreen').style.display = 'none';
        gameScreen.style.backgroundColor = 'black';
      }
    });
    loadGame();
  });

  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 0;

  function updateFPS() {
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

      requestAnimationFrame(updateFPS);
  }

  requestAnimationFrame(updateFPS);
  function updateUI() {
    document.getElementById("player1").innerText = keyBindings.player1;
    document.getElementById("player2").innerText = keyBindings.player2;
}
function rebindKey(action) {
    let newKey = prompt(`Press a new key for ${action}:`);
    if (newKey) {
        keyBindings[action] = newKey.toUpperCase();
        localStorage.setItem(action, keyBindings[action]); // Save to localStorage
        updateUI();
    }
}
function loadSettings() {
    let volume = localStorage.getItem("volume");
    if (!(volume == undefined)) {
        if (!(document.getElementById('slider') == volume)) {
            document.getElementById("slider").value = volume;
            audio.volume = volume;
        }
    }
}
function loadGame() {
    let savedData = localStorage.getItem("gameSave");

    if (savedData) {
        let gameData = JSON.parse(savedData);

        // Load the values back into the game
        TurtleTokens = gameData.TurtleTokens || 0;
        speed = gameData.speed || 20;
        fastspeed = gameData.fastspeed || 20;
        speedUpgradePrice = gameData.speedUpgradePrice || 20;
        fastStartUpgradePrice = gameData.fastStartUpgradePrice || 100;
        Charcter1 = gameData.Charcter1 || redReadyRight;
        Charcter2 = gameData.Charcter2 || redReadyRight;
        color = gameData.color === "dark" ? dark : light;
        console.log("Game loaded!", gameData);
    } else {
        console.log("No save data found. Starting fresh.");
    }
    loaded = true
}

updateUI();
function upgradeSpeed(){
    if(TurtleTokens >= speedUpgradePrice){
        speed = speed + 10;
        TurtleTokens = TurtleTokens - speedUpgradePrice;
        speedUpgradePrice = Math.round(speedUpgradePrice *1.5);
        document.getElementById('money').textContent = `Turtle Tokens: ${TurtleTokens}`;
        document.getElementById('upgradeSpeed').textContent = `Speed upgrade:${speedUpgradePrice}TT`
    }
}
function upgradeFastStart(){
    if(TurtleTokens >= fastStartUpgradePrice){
        fastspeed = fastspeed + 10;
        TurtleTokens = TurtleTokens - fastStartUpgradePrice;
        fastStartUpgradePrice = fastStartUpgradePrice *1.5;
        document.getElementById('money').textContent = `Turtle Tokens: ${TurtleTokens}`;
        document.getElementById('upgradeFastStart').textContent = `Fast start upgrade:${fastStartUpgradePrice}TT`
    }
}
function changeTheme(){
    if(document.getElementById('theme').value == 'dark'){
        color = dark
        document.getElementById('gameScreen').style.backgroundColor = color.backgroundColor;
        document.getElementById('settings').style.backgroundColor = color.menus;
        document.getElementById('theme').style.backgroundColor = color.menus;
        document.getElementById('Shop').style.backgroundColor = color.menus;
        document.getElementById('modeSelect').style.backgroundColor = color.menus;
    }else if(document.getElementById('theme').value == 'light'){
        color = light
        document.getElementById('gameScreen').style.backgroundColor = color.backgroundColor;
        document.getElementById('settings').style.backgroundColor = color.menus;
        document.getElementById('theme').style.backgroundColor = color.menus;
        document.getElementById('Shop').style.backgroundColor = color.menus;
        document.getElementById('modeSelect').style.backgroundColor = color.menus;
    }
}
function save() {
    if(loaded == true){
        let saveData = {
            TurtleTokens: TurtleTokens,
            speed: speed,
            fastspeed: fastspeed,
            speedUpgradePrice: speedUpgradePrice,
            fastStartUpgradePrice: fastStartUpgradePrice,
            Charcter1: Charcter1,
            Charcter2: Charcter2,
            color: color === dark ? 'dark' : 'light', // Store as a string
        };
    
        localStorage.setItem("gameSave", JSON.stringify(saveData));
    }

}