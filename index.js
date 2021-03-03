// Your code here



class Polygon {
  
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    const reducer = (accum, curr) => accum + curr
    return this.sides.reduce(reducer)
  }
}


class Triangle extends Polygon {


  get isValid() {
    const side1 = this.sides[0]
    const side2 = this.sides[1]
    const side3 = this.sides[2]
    if (side1 + side2 <= side3) {
      return false
    } else if (side2 + side3 <= side1) {
      return false
    } else if (side1 + side3 <= side2) {
      return false
    }
    return true
  }
}



class Square extends Polygon {



  get isValid() {
    return this.sides[0] === this.sides[1] &&
    this.sides[1] === this.sides[2] &&
    this.sides[2] === this.sides[3]
  }

  get area() {
    return this.sides[0] ** 2
  }
}