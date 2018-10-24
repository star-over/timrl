import { VKTypes } from './vk-types';
import { Fingers } from './fingers';
import { Hands } from './hands';
import { VK } from './vk';

export class HLItem {
  constructor(
    public vk: VK,
    public hand: Hands,
    public finger: Fingers,
    public H: number,
    public V: number,
    public vkType: VKTypes
    ) {}
}
