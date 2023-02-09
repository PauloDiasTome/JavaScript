class Car { // Class Pai
    constructor(name, port) {
        this.name = name;
        this.port = port;
        this.on = false;
        this.color = undefined;
    }
    start = function () {
        this.start = true;
    }
    stop = function () {
        this.stop = true;
    }
    setColor = function (color) {
        this.color = color;
    }
}

class Military extends Car { // Class filha
    constructor(name, port, armor, ammunition) {
        super(name, port);
        this.armor = armor;
        this.ammunition = ammunition;
        this.setColor("green");
    }
    shoot = function () {
        if (this.ammunition > 0) {
            this.ammunition--
        }
    }
}





















