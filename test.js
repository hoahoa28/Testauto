let chai = require('chai');
let expect = chai.expect;
const { calculateValue } = require('./index.js')

describe('calculateValue', function () {

    it('returns 2 times the parameter value as an integer when the parameter is divisible by 2', function () {
        const result = calculateValue(4);
        expect(result).to.be.an('number').that.satisfies(Number.isInteger);
        expect(result).to.equal(8);
    });

    it('returns 3 times the parameter value as an integer when the parameter is divisible by 3', function () {
        const result = calculateValue(9);
        expect(result).to.be.an('number').that.satisfies(Number.isInteger);
        expect(result).to.equal(27);
    });

    it('returns 5 times the parameter value as an integer when the parameter is not divisible by 2 or 3', function () {
        const result = calculateValue(7);
        expect(result).to.be.an('number').that.satisfies(Number.isInteger);
        expect(result).to.equal(35);
    });

    it('returns 0 as an integer when the input is 0', function () {
        const result = calculateValue(0);
        expect(result).to.be.an('number').that.satisfies(Number.isInteger);
        expect(result).to.equal(0);
    });

});