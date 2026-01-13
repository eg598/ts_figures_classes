type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea();
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  getArea = (): number => {
    const p = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2),
    );
  };

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length cannot be 0 or less');
    }

    const max = Math.max(a, b, c);

    if (max >= a + b + c - max) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  getArea = (): number => {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  };

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('length cannot be 0 or less');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  getArea = (): number => {
    return Number((this.width * this.height).toFixed(2));
  };

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('length cannot be 0 or less');
    }
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
