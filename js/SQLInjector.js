class SQLInjector extends Enemy {

    constructor(pos, path, r, type, speed){
        super(pos, path, r, type, speed)
        this.turret = new TankTurret(0, this.pos, null, 9)
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
