import { defaultMapper } from './#package_defaultFunction'

export const map = (arr: any[], mapper = defaultMapper) => arr.map(mapper)
