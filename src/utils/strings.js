import { some } from 'lodash';

export const isEnter = char => char.charCodeAt(0) === 10;
export const hasEnter = str => some(str, isEnter);
