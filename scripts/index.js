var BLUE_EGG = "../Images/blue_egg.png";
var WHITE_EGG = "../Images/white_egg.png";
var STRIPED_EGG = "../Images/stripe_egg.png";
var BROWN_BASKET = "../Images/brown_basket.png";
var WHITE_BASKET = "../Images/white_basket.png";
var CHOCO_BUNNY = "../Images/chocolate_bunny.png";
var ORANGE_EGG = "../Images/orange_egg.png";
var PINK_EGG = "../Images/pink_egg.png";
var GREEN_EGG = "../Images/green_egg.png";

// GRADING: MANAGE
class History {
    constructor() {
        this.UndoRedos = [];
        this.index = 0;
    }

    executeAction(cmd) {
        this.UndoRedos.length = this.index;
        this.UndoRedos.push(cmd);
        this.index = this.UndoRedos.length;

        cmd.exec();
        updateUI();
    }

    undoCmd() {
        if (this.index > 0)
        {
            var cmd = this.UndoRedos[this.index - 1];
            cmd.undo();
            this.index = this.index - 1;
            updateUI();
        }
    }

    redoCmd() {
        if (this.index < this.UndoRedos.length)
        {
            var cmd = this.UndoRedos[this.index];
            cmd.exec();
            this.index = this.index + 1;
            updateUI();
        }
    }

    canUndo() {
        return this.index != 0;
    }

    canRedo() {
        return this.index < this.UndoRedos.length;
    }
}

function updateUI() {
    document.getElementById("undo").disabled = !hist.canUndo();
    document.getElementById("redo").disabled = !hist.canRedo();
    document.getElementById("confirmEgg").disabled = document.getElementById("removeEgg").disabled = document.getElementById("basket").lastElementChild.className.includes("confirmed") || document.getElementById("basket").childNodes.length < 2;
}

var hist = new History();

function undo() {
    hist.undoCmd();
}

function redo() {
    hist.redoCmd();
}

window.onload = function() {

    document.getElementById("addEgg").onclick = function() {
        let basketChilds = document.getElementById("basket").getElementsByTagName("img");
        console.log(basketChilds);
        let lastEgg = basketChilds[basketChilds.length - 1];
        let option = document.getElementById("eggOption").value;

        if (lastEgg.className.includes("confirmed") || basketChilds.length < 2) {
            // GRADING: ACTION
            hist.executeAction(new addEgg(option));
        } else {
            // GRADING: ACTION
            hist.executeAction(new changeEgg(option));
        }
    }

    document.getElementById("removeEgg").onclick  = function() {
        hist.executeAction(new removeEgg());
    }

    document.getElementById("confirmEgg").onclick = function() {
        hist.executeAction(new confirmEgg());
    }

    document.getElementById("undo").onclick = function() {hist.undoCmd()};
    document.getElementById("redo").onclick = function() {hist.redoCmd()};

    document.getElementById("brownBasket").onclick = function() {
        hist.executeAction(new changeBasket("Brown"));
    }

    document.getElementById("whiteBasket").onclick = function() {
        hist.executeAction(new changeBasket("White"));
    }

    updateUI();
}

function getWhiteBasket() {
    hist.executeAction(new changeBasket("White"));
}

function getBasePreconfig() {
    let preconfig = "b";
    hist.executeAction(new preconfigBasket(preconfig))
}

function getAllPreconfig() {
    let preconfig = "bbcbcbcbcbcw";
    hist.executeAction(new preconfigBasket(preconfig));
}

function getMixedPreconfig() {
    let preconfig = "wscbcscbcscbcccccccw";
    hist.executeAction(new preconfigBasket(preconfig));
}

function writeFile() {
    window.location.href = "index.php?write=1&name=" + document.getElementById("filename").value + "&data=" + getPreconfig();
}
