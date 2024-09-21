export class Movement {
  private velocityX: number
  private velocityY: number
  constructor() {
    this.velocityX = 0
    this.velocityY = 0
  }
  public x(): number {
    return this.velocityX
  }
  public y(): number {
    return this.velocityY
  }
  public move(x: number, y: number): void {
    this.velocityX += x
    this.velocityY += y
  }
  public stop(): void {
    this.velocityX = 0
    this.velocityY = 0
  }
}

export class Health {
  private health: number
  constructor(health = 100) {
    this.health = health
  }
  public minus(damage: number): void {
    this.health -= damage
  }
  public plus(heal: number): void {
    this.health += heal
  }
}

abstract class Entity {
  abstract health: Health
  abstract movement: Movement
  abstract damage(amount: number): void
  abstract heal(amount: number): void
  abstract move(x: number, y: number): void
}

export class Boss implements Entity {
  public health: Health
  public movement: Movement
  constructor() {
    this.health = new Health(1000)
    this.movement = new Movement()
  }
  public damage(amount: number): void {
    this.health.minus(amount)
  }
  public heal(amount: number): void {
    this.health.plus(amount)
  }
  public move(x: number, y: number): void {
    this.movement.move(x, y)
  }
}
