class BruteForce extends Enemy {

    constructor(pos, path, r, type, speed){
        super(pos, path, r, type, speed)
        this.turret = new BruteForceCannon(0, this.pos, null, 8)
    }
    
    update(){
        super.update()
        this.turret.pos = this.pos
        this.turret.update()
    }
    
    show(){
        super.show()
        this.turret.show()
    }

}
