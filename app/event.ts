import { Time } from './time';
import { Space } from './space';
import { Participant } from './participant';

export class Event {
  time:Time;
  space:Space;
  participants:Participant[];
}
