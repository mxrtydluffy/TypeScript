// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

interface Robot {
    name: string;
    power: number;
    type: string;
}

// Create class
class Kaiju implements Robot {
    constructor(public name: string, public power: number, public type: string) {}

    // method
    describe() {
        console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`);
    }
}

// Print
const kaiju = new Kaiju("Katsuyu", 50000, "Healer");
kaiju.describe();