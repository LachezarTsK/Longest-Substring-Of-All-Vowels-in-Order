
#include <array>
#include <string>
#include <algorithm>
using namespace std;

class Solution {

    static const char PLACEHOLDER = '_';
    inline static const array<char, 6> VOWELS = { PLACEHOLDER, 'a', 'e', 'i', 'o', 'u' };

public:
    int longestBeautifulSubstring(string word) {
        int back = 0;
        int indexVowels = 0;
        int maxSizeBeautifulSubstring = 0;

        for (int front = 0; front < word.length(); ++front) {
            char current = word[front];
            if (current != VOWELS[indexVowels] && current != VOWELS[getNextIndexVowels(indexVowels)]) {
                back = resetBackIndex(current, front);
                indexVowels = resetIndexVowels(current);
                continue;
            }

            if (current > VOWELS[indexVowels]) {
                ++indexVowels;
            }

            if (indexVowels == VOWELS.size() - 1) {
                maxSizeBeautifulSubstring = max(maxSizeBeautifulSubstring, front - back + 1);
            }
        }

        return maxSizeBeautifulSubstring;
    }

private:
    static int getNextIndexVowels(int indexVowels) {
        if (indexVowels + 1 < VOWELS.size()) {
            return indexVowels + 1;
        }
        return indexVowels;
    }

    static int resetIndexVowels(char current) {
        if (current == VOWELS[1]) {
            return 1;
        }
        return 0;
    }

    static int resetBackIndex(char current, int front) {
        if (current == VOWELS[1]) {
            return front;
        }
        return front + 1;
    }
};
