import { Time } from '../time/time';
import { Space } from '../space/space';
import { Participant } from '../participant/participant';

export class Event {
  time:Time;
  space:Space;
  participants:Participant[];
}
