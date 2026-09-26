
package main

const PLACEHOLDER = '_'
var VOWELS = []byte{PLACEHOLDER, 'a', 'e', 'i', 'o', 'u'}

func longestBeautifulSubstring(word string) int {
    back := 0
    indexVowels := 0
    maxSizeBeautifulSubstring := 0

    for front := range word {
        current := word[front]
        if current != VOWELS[indexVowels] && current != VOWELS[getNextIndexVowels(indexVowels)] {
            back = resetBackIndex(current, front)
            indexVowels = resetIndexVowels(current)
            continue
        }

        if current > VOWELS[indexVowels] {
            indexVowels++
        }

        if indexVowels == len(VOWELS) - 1 {
            maxSizeBeautifulSubstring = max(maxSizeBeautifulSubstring, front - back + 1)
        }
    }

    return maxSizeBeautifulSubstring
}

func getNextIndexVowels(indexVowels int) int {
    if indexVowels + 1 < len(VOWELS) {
        return indexVowels + 1
    }
    return indexVowels
}

func resetIndexVowels(current byte) int {
    if current == VOWELS[1] {
        return 1
    }
    return 0
}

func resetBackIndex(current byte, front int) int {
    if current == VOWELS[1] {
        return front
    }
    return front + 1
}
