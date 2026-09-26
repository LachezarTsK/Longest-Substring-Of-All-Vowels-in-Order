
function longestBeautifulSubstring(word: string): number {
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

function getNextIndexVowels(indexVowels: number): number {
    if (indexVowels + 1 < Util.VOWELS.length) {
        return indexVowels + 1;
    }
    return indexVowels;
}

function resetIndexVowels(current: string): number {
    if (current === Util.VOWELS[1]) {
        return 1;
    }
    return 0;
}

function resetBackIndex(current: string, front: number): number {
    if (current === Util.VOWELS[1]) {
        return front;
    }
    return front + 1;
}

class Util {
    static PLACEHOLDER = '_';
    static VOWELS = [Util.PLACEHOLDER, 'a', 'e', 'i', 'o', 'u'];
}
