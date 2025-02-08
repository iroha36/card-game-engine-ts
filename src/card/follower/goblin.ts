import { Follower } from '../follower'
class Goblin implements Follower {
  effect?: string = undefined;
  cost: number = 1;
  // TODO 直す
  public equals<T>(other: T): boolean {
    throw new Error('Method not implemented.');
  }
}