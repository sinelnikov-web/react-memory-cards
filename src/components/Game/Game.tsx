import React, {useEffect, useState} from 'react';
import {Grid} from "./Grid.style";
import {Card, CardBack, CardFront} from "./Card.style";
import {Container} from "../Main/Container.style";
import Header from "../Header/Header";
import BestTime from "./BestTime";
import {CardType, generateWords} from "../../utils/words-generator";

const Game = () => {
    const words = ['Cow', 'Snake', 'Lion', 'Horse', 'Fox', 'Fish', 'Cat', 'Dog']
    const [bestTime, setBestTime] = useState(() => {
        return +(localStorage.getItem('bestTime') || 'infinity')
    })
    const [isWin, setIsWin] = useState(false)
    const [gameInProcess, setGameInProcess] = useState(false)
    const [timer, setTimer] = useState(0)
    const [openedCards, setOpenedCards] = useState<number[]>([])
    const [score, setScore] = useState(0)
    const [wordsState, setWordsState] = useState<CardType[]>(() => generateWords(words))

    useEffect(() => {
        if (gameInProcess && score !== words.length * 2) {
            setTimeout(() => setTimer(prev => prev + 1), 1000)
        } else if (isWin && timer !== 0) {
            setTimer(0)
        }
    }, [timer, gameInProcess, isWin])

    useEffect(() => {
       if (score === words.length * 2) {
            win()
       }
    }, [score])

    const win = () => {
        if (timer < +bestTime) {
            localStorage.setItem('bestTime', timer.toString())
            setBestTime(timer)
        }
        setIsWin(true)
        setScore(0)
        setGameInProcess(false)
        setTimer(0)
        setWordsState(generateWords(words))
    }

    const startGame = () => {
        setGameInProcess(true)
    }

    const handleCardClick = (idx: number) => {
        if (openedCards.length < 2 && gameInProcess && openedCards.indexOf(idx) === -1) {
            setOpenedCards(prev => [...prev, idx])
            if (!wordsState[wordsState[idx].twinIndex].isOpen) {
                setWordsState(prev => prev.map((word, index) => index === idx ? {...word, isOpen: true} : word))
                setTimeout(() => {
                    setWordsState(prev => prev.map((word, index) => index === idx ? {...word, isOpen: false} : word))
                    setOpenedCards(prev => prev.filter(cardId => cardId !== idx))
                }, 2000)
            } else {
                const twinIdx = wordsState[idx].twinIndex
                setWordsState(prev => prev.map((word, index) => index === idx || index === twinIdx ? {
                    ...word,
                    isOpen: true,
                    isGuess: true
                } : word))
                setScore(prev => prev + 2)
                setOpenedCards([])
            }

        }
    }

    return (
        <>
            <Header score={score} time={timer} startGame={startGame}/>
            {gameInProcess ?
                <Container>
                    <Grid>
                        {wordsState.map((word, index) => {
                            return (
                                <Card data-word={JSON.stringify(word)} className={word.isGuess ? 'guessed' : ''}
                                      onClick={() => handleCardClick(index)}
                                      key={word.cardId}>
                                    <CardBack className={word.isOpen ? 'active' : ''}/>
                                    <CardFront className={word.isOpen ? 'active' : ''}>
                                        <span>{word.word}</span>
                                    </CardFront>
                                </Card>
                            )
                        })}
                    </Grid>
                </Container>
                :
                <BestTime bestTime={bestTime}/>
            }
        </>
    );
};

export default Game;