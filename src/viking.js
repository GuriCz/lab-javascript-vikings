// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack (){
        this.strength;
    }
    receiveDamage (damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name; 
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in combat`;
        }
    }

    battleCry (){
        return "Odins Owns You All";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage){
        this.health -= damage;
        if (this.health > 0){
           return `A Saxon has received ${damage} points of damage`;
        }
        else {
           return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor (){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }

    addViking (Viking){
        this.vikingArmy.push(Viking)
    };
    addSaxon (Saxon){
        this.saxonArmy.push(Saxon)
    };
    vikingAttack(){
        Saxon.receiveDamage(Viking.attack);
        if (receiveDamage === `A Saxon has died in combat`){
            saxonArmy.pop()
        }
        return Saxon.receiveDamage(Viking.attack);
    };
    saxonAttack(){
        Viking.receiveDamage(Saxon.attack);
        if (receiveDamage === `${this.name} has died in combat`){
            vikingArmy.pop()
        }
        return Viking.receiveDamage(Saxon.attack);
    };

    showStatus(){
        if (saxonArmy.length === 0){
            return `Vikings have won the war of the century!`; 
        }
        else if (vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`; 
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
}