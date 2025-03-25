import 'server-only'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    hy: () => import('@/dictionaries/hy.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()