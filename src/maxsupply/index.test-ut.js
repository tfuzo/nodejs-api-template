'use strict';

const chai = require('chai');
const expect = chai.expect;
const health = require('./index');

describe('maxsupply - UT', () => {

  describe('status()', () => {

    it('provides vxl maxsupply', (done) => {
      // Stub req
      const reqStub = null;

      // Mock res
      const resMock = {};
      resMock.status = (statusCode) => {
        expect(statusCode).to.equal(200);
        return resMock.status;
      };
      resMock.status.json = (json) => {
        expect(json).to.deep.equal({ status: 'UP' });
        done();
      };

      // Stub next
      const nextStub = null;

      // Run unit under test
      maxsupply.status(reqStub, resMock, nextStub);
    });
  });

});
