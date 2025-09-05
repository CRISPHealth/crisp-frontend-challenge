import { describe, it, expect } from 'vitest';
import historyReducer, { historyActions } from '../src/state/listHistorySlice'

const taskExample = {
    description: "",
    startDate: 0,
    dueDate: "",
    isComplete: false,
    completedDate: null
};

const statePayload = [taskExample];

describe('listHistoryReducer', () => {
    it("should return initial state when passed an empty action", () => {
        const result = historyReducer(
            {
                past: [],
                future: []
            }, 
            { type: "" }
        );
        expect(result.past).toEqual([]);
        expect(result.future).toEqual([]);
    });

    it('should add current payload to past state array and reset future to empty array', () => {
        const result = historyReducer(
            {
                past: [statePayload, statePayload],
                future: [statePayload, statePayload]
            },
            historyActions.addHistory(statePayload)
        );
        expect(result.past).toEqual([statePayload, statePayload, statePayload]);
        expect(result.future).toEqual([]);
    });

    it('should undo last state change. Remove last stored state from past array and add current payload to future array', () => {
        const result = historyReducer(
            {
                past: [statePayload, statePayload],
                future: [statePayload]
            },
            historyActions.undo(statePayload)
        );
        expect(result.past).toEqual([statePayload]);
        expect(result.future).toEqual([statePayload, statePayload]);
    });

    it('should redo last state change. Remove last stored state from future array and add current payload to past array', () => {
        const result = historyReducer(
            {
                past: [statePayload],
                future: [statePayload, statePayload]
            },
            historyActions.redo(statePayload)
        );
        expect(result.past).toEqual([statePayload, statePayload]);
        expect(result.future).toEqual([statePayload]);
    });
});