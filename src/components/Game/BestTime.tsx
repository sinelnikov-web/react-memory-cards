import React from 'react';
import {CenteredGrid} from "./Grid.style";
import {BestScoreTitle} from "./BestScoreTitle.style";

interface BestTimeProps {
    bestTime: number
}

const BestTime: React.FC<BestTimeProps> = ({bestTime}) => {

    let minutes = Math.floor(bestTime / 60)
    let seconds = bestTime - minutes * 60

    return (
        <CenteredGrid>
            <BestScoreTitle>
                Your best score is {bestTime === Infinity ? '00:00' : (minutes.toString().length === 2 ? minutes : `0${minutes}`)+':'+(seconds.toString().length === 2 ? seconds : `0${seconds}`)}
            </BestScoreTitle>
        </CenteredGrid>
    );
};

export default BestTime;