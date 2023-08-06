import { Coordinate } from "./coordinate";

export class Vector {
  constructor(
    private defaultCoordinate: Coordinate,
    private targetCoordinate: Coordinate,
  ) {}

  public getXVector(): number {
    return this.targetCoordinate.x - this.defaultCoordinate.x;
  }

  public getYVector(): number {
    return this.targetCoordinate.y - this.defaultCoordinate.y;
  }
}
