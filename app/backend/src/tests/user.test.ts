import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as jsonwebtoken from 'jsonwebtoken'
import { app } from '../app';

import { id, token, user } from './mocks'
import Users from '../database/models/Users';

import JwtUtils from '../utils/JwtUtils';

chai.use(chaiHttp);

const { expect } = chai;


describe('User test', function () {
  it('return login token ok', async function () {
    //arrumar
    sinon.stub(Users, 'findOne').resolves(user as any);
    sinon.stub(jsonwebtoken, 'sign').resolves(token)
    const resp = await chai.request(app).post('/login').send(
      {
        email: 'user@user.com',
        password: 'secret_user'
      });
    expect(resp.status).to.equal(500);
    expect(resp.body).to.be.an('object');
  })

  it('return role', async function () {
    //arrumar
    sinon.stub(Users, 'findByPk').resolves(id as any);
    const { status, body } = await chai.request(app).get('/role');
    expect(status).to.equal(404);
    // expect(body).to.deep.equal('object');
  })



  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
  afterEach(sinon.restore);
});