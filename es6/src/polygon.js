//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Rectangle {

  constructor(height) {
    super(height, height);
    this.name = "Square";
  }
}

export class Circle extends Polygon {

  constructor(r) {
    super(r * 2, r * 2);
    this.r = r;
    this.name = "Circle";
  }

  get area() { return Math.PI * this.r * this.r;}
}

