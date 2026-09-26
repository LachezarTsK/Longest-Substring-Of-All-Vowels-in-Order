
using System;

public class Solution
{
    private static readonly char PLACEHOLDER = '_';
    private static readonly char[] VOWELS = { PLACEHOLDER, 'a', 'e', 'i', 'o', 'u' };

    public int LongestBeautifulSubstring(string word)
    {
        int back = 0;
        int indexVowels = 0;
        int maxSizeBeautifulSubstring = 0;

        for (int front = 0; front < word.Length; ++front)
        {
            char current = word[front];
            if (current != VOWELS[indexVowels] && current != VOWELS[GetNextIndexVowels(indexVowels)])
            {
                back = ResetBackIndex(current, front);
                indexVowels = ResetIndexVowels(current);
                continue;
            }

            if (current > VOWELS[indexVowels])
            {
                ++indexVowels;
            }

            if (indexVowels == VOWELS.Length - 1)
            {
                maxSizeBeautifulSubstring = Math.Max(maxSizeBeautifulSubstring, front - back + 1);
            }
        }

        return maxSizeBeautifulSubstring;
    }

    private static int GetNextIndexVowels(int indexVowels)
    {
        if (indexVowels + 1 < VOWELS.Length)
        {
            return indexVowels + 1;
        }
        return indexVowels;
    }

    private static int ResetIndexVowels(char current)
    {
        if (current == VOWELS[1])
        {
            return 1;
        }
        return 0;
    }

    private static int ResetBackIndex(char current, int front)
    {
        if (current == VOWELS[1])
        {
            return front;
        }
        return front + 1;
    }
}
