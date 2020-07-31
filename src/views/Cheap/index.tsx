import React from 'react'
import { Container } from 'react-bootstrap'
import gql from 'graphql-tag'
import StocksTable from '../../components/StocksTable'

export default function GoodCheap() {
  return (
    <div className="cheap">
      <Container fluid>
        <h1>Ações baratas</h1>
        <p>Ações com preço muito abaixo da média</p>
        <StocksTable query={GET_CHEAP} dataKey="cheap" />
      </Container>
    </div>
  )
}

const GET_CHEAP = gql`
  {
    cheap {
      code
      price {
        actualValue
        minValue
        maxValue
        dividend
      }
      pl
      pVp
      roe
      roa
      lpa
      roic
      netMargin
      dlPl
      evEbit
      cagrRevenue
      currentLiquidity
      cagrProfits
      dlEbit
      dailyLiquidity
    }
  }
`
