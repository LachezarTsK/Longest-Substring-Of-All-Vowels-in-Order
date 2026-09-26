
public class Solution {

    private static final char PLACEHOLDER = '_';
    private static final char[] VOWELS = {PLACEHOLDER, 'a', 'e', 'i', 'o', 'u'};

    public int longestBeautifulSubstring(String word) {
        int back = 0;
        int indexVowels = 0;
        int maxSizeBeautifulSubstring = 0;

        for (int front = 0; front < word.length(); ++front) {
            char current = word.charAt(front);
            if (current != VOWELS[indexVowels] && current != VOWELS[getNextIndexVowels(indexVowels)]) {
                back = resetBackIndex(current, front);
                indexVowels = resetIndexVowels(current);
                continue;
            }

            if (current > VOWELS[indexVowels]) {
                ++indexVowels;
            }

            if (indexVowels == VOWELS.length - 1) {
                maxSizeBeautifulSubstring = Math.max(maxSizeBeautifulSubstring, front - back + 1);
            }
        }

        return maxSizeBeautifulSubstring;
    }

    private static int getNextIndexVowels(int indexVowels) {
        if (indexVowels + 1 < VOWELS.length) {
            return indexVowels + 1;
        }
        return indexVowels;
    }

    private static int resetIndexVowels(char current) {
        if (current == VOWELS[1]) {
            return 1;
        }
        return 0;
    }

    private static int resetBackIndex(char current, int front) {
        if (current == VOWELS[1]) {
            return front;
        }
        return front + 1;
    }
}
