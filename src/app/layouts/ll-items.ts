import { VK } from './vk';

export class LLItem {
  constructor(
    public vk: VK,
    public char: string,
    public shift: number,
    public ctrl: number,
    public alt: number
    ) {}
}
