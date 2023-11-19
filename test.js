const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../AppPrueba/app');

describe('App', () => {
    it('deberia devolver un saludo en la ruta /', (done) => {
        supertest(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Hola Mundo, Eimy L. Figueroa, 2020-9190');
                done();
            });
    });
});