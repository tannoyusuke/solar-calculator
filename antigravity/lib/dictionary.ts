import 'server-only';
import type { Locale } from './i18n-config';
import type jaDict from '../dictionaries/ja.json';

export type Dictionary = typeof jaDict;

const dictionaries = {
    ja: () => import('../dictionaries/ja.json').then((module) => module.default as Dictionary),
    en: () => import('../dictionaries/en.json').then((module) => module.default as unknown as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]?.() ?? dictionaries.ja();
};
