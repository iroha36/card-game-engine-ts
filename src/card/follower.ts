import {Card} from './card'
export interface Follower extends Card {
  readonly effect?: string
}