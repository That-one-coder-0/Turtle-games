let start;
/*stores numbers*/
let happiness = 0;
let TankPrice = 20;
let perSecond = 0;
let turtleTokens = 20;
let pondPounds = 20;
let rockReals = 20;
let add = 0;
let Gallons = 0;
let shopClickCount = 0;
let redEaredUpgradePrice =  20;
let yellowBelliedUpgradePrice = 50;
/*names*/
let boyTurtleNames = ['Alejandro','David','Jayden','Jonathan','Issac','Liam','Mason','Noah','Oliver','Oscar','Sebastian','William','Xavier','Zachary'];
let girlTurtleNames = ['Sofia','Maria','Ana','Taylor','Serina','Amanda','Jasmine','Lily','Emily','Isabella','Sophia','Olivia','Ava','Mia'];
/*amounts*/
let redEaredCount = 0;
let yellowBelliedCount = 0;
/*stores names*/
let redEaredName = [];
let yellowBelliedName = [];
/*other*/
setInterval(save, 1000);
setInterval(PerSecond,1000);
if(redEaredCount == 0){
    gebid('shell').style.display = 'none'

}
function gebid(element){
    return document.getElementById(element)
}
function shellclicked(){
    happiness = happiness + add;
    updateEverthing()
}
function openShop(){
    if(shopClickCount % 2 == 0) {
        gebid('Shop').style.display = 'block'
        gebid('aside').style.width = '100vw'
        gebid('ShopButton').textContent = 'Close Shop'
        gebid('TurtleButton').style.display = 'none'
        gebid('ConvertingButton').style.display = 'none'

    }
    else{
        gebid('Shop').style.display = 'none'
        gebid('aside').style.width = 'inherit'
        gebid('ShopButton').textContent = 'Shop'
        gebid('TurtleButton').style.display = 'block'
        gebid('ConvertingButton').style.display = 'block'
    }
    shopClickCount++
    updateEverthing()
}
function buy1() {
    let BuyAmount = parseInt(gebid('BuyAmount').value);
    let i = 0;

    function processBuy1() {
        if (i < BuyAmount) {
            if (turtleTokens >= redEaredUpgradePrice && Gallons > ((redEaredCount + yellowBelliedCount) * 10)) {
                let gender = Math.floor(Math.random() * 2); // Generates 0 or 1
                let name = Math.floor(Math.random() * 13); // Generates a number between 0 and 12
                if (name < boyTurtleNames.length) { // Ensure the name index is valid and not empty
                    if (gender == 0) {
                        redEaredName[`${redEaredCount}`] = boyTurtleNames[name];
                    } else {
                        redEaredName[`${redEaredCount}`] = girlTurtleNames[name];
                    }
                    redEaredCount++;
                    turtleTokens = turtleTokens - redEaredUpgradePrice;
                    redEaredUpgradePrice*= 1.5
                    redEaredUpgradePrice = Math.floor(redEaredUpgradePrice)
                    turtleTokens = Math.floor(turtleTokens)
                    pondPounds = Math.floor(pondPounds)
                    add = add + 1;
                    updateEverthing();
                } else {
                    console.error('Invalid name index or empty name generated:', name);
                }
            }
            i++;
            setTimeout(processBuy1, 0); // Schedule the next iteration
        }
    }
    processBuy1();

}

function buy2() {
    let BuyAmount = parseInt(gebid('BuyAmount').value);
    let i = 0;

    function processBuy2() {
        if (i < BuyAmount) {
            if (turtleTokens >= yellowBelliedUpgradePrice && Gallons > ((redEaredCount + yellowBelliedCount) * 10)) {
                let gender = Math.floor(Math.random() * 2); // Generates 0 or 1
                let name = Math.floor(Math.random() * 13); // Generates a number between 0 and 12
                if (name < boyTurtleNames.length) {
                    if (gender == 0) {
                        yellowBelliedName[yellowBelliedCount] = boyTurtleNames[name];
                    } else {
                        yellowBelliedName[yellowBelliedCount] = girlTurtleNames[name];
                    }
                    yellowBelliedCount++;
                    turtleTokens -= yellowBelliedUpgradePrice;
                    perSecond += 0.5;
                    yellowBelliedUpgradePrice*= 1.5
                    yellowBelliedUpgradePrice = Math.floor(yellowBelliedUpgradePrice)
                    updateEverthing();
                }
            }
            i++;
            setTimeout(processBuy2, 0); // Schedule the next iteration
        }
    }
    processBuy2();
}

function buy3() {
    let BuyAmount = parseInt(gebid('BuyAmount').value);
    let i = 0;

    function processBuy3() {
        if (i < BuyAmount) {
            if (pondPounds >= TankPrice) {
                pondPounds -= TankPrice;
                Gallons += 30;
                TankPrice*= 1.5
                TankPrice = Math.floor(TankPrice)
                updateEverthing();
            }
            i++;
            setTimeout(processBuy3, 0); // Schedule the next iteration
        }
    }
    processBuy3();
}

function updateEverthing(){
    if(redEaredCount > 0 && gebid('shell').style.display == 'none'){
        gebid('shell').style.display = 'block'
    }
    gebid('turtleTokens').innerHTML = `Turtle Tokens: ${turtleTokens}<img src="assets/other/Turtle Token.png" alt="A turtle token" id="turtle" class="shopcurrency">`;
    gebid('pondPounds').innerHTML = `Pond Pounds: ${pondPounds}<img src="assets/other/Pond Pound.png" alt="A pond pound" id="pound" class="shopcurrency">`;
    gebid('rockReals').innerHTML = `Rock Real: ${rockReals}<img src="assets/other/Rock Real.png" alt="A rock real" id="rock" class="shopcurrency">`;
    gebid('turtleconvert').innerHTML = `Turtle Tokens: ${turtleTokens}<img src="assets/other/Turtle Token.png" alt="A turtle token" id="turtle" class="shopcurrency">`;
    gebid('pondconvert').innerHTML = `Pond Pounds: ${pondPounds}<img src="assets/other/Pond Pound.png" alt="A pond pound" id="pound" class="shopcurrency">`;
    gebid('rockconvert').innerHTML = `Rock Reals: ${rockReals}<img src="assets/other/Rock Real.png" alt="A rock real" id="rock" class="shopcurrency">`;
    gebid('happinessconvert').textContent = `Happiness: ${happiness}`;
    gebid('HMT').textContent = `You have ${Gallons/30} tanks or ${Gallons} gallons of water`;
    gebid('HMY').textContent = `You have ${yellowBelliedCount} Yellow Bellied Turtles`;
    gebid('HMR').textContent = `You have ${redEaredCount} Red Eared Turtles`;
    gebid('TC').textContent = `${TankPrice} Pond Pounds`
    gebid('YBC').textContent = `${yellowBelliedUpgradePrice} Turtle Tokens`
    gebid('REC').textContent = `${redEaredUpgradePrice} Turtle Tokens`
    UpdateHappy();
}
function ConvertingMenuOpen(){
    if(shopClickCount % 2 == 0) {
        gebid('convertingMenu').style.display = 'block'
        gebid('aside').style.width = '100vw'
        gebid('ConvertingButton').textContent = 'Close Currency Exchange'
        gebid('TurtleButton').style.display = 'none'
        gebid('ShopButton').style.display = 'none'
    }
    else{
        gebid('convertingMenu').style.display = 'none'
        gebid('aside').style.width = 'inherit'
        gebid('ConvertingButton').textContent = 'Currency Exchange'
        gebid('TurtleButton').style.display = 'block'
        gebid('ShopButton').style.display = 'block'
    }
    shopClickCount++
    updateEverthing()
}
function save() {
    const gameState = {
        happiness,
        turtleTokens,
        pondPounds,
        rockReals,
        add,
        redEaredCount,
        redEaredName,
        redEaredUpgradePrice,
        yellowBelliedUpgradePrice,
        yellowBelliedCount,
        yellowBelliedName,
        perSecond,
        Gallons,
        TankPrice
    };
    localStorage.setItem('ClickerGameState', JSON.stringify(gameState));
}
function loadGame() {
    const savedGameState = localStorage.getItem('ClickerGameState');
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);
        happiness = gameState.happiness;
        turtleTokens = gameState.turtleTokens;
        pondPounds = gameState.pondPounds;
        rockReals = gameState.rockReals;
        add = gameState.add;
        redEaredCount = gameState.redEaredCount;
        redEaredName = gameState.redEaredName;
        yellowBelliedCount = gameState.yellowBelliedCount;
        yellowBelliedName = gameState.yellowBelliedName;
        perSecond = gameState.perSecond;
        Gallons = gameState.Gallons;
        TankPrice = gameState.TankPrice;
        redEaredUpgradePrice = gameState.redEaredUpgradePrice;
        yellowBelliedUpgradePrice = gameState.yellowBelliedUpgradePrice;
        updateEverthing();
        alert('Game loaded successfully!');
        start = true;
        if (Gallons == NaN || Gallons == undefined || Gallons == null) {
            Gallons == 0
        }
    } else {
        alert('No saved game found.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    
    loadGame();
  });
function convert(){
    let convert = parseInt(gebid('amountToConvert').value);
    let convertTo = gebid('convertTo').value;
    if(happiness >= convert && convert > 0){
        if(convertTo == 'tt'){
            turtleTokens = turtleTokens + convert;
            happiness = happiness - convert;
        }else if(convertTo == 'pp'){
            pondPounds = pondPounds + convert;
            happiness = happiness - convert;
        }else if(convertTo == 'rr'){
            rockReals = rockReals + convert;
            happiness = happiness - convert;
        }
    }
    updateEverthing();
}
function PerSecond(){
    if (start === true) {
        happiness = happiness + perSecond;
        updateEverthing();
    }
}
function gallons(){
    Gallons = 30
}
/*document.addEventListener('DOMContentLoaded', () => {
    const secretCode = 'cheatcode';
    let inputString = '';
    const cheatMenu = document.getElementById('dontCheat');
  
    document.addEventListener('keydown', (event) => {
      inputString += event.key;
      inputString = inputString.slice(-secretCode.length); // Keep only the last 'secretCode.length' characters
  
      if (inputString === secretCode) {
        document.getElementById('')
      }
    });
  });
*/
function openTurtleViewer(){
    /*opens the turtle viewer*/
}
function ttSelected(){
    gebid('turtleDiv').style.display = 'block'
    gebid('pondDiv').style.display = 'none'
    gebid('rockDiv').style.display = 'none'
}
function ppSelected(){
 gebid('turtleDiv').style.display = 'none'
 gebid('pondDiv').style.display = 'block'
 gebid('rockDiv').style.display = 'none'
}
function rrSelected(){
    gebid('turtleDiv').style.display = 'none'
    gebid('pondDiv').style.display = 'none'
    gebid('rockDiv').style.display = 'block'
}
function UpdateHappy() {
    if(happiness < 1000){
        gebid('turtleHappiness').textContent = `Turtle Happiness: ${happiness}`;
    }else if(happiness >= 1000 && happiness < 1000000){
        gebid('turtleHappiness').textContent = `Turtle Happiness: ${(Math.floor(happiness/100)/10)}K`;
    }
    else if(happiness >= 1000000 && happiness < 1000000000){
        gebid('turtleHappiness').textContent = `Turtle Happiness: ${(Math.floor(happiness/100000)/10)}M`;
    }else if(happiness >= 1000000000 && happiness < 1000000000000000){
        gebid('turtleHappiness').textContent = `Turtle Happiness: ${(Math.floor(happiness/100000000)/10)}B`;
    }   
}