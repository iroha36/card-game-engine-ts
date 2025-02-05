import isEqual from "lodash/isEqual";

export class ValueObject {
  public equals<T>(other: T): boolean {
    return isEqual(this, other);
  }
}
