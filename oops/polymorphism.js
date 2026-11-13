class Shape{
    area(){
        return 0;
    }

    describe() {
        return `This shape has an area of ${this.area()}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

const shape = new Circle(4);
console.log(shape.area());