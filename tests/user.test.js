
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/');
const { User } = require('../../src/api/models'); 

describe('User Controller test', () => {
  before(async () => {
    await Author.query().delete();
  });

  it('should return a list of users', (done) => {
    request(app)
      .get('/api/author')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(0);
        done();
      });
  });
});
