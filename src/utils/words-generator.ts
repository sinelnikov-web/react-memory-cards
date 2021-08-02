export type CardType = {
    cardId: number
    word: string
    isOpen: boolean
    twinIndex: number
    isGuess: boolean
}

export function generateWords(words: Array<string>): Array<CardType> {
    const newWordsList: Array<CardType> = []
    let unusedIndexes = Array.apply(null, {length: words.length * 2} as unknown[]).map(Number.call, Number) as number[]
    for (let word of words) {
        let firstCardId = Math.floor(Math.random() * 100000000)
        let firstRandomIndex = Math.floor(Math.random() * unusedIndexes.length)
        let firstCurrentIndex = unusedIndexes[firstRandomIndex]
        unusedIndexes = [...unusedIndexes.slice(0, firstRandomIndex), ...unusedIndexes.slice(firstRandomIndex + 1, unusedIndexes.length)]
        let secondRandomIndex = Math.floor(Math.random() * unusedIndexes.length)
        let secondCurrentIndex = unusedIndexes[secondRandomIndex]
        let secondCardId = Math.floor(Math.random() * 100000000)
        unusedIndexes = [...unusedIndexes.slice(0, secondRandomIndex), ...unusedIndexes.slice(secondRandomIndex + 1, unusedIndexes.length)]
        newWordsList[firstCurrentIndex] = {
            cardId: firstCardId,
            word,
            isOpen: false,
            twinIndex: secondCurrentIndex,
            isGuess: false
        }
        newWordsList[secondCurrentIndex] = {
            cardId: secondCardId,
            word,
            isOpen: false,
            twinIndex: firstCurrentIndex,
            isGuess: false
        }
    }
    return newWordsList
}