interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

var point2d: Point2D = { x: 0, y: 10 }
var point3d: Point3D = { x: 0, y: 10, z: 20 }

function iTakePoint2D(point: Point2D) {
  
}

iTakePoint2D(point2d)
iTakePoint2D(point3d)
iTakePoint2D({ x: 1, y: 2 })
