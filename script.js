let plr1 = true
let plr2 = false

let plr1CH = null
let plr2CH = null

let plr1_status = document.querySelector(".choice-player-1")
let plr2_status = document.querySelector(".choice-player-2")

let scr1 = 0
let scr2 = 0

let info = document.querySelector(".info")
let scrTXT1 = document.querySelector(".scores1")
let scrTXT2 = document.querySelector(".scores2")

let changeHod = function(numb){
    if(numb==1){
       plr1 = true
       plr2 = false
       info.innerHTML = "Игрок 1 ходит."
    }
    if(numb==2){
       plr1 = false
       plr2 = true
       info.innerHTML = "Игрок 2 ходит."
    }
    if(numb==3){
       plr1 = false
       plr2 = false
       info.innerHTML = "Проверка..."
    }
}
let AddScors = function(plr){
	if(plr==1){
		scr1 = scr1 + 1
		scrTXT1.innerHTML = scr1
	}
	if(plr==2){
		scr2 = scr2 + 1
		scrTXT2.innerHTML = scr2
	}
}
let checkHods = function(ch1, ch2) {
			if(plr1CH==plr2CH){
        	 	alert("DRAW")
         }
        else if(plr1CH=="rock" && plr2CH=="paper"){
            alert("player 2 win!") 
            AddScors(2)
            changeHod(1)
        }
        else if(plr1CH=="paper" && plr2CH=="nosh"){
            alert("player 2 win!") 
            AddScors(2)
            changeHod(1)
        }
        else if(plr1CH=="nosh" && plr2CH=="rock"){
            alert("player 2 win!")
            AddScors(2)
            changeHod(1)
        }else{
        	alert("player 1 win!")
            AddScors(1)
        	changeHod(1)
        }

    setTimeout(Unshow, 1)
 }

document.addEventListener("keydown", function(e){
	if(plr1==true && plr2==false){
	    if(e.code == "KeyA"){
	         changeHod(2)

            plr1CH = "rock"
	         console.log(plr1CH)
	    }
	     else if(e.code == "KeyS"){
	         changeHod(2)

            plr1CH = "nosh"
	         console.log(plr1CH)
	     }
	     else if(e.code == "KeyD"){
	         changeHod(2)

            plr1CH = "paper"
	         console.log(plr1CH)
	     }else{
	     }
	}
	    
	if(plr1==false && plr2==true){
	    if(e.code == "KeyJ"){
	         changeHod(3)

            plr2CH = "rock"
	         console.log(plr2CH)

	         setTimeout(show, 500)
	    }
	     else if(e.code == "KeyK"){
	         changeHod(3)

            plr2CH = "nosh"
	         console.log(plr2CH)

	         setTimeout(show, 500)
	     }
	     else if(e.code == "KeyL"){
	         changeHod(3)

            plr2CH = "paper"
	         console.log(plr2CH)

	         setTimeout(show, 500)
	     }else{
	     }
	}
})

let show = function(){
	if(plr1CH == "rock"){
		plr1_status.style.background = "url(rock.png)"
		plr1_status.style.backgroundSize = "100%"
	}else if(plr1CH == "nosh"){
		plr1_status.style.background = "url(nosh.png)"
		plr1_status.style.backgroundSize = "100%"

	}else if(plr1CH == "paper"){
		plr1_status.style.background = "url(paper.png)"
		plr1_status.style.backgroundSize = "100%"

	}




	if(plr2CH == "rock"){
		plr2_status.style.background = "url(rock.png)"
		plr2_status.style.backgroundSize = "100%"

	}else if(plr2CH == "nosh"){
		plr2_status.style.background = "url(nosh.png)"
		plr2_status.style.backgroundSize = "100%"

	}else if(plr2CH == "paper"){
		plr2_status.style.background = "url(paper.png)"
		plr2_status.style.backgroundSize = "100%"

	}
	setTimeout(checkHods, 500)
}

let Unshow = function(){
	plr1_status.style.background = "black"
	plr2_status.style.background = "black"
}