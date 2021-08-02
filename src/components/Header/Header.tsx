import React from 'react';
import {Time} from "./Time.style";
import {Container} from "../Main/Container.style";
import {HeaderInner, HeaderWrapper} from "./Header.style";
import {Button} from "./Button.style";
import {Score} from "./Score.style";

interface HeaderProps {
    score: number
    time: number
    startGame: () => void
}

const Header: React.FC<HeaderProps> = ({score, time, startGame}) => {

    let minutes = Math.floor(time / 60)
    let seconds = time - 60 * minutes

    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    {time !== Infinity ? <Time>{minutes.toString().length == 2 ? minutes : `0${minutes}`}:{seconds.toString().length == 2 ? seconds : `0${seconds}`}</Time> : '00:00'}
                    <Score>{score}/<span>16</span></Score>
                    <Button onClick={startGame}>Start</Button>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;