import { describe, it, expect } from 'vitest';
import { setDueDateMsg } from '../src/components/ToDoItem/utils';

const currentDate = new Date();
// 1000 ms/sec * 60 sec/min * 60 min/hr * 24 hr/day
const millisecInDay = 1000 * 60 * 60 * 24;

const yesterday = new Date(currentDate.getTime() - millisecInDay);
const twoDaysAgo = new Date(currentDate.getTime() - millisecInDay * 2);
const tomorrow = new Date(currentDate.getTime() + millisecInDay);
const twoDaysFromNow = new Date(currentDate.getTime() + millisecInDay * 2);

describe('setDueDateMsg', () => {
    it("should always return 'no due date set'", () => {
        const result = setDueDateMsg();
        expect(result.props.children).toMatch(/no due date set/);
    });

    it("should always return string containing 'task is 1 day overdue'", () => {
        const result = setDueDateMsg(yesterday);
        expect(result.props.children).toMatch(/task is 1 day overdue/);
    });

    it("should always return string containing 'task is 2 days overdue'", () => {
        const result = setDueDateMsg(twoDaysAgo);
        expect(result.props.children.join('')).toMatch(/task is 2 days overdue/);
    });

    it("should always return string containing 'task is due today'", () => {
        const result = setDueDateMsg(currentDate);
        expect(result.props.children).toMatch(/task is due today/);
    });

    it("should always return string containing 'task is due in 1 day'", () => {
        const result = setDueDateMsg(tomorrow);
        expect(result.props.children).toMatch(/task is due in 1 day/);
    });

    it("should always return string containing 'task is due in 2 days'", () => {
        const result = setDueDateMsg(twoDaysFromNow);
        expect(result.props.children.join('')).toMatch(/task is due in 2 days/);
    });
});