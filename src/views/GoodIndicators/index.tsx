import React from 'react'
import { Container } from 'react-bootstrap'
import gql from 'graphql-tag'
import StocksTable from '../../components/StocksTable'

export default function GoodCheap() {
  return (
    <div className="good-indicators">
      <Container fluid>
        <h1>Bons Indicadores</h1>
        <p>Ações com bons indicadores</p>
        <StocksTable query={GET_GOOD_INDICATORS} dataKey="goodIndicators" />
      </Container>
    </div>
  )
}

const GET_GOOD_INDICATORS = gql`
  {
    goodIndicators {
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
