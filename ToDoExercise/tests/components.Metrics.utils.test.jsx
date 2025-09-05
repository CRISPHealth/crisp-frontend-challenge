import { describe, it, expect } from 'vitest';
import { calculateAvgMinutes } from '../src/components/Metrics/utils';

describe('calculateAvgMinutes', () => {
    it("should return average of array of millisecond values converted to minutes, rounded to 2 decimals", () => {
        const result = calculateAvgMinutes([62144, 52426, 42451, 32078])
        expect(result).toBe('0.79');
    });
});