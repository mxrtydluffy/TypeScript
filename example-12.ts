// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
	North = "North",
	East = "East",
	South = "South",
	West = "West"
}

// Should having a heading property type Direction

class MapPosition {

	heading: Direction;

	constructor(startingDirection: Direction = Direction.South) {
		this.heading = startingDirection;
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		// set the direction on your property
		this.heading = newDirection;
		// Print the new direction
		console.log(this.heading);
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `You are heading ${this.heading}`;
	}
}

const location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.South);

export default MapPosition;