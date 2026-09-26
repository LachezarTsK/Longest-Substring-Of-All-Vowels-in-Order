
/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
    let back = 0;
    let indexVowels = 0;
    let maxSizeBeautifulSubstring = 0;

    for (let front = 0; front < word.length; ++front) {
        const current = word.charAt(front);
        if (current !== Util.VOWELS[indexVowels] && current !== Util.VOWELS[getNextIndexVowels(indexVowels)]) {
            back = resetBackIndex(current, front);
            indexVowels = resetIndexVowels(current);
            continue;
        }

        if (current > Util.VOWELS[indexVowels]) {
            ++indexVowels;
        }

        if (indexVowels === Util.VOWELS.length - 1) {
            maxSizeBeautifulSubstring = Math.max(maxSizeBeautifulSubstring, front - back + 1);
        }
    }

    return maxSizeBeautifulSubstring;
};

/**
 * @param {number} indexVowels 
 * @return {number}
 */
function getNextIndexVowels(indexVowels) {
    if (indexVowels + 1 < Util.VOWELS.length) {
        return indexVowels + 1;
    }
    return indexVowels;
}

/**
 * @param {string} current
 * @return {number}
 */
function resetIndexVowels(current) {
    if (current === Util.VOWELS[1]) {
        return 1;
    }
    return 0;
}

/**
 * @param {string} current
 * @param {number} front 
 * @return {number}
 */
function resetBackIndex(current, front) {
    if (current === Util.VOWELS[1]) {
        return front;
    }
    return front + 1;
}

class Util {
    static PLACEHOLDER = '_';
    static VOWELS = [Util.PLACEHOLDER, 'a', 'e', 'i', 'o', 'u'];
}
