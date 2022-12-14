class ReCaptchaBullet extends Bullet {

    constructor(id, pos, enemies, a, type, enemy){
        super(id, pos, enemies, a, type, enemy)
        this.speed = 0.0001
        this.strength = 20
        this.target = {pos: {x: enemy.pos.x, y: enemy.pos.y} }
    }

	dealDamage(){
	    if(this.distance(this.target) <= 1){
            for(let i = 0; i < this.enemies.length; i++){
                const enemy = this.enemies[i]
                if(enemy.dist(enemy.pos.x, this.target.pos.x, enemy.pos.y, this.target.pos.y) < 1.5)
                    enemy.getHit(this)
            }
            this.isGone = true
            fxs.push(new FX(this.target.pos, 30, 1, 3) )
        }
	}

}