const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Importa la aplicación

chai.use(chaiHttp);
const expect = chai.expect;

describe('Aplicación web', () => {
  it('Debería devolver un saludo personalizado en la ruta /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hola Mundo, Eimy L. Figueroa, 2020-9190');
        done();
      });
  });
});