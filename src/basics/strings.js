/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof newWord !== 'string' || typeof needle !== 'string') {
    throw new Error("not a string");
  }

  return haystack.replaceAll(new RegExp(needle, 'gi'), (match) => {

    let result = '';


    for (let i = 0; i < match.length; i++) {

      const newChar = newWord[i] || ''
      if (match[i] === match[i].toUpperCase()) {
        result += newChar.toUpperCase()
      } else {
        result += newChar.toLowerCase()
      }
    }

    return result;
  });
}
