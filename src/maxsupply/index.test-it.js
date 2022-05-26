'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../../server');

chai.use(chaiHttp);

describe('vxl max suplly', () => {

  describe('GET /maxsupply', () => {

    it('provides vxl maxsupply', (done) => {
      chai.request(server)
        .get('/maxsupply')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({ status: 'UP' });
          done();
        });
    });

  });

});
