import { Follower } from '../follower'
class Goblin implements Follower {
  effect?: string = undefined;
  cost: number = 1;
  // TODO 直す
  public equals<Follower>(other: Follower): boolean {
    throw new Error('Method not implemented.');
  }
}