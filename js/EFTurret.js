class EFTurret extends Turret {

    static price = 300
    static staticType = 2

    constructor(id, pos, enemies){
        super(id, pos, enemies)
        this.type = 2
        this.fireType = 2
        this.price = 100
        this.bulletType = EFBullet
    }

}
