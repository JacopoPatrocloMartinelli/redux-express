const { expect } = require('chai')
const express = require('express')
const httpMocks = require('node-mocks-http');

const redex = require('../index') 

let app

beforeEach(() => {
  app = express()
})

describe('Verifico che il middleware si configura correttamente con express', () => {

  it('Dovrebbe esportare una funzione con la firma di un middleware', () => {
    expect(redex()).to.be.a.instanceof(Function)
  })
  
  it('Dovrebbe contenere in req.Store lo store', (done) => {
    const mockRequest = httpMocks.createRequest({
      method: 'GET',
      url: '/'
    });

    const mockResponse = httpMocks.createResponse()

    app.use(redex())

    app.get('/', (req) => {
      expect(req.Store).not.be.undefined
      done()
    })
    app(mockRequest, mockResponse)
  })

  it('Dovrebbe ritornare lo stato della richiesta', (done) => {
    const mockRequest = httpMocks.createRequest({
      method: 'GET',
      url: '/',
      body: {
        test:'test'
      },
      query: {
        id: 'test'
      }
    });

    const mockResponse = httpMocks.createResponse()

    app.use(redex())

    app.get('/', (req) => {
      expect(req.Store.getState().navigation.body.test).to.be.eq('test')
      expect(req.Store.getState().navigation.query.id).to.be.eq('test')
      done()
    })
    app(mockRequest, mockResponse)
  })

  it('Dovrebbe aggiungere il reducer aggiunto', (done) => {
    const mockRequest = httpMocks.createRequest({
      method: 'GET',
      url: '/',
      body: {
        test:'test'
      },
      query: {
        id: 'test'
      }
    });

    const mockResponse = httpMocks.createResponse()

    app.use(redex({
      user: (status = { user: 1 }, action) => {
        return status
      },
      pizza: (status = { pizza: 1 }, action) => {
        return status
      }
    }))

    app.get('/', (req) => {
      expect(req.Store.getState().navigation).to.not.be.undefined
      expect(req.Store.getState().user).to.not.be.undefined
      expect(req.Store.getState().pizza).to.not.be.undefined
      expect(req.Store.getState().asso).to.be.undefined
      done()
    })
    app(mockRequest, mockResponse)
  })

})