
class Solution {

    private companion object {
        const val PLACEHOLDER = '_'
        val VOWELS = charArrayOf(PLACEHOLDER, 'a', 'e', 'i', 'o', 'u')
    }

    fun longestBeautifulSubstring(word: String): Int {
        var back = 0
        var indexVowels = 0
        var maxSizeBeautifulSubstring = 0

        for (front in word.indices) {
            val current = word[front]
            if (current != VOWELS[indexVowels] && current != VOWELS[getNextIndexVowels(indexVowels)]) {
                back = resetBackIndex(current, front)
                indexVowels = resetIndexVowels(current)
                continue
            }

            if (current > VOWELS[indexVowels]) {
                ++indexVowels
            }

            if (indexVowels == VOWELS.size - 1) {
                maxSizeBeautifulSubstring = Math.max(maxSizeBeautifulSubstring, front - back + 1)
            }
        }

        return maxSizeBeautifulSubstring
    }

    private fun getNextIndexVowels(indexVowels: Int): Int {
        if (indexVowels + 1 < VOWELS.size) {
            return indexVowels + 1
        }
        return indexVowels
    }

    private fun resetIndexVowels(current: Char): Int {
        if (current == VOWELS[1]) {
            return 1
        }
        return 0
    }

    private fun resetBackIndex(current: Char, front: Int): Int {
        if (current == VOWELS[1]) {
            return front
        }
        return front + 1
    }
}
