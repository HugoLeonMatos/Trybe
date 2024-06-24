import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';;
import { matches, matchesFina } from './mocks'
import Matches from '../database/models/Matches';
import IMatches from '../Interfaces/IMatches';
import validToken from '../middlewares/ValidToken';

chai.use(chaiHttp);

const { expect } = chai;


describe('match test', function () {
  it('return All /match GET', async function () {
    sinon.stub(Matches, 'findAll').resolves(matches as any);
    const { status, body } = await chai.request(app).get('/matches');
    expect(status).to.equal(200);
    expect(body).to.be.deep.equal(matches);
  });

  it('match  em andamento GET /matches?inProgress=true', async function () {
    sinon.stub(Matches, 'findAll').resolves(matchesFina as any);
    const resp = await chai.request(app).get('/matches?inProgress=true');
    expect(resp.status).to.equal(200);
    expect(resp.body).be.deep.equal(matchesFina);
  });
  it('match id PATCH', async function () {
    sinon.stub(Matches, 'update').resolves();
    
    const resp = await chai.request(app).patch('/matches/1').send(
      {
        homeTeamGoals: 12,
        awayTeamGoals: 20
      });
    expect(resp.status).to.equal(401);
    expect(resp.body).to.be.deep.equal({ message: 'Token not found' });
  });

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
