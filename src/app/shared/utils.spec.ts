import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { isEqualString } from './utils';

describe('AppComponent', () => {
    it('isEqualString should return true provided absolutely equal strings', (() => {
        const string1 = 'string';
        const string2 = 'string';

        const result = isEqualString(string1, string2);

        expect(result).toBe(true);
    }));

    it('isEqualString should return true provided case only different string', (() => {
        const string1 = 'string';
        const string2 = 'STRING';

        const result = isEqualString(string1, string2);

        expect(result).toBe(true);
    }));

    it('isEqualString should return false provided different strings', (() => {
        const string1 = 'string';
        const string2 = 'something else';

        const result = isEqualString(string1, string2);

        expect(result).toBe(false);
    }));
});
