class ThrottleBeam extends Bullet {

    constructor(id, pos, enemies, a, type, enemy){
        super(id, pos, enemies, a, type, enemy)
        this.speed = 0.0005
        this.strength = 0.2
        this.target = {pos: {x: enemy.pos.x, y: enemy.pos.y} }
    }

	dealDamage(){
	    if(this.distance(this.target) <= 1){
            for(let i = 0; i < this.enemies.length; i++){
                const enemy = this.enemies[i]
                if(enemy.dist(enemy.pos.x, this.target.pos.x, enemy.pos.y, this.target.pos.y) < 1.5)
                    enemy.getSlowed(this)
            }
            this.isGone = true
            fxs.push(new FX(this.target.pos, 30, 1, 4) )
        }
        /* debug 
        if(this.target){
            c.fillRect(this.target.pos.x * tileSize, this.target.pos.y * tileSize, 64, 64)
            c.fillStyle = "black"
            c.fillText(this.distance(this.target), this.target.pos.x * tileSize + tileSize2, this.target.pos.y * tileSize + tileSize2)
        }
        */
	}

}
