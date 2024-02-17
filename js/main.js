let click = 11; 
let limitation = 10;
let speedDrop = 5000;
let speedDown = 500;
let countBox = 0;
let topToDown = 2;
let level = 1;
let text = document.getElementById('level');

function start(speedDrop, speedDown) {
    document.getElementById("text").style.display = "none";
    let statBtn = document.getElementById("start")
    statBtn.style.opacity = 0;
    statBtn.style.pointerEvents = 'none';
    setInterval(() => {
        let bomb = document.querySelectorAll('#bomb');
        bomb.forEach(bomb => {
            if (bomb.style.display == 'none') {
                
            } else{
                bomb.style.display = "flex";
            }
        });
    }, 500);
    setTimeout(() => {
        text.innerHTML = "Level " + level;
        setTimeout(() => {
            text.innerHTML = "Start";
            setTimeout(() => {
                text.innerHTML = "";
                setTimeout(() => {
                    
                    let lasPosition = 0;
                        const dropBox = setInterval(() => {
                            var position = [10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000 ]
                            if(countBox != limitation){
                                let randomDrop = Math.floor(Math.random() * 20);
                                if(lasPosition != position[randomDrop]){
                                    countBox++;
                                    lasPosition = position[randomDrop];
                                    let bombTodrop = document.createElement('div');
                                    bombTodrop.className = 'bomb'+countBox;
                                    bombTodrop.id = 'bomb'; 
                                    document.querySelector(".container").appendChild(bombTodrop);
                                    bombTodrop.style.left = position[randomDrop] + 'px';
                                    drop(countBox);
                                    if(countBox == 1){
                                        clickToDisabled();
                                    } else{
                    
                                    }
                                } else{
                
                                }
                            } else{
                                stop();
                            }
                        }, speedDrop);
                        function stop() {
                            clearInterval(dropBox);
                        }
                
                        function drop(countName) {
                            let count = 0;
                            const limit = setInterval(() => {
                                let bombToDrop = document.querySelector(".bomb"+countName);
                                bombToDrop.innerHTML = countName;
                                if(bombToDrop.style.display == 'flex'){
                                    if(text.innerHTML == ""){
                                        if (count >= 525) {
                                            stopDrop();
                                        } else{
                                            count+=topToDown;
                                            bombToDrop.style.top = count+'px';
                                            console.log(count);
                                        }
                                    } else{
                                        stopDrop();
                                    }
                                }
                            }, speedDown);
                            function stopDrop() {
                                clearInterval(limit);
                                clearInterval(dropBox);
                                text.innerHTML = "GAME OVER!!";
                                document.querySelectorAll('#bomb').forEach((bomb) => {
                                    bomb.style.boxShadow = "0 -10px 50px white";
                                    bomb.style.background = 'orangered';
                                    setTimeout(() => {
                                        bomb.style.display = 'none';
                                    }, 3000);
                                })
                                setTimeout(() => {
                                    window.location.href = '../';
                                }, 7000);
                            }
                        }
                }, 1000);
            }, 500);
        }, 500);
    }, 1000);
        
}
                
                
let numPerBomb = 1;
function clickToDisabled(bomb) {
    numPerBomb;
    const refreshThis = setInterval(() => {
        let bombDrop = document.querySelector('.bomb'+numPerBomb);
        if(bombDrop){
            refreshStop();
            bombDrop.addEventListener("click", () => {
                bombDrop.style.height = '0';
                bombDrop.style.width = '0';
                bombDrop.style.opacity = 0;
                setTimeout(() => {
                    bombDrop.style.display = "none";
                    add();
                }, 500);
            })
        }
    }, 1000);
    function refreshStop() {
        clearInterval(refreshThis);
    }
}

function add() {
    numPerBomb++;
    if(numPerBomb >= click){
        text.innerHTML ="Congratulation!!<br> level " + level + " complete";
        setTimeout(() => {
            level++;
            text.innerHTML = "";
            const ready = ['GET', 'READY']
            setTimeout(levelUp, 500);
            function levelUp() {
                limitation+=15;
                click+=15;
                if (speedDrop <= 1000) {
                    speedDrop-=500;
                    speedDown-=10;
                } else{
                    speedDrop-=1000;
                    speedDown-=50;
                }
                topToDown*=2;
                start(speedDrop, speedDown);
                clearInterval(levelWait);
            }
        }, 3000);
    } else{
        
    }
    clickToDisabled();
}