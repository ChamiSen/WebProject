// GRADING: COMMAND
function changeEgg(newEgg) {
    this.newEgg = newEgg;
    this.oldEgg = document.getElementById("basket").lastChild.cloneNode();

    this.exec = function() {
        let lastChild = document.getElementById("basket").lastChild;

        switch (this.newEgg) {
            case "whiteEgg":
                lastChild.src = WHITE_EGG;
                break;
            case "blueEgg":
                lastChild.src = BLUE_EGG;
                break;
            case "stripedEgg":
                lastChild.src = STRIPED_EGG;
                break;
            case "chocoBunny":
                lastChild.src = CHOCO_BUNNY;
                break;
            case "orangeEgg":
                lastChild.src = ORANGE_EGG;
                break;
            case "pinkEgg":
                lastChild.src = PINK_EGG;
                break;
            case "greenEgg":
                lastChild.src = GREEN_EGG;
                break;
        }
        lastChild.className = "egg " + this.newEgg.slice(0, 4).toLowerCase();
    }

    this.undo = function() {
        document.getElementById("basket").lastChild.src = this.oldEgg.src;
        document.getElementById("basket").lastChild.className = this.oldEgg.className;
    }
}

function addEgg(newEgg) {
    this.newEgg = newEgg;

    this.exec = function() {
        let newImg = document.createElement("img");

        switch (this.newEgg) {
            case "whiteEgg":
                newImg.src = WHITE_EGG;
                break;
            case "blueEgg":
                newImg.src = BLUE_EGG;
                break;
            case "stripedEgg":
                newImg.src = STRIPED_EGG;
                break;
            case "chocoBunny":
                newImg.src = CHOCO_BUNNY;
                break;
            case "orangeEgg":
                newImg.src = ORANGE_EGG;
                break;
            case "pinkEgg":
                newImg.src = PINK_EGG;
                break;
            case "greenEgg":
                newImg.src = GREEN_EGG;
                break;
        }
        newImg.className = "egg " + this.newEgg.toLowerCase();
        document.getElementById("basket").appendChild(newImg);
    }

    this.undo = function() {
        let basket = document.getElementById("basket");
        basket.removeChild(basket.lastChild);
    }
}

// GRADING: COMMAND
function removeEgg() {
    this.exec = function () {
        let basket = document.getElementById("basket");
        let lastChild = basket.lastChild;
        this.oldClass = lastChild.className;
        this.oldSrc = lastChild.src;
        basket.removeChild(lastChild);
    }

    this.undo = function() {
        let newImg = document.createElement("img");
        newImg.className = this.oldClass;
        newImg.src = this.oldSrc;
        document.getElementById("basket").appendChild(newImg);
    }
}

function confirmEgg() {
    this.exec = function() {
        document.getElementById("basket").lastChild.className += " confirmed";
    }

    this.undo = function() {
        let lastChild = document.getElementById("basket").lastChild;
        lastChild.className = lastChild.className.split(" ").slice(0, 2).join(" ");
    }
}

function changeBasket(newBasket) {
    this.newBasket = newBasket;
    this.oldBasket = document.getElementById("basket").firstChild.cloneNode();

    this.exec = function() {
        let firstChild = document.getElementById("basket").getElementsByTagName("img")[0];
        console.log(firstChild);

        switch (this.newBasket) {
            case "Brown":
                firstChild.src = BROWN_BASKET;
                break;
            case "White":
                firstChild.src = WHITE_BASKET;
                break;
        }
        firstChild.className = "basket " + this.newBasket.slice(0, 4).toLowerCase();
    }

    this.undo = function() {
        document.getElementById("basket").firstChild.src = this.oldBasket.src;
        document.getElementById("basket").firstChild.className = this.oldBasket.className;
    }
}

function preconfigBasket(newPreconfig) {
    this.newPreconfig = newPreconfig;
    this.oldPreconfig = getPreconfig();

    this.exec = function() {
        setPreconfig(this.newPreconfig);
        updateUI();
    }

    this.undo = function () {
        setPreconfig(this.oldPreconfig);
    }
}

function getPreconfig() {
    let basketChilds = document.getElementById("basket").children;
    let classes = basketChilds[0].className.split(" ");
    console.log(classes);
    let preconfig = classes[1][0];

    for (let i = 1; i < basketChilds.length; i++) {
        classes = basketChilds[i].className.split(" ");
        preconfig += classes[1][0];
        if (classes.length > 2)
            preconfig += "C";
    }

    return preconfig.toUpperCase();
}

function setPreconfig(preconfig) {
    console.log("AAAAAAAAAAAAAAAAAAAAA")
    let basket = document.getElementById("basket");
    basket.innerHTML = "";

    let bas = document.createElement("img");
    bas.className = "basket";

    switch (preconfig[0]) {
        case "w":
            bas.src = WHITE_BASKET;
            bas.className += " white";
            break;

        case "b":
            bas.src = BROWN_BASKET;
            bas.className += " brown";
            break;
    }
    basket.appendChild(bas);

    let i = 1;
    while (i < preconfig.length) {
        let eg = document.createElement("img");
        eg.className = "egg";
        switch (preconfig[i]) {
            case "w":
                eg.src = WHITE_EGG;
                eg.className += " white";
                break;
            case "b":
                eg.src = BLUE_EGG;
                eg.className += " blue";
                break;
            case "s":
                eg.src = STRIPED_EGG;
                eg.className += " strip";
                break;
            case "c":
                eg.src = CHOCO_BUNNY;
                eg.className += " choco";
                break;
            case "o":
                eg.src = ORANGE_EGG;
                eg.className += " orang";
                break;
            case "p":
                eg.src = PINK_EGG;
                eg.className += " pink";
                break;
            case "g":
                eg.src = GREEN_EGG;
                eg.className += " green";
                break;
        }
        if (i + 1 < preconfig.length) {
            if (preconfig[i + 1] === "c") {
                eg.className += "confirmed";
            }
            i++;
        }
        basket.appendChild(eg);
        i++;
    }
}
