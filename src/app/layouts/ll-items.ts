import { VK } from './vk';

export class LLItem {
  constructor(
    public vk: VK,
    public char: string,
    public alt: number,
    public ctrl: number,
    public shift: number
    ) {}
}
