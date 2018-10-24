import { LLItem } from './ll-items';

/**
 * Singleton котрый содержит информацию о локальной раскладке конкретного языка.
 * Так как в каждый момент доступна только одна раскладка клавиатуры. В массиве
 * содержится инфиорамция о символе текущего языка, связь с HL через VK.
 */
export class LL {
  constructor() {
    if (LL.instance) {
        throw new Error('Error - use Singleton.getInstance()');
    }
    this.member = 0;
}
private static instance: LL;
// Assign "new Singleton()" here to avoid lazy initialisation

version: number;
member: number;
language: string;
layoutName: string;
id: string;
items: LLItem[] = [];

static getInstance(): LL {
    LL.instance = LL.instance || new LL();
    return LL.instance;
}
}
