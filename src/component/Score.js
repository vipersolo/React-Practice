import SuccessScore from './SuccessScore'
import FailedScore from './FailedScore'
function Score(props){
    const isScore = props.isScore

    if (isScore >= 50){
        return <SuccessScore />
    }
    return <FailedScore />
}

export default Score