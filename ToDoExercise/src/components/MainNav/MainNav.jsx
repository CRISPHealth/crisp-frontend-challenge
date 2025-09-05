import { useState } from 'react';
import { todoActions } from '../../state/todoSlice';
import { historyActions } from '../../state/listHistorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { Close, Undo, Redo } from '@mui/icons-material';
import Metrics from '../Metrics/Metrics';
import './MainNav.css';

export default function MainNav() {
    const [showMetrics, setShowMetrics] = useState(false);
    let toDoList = useSelector(state => state.todos);
    let pastListState = useSelector(state => state.listHistory.past);
    let futureListState = useSelector(state => state.listHistory.future);
    const dispatch = useDispatch();

    // On 'undo' click, revert todo list to previous state (if previous state exists).
    function handleUndoClick() {
        const pastState = pastListState[pastListState.length - 1]
        if (pastState) {
            dispatch(todoActions.resetState(pastState));
            dispatch(historyActions.undo(toDoList));
        }
    }

    // On 'redo' click, revert todo list to state before undo action was implemented (if future state exists).
    function handleRedoClick() {
        const futureState = futureListState[futureListState.length - 1]
        if (futureState) {
            dispatch(todoActions.resetState(futureState));
            dispatch(historyActions.redo(toDoList));
        }
    }

    return (
        <div className='main-nav'>
            <button id='metrics' onClick={() => { setShowMetrics(true) }}>View Metrics</button>
            {showMetrics && (
                <div className='metric-popup'>
                    <Close id='close-metrics' onClick={() => { setShowMetrics(false) }} />
                    <Metrics />
                </div>
            )}
            <Redo id='redo' onClick={handleRedoClick} />
            <Undo id='undo' onClick={handleUndoClick} />
        </div>
    )
}