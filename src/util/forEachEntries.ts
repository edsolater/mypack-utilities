/**
 * Object.entries 与 Array.prototype.forEach 联合的简写,
 * 不推荐使用，因为缺少灵活性，改成 vscode-Snippet 更合适
 */
export const forEachEntries = <O extends {}>(
  object: O,
  callback: (key: string, value: unknown, index: number, entries: [string, unknown][]) => void
) => {
  Object.entries(object).forEach(([key, value], index, entries) =>
    callback(key, value, index, entries)
  )
}
