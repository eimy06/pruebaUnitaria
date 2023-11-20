const request = require('supertest');
const app = require('./app');

describe('Aplicación web', () => {
  it('Debería devolver un saludo en la ruta /', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hola Mundo, Eimy L. Figueroa, 2020-9190');
  });
});
