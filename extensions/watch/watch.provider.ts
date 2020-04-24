import Watch from './watch';
import LegacyWatch from 'bit-bin/dist/consumer/component-ops/watch-components';

export function provideWatch() {
  return new Watch(new LegacyWatch(true));
}