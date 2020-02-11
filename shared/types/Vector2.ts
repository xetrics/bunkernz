export class Vector2 {
    public x: number;
    public y: number;

    public static get zero(): Vector2 {
        return new Vector2(0, 0);
    }

    public static get one(): Vector2 {
        return new Vector2(1, 1);
    }

    public static get right(): Vector2 {
        return new Vector2(0, 1);
    }

    public static get left(): Vector2 {
        return new Vector2(-1, 0);
    }

    public static get up(): Vector2 {
        return new Vector2(0, -1);
    }

    public static get down(): Vector2 {
        return new Vector2(0, 1);
    }

    public static add(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(lhs.x + rhs.x, lhs.y + rhs.y);
    }

    public static sub(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(lhs.x - rhs.x, lhs.y - rhs.y);
    }

    public static mul(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(lhs.x * rhs.x, lhs.y * rhs.y);
    }

    public static div(lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(lhs.x / rhs.x, lhs.y / rhs.y);
    }

    public static dot(lhs: Vector2, rhs: Vector2): number {
        return lhs.x * rhs.x + lhs.y * rhs.y;
    }

    public constructor(other: Vector2);
    public constructor(x: number);
    public constructor(x: number, y: number);
    public constructor(a: number | Vector2, b?: number) {
        if (a instanceof Vector2) {
            this.x = a.x;
            this.y = a.y;
        } else if (b) {
            this.x = a;
            this.y = b;
        } else {
            this.x = a;
            this.y = a;
        }
    }

    public add(rhs: Vector2): void {
        this.x += rhs.x;
        this.y += rhs.y;
    }

    public sub(rhs: Vector2): void {
        this.x -= rhs.x;
        this.y -= rhs.y;
    }

    public mul(rhs: Vector2): void {
        this.x *= rhs.x;
        this.y *= rhs.y;
    }

    public div(rhs: Vector2): void {
        this.x /= rhs.x;
        this.y /= rhs.y;
    }
}
