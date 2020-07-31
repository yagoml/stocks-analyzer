import React from 'react'
import { Container } from 'react-bootstrap'
import gql from 'graphql-tag'
import StocksTable from '../../components/StocksTable'

export default function GoodCheap() {
  return (
    <div className="top-dividend">
      <Container fluid>
        <h1>Top Dividendos</h1>
        <p>
          Ações com os melhores <strong>dividendos</strong>
        </p>
        <StocksTable query={GET_HIGH_DIVIDENDS} dataKey="highDividends" />
      </Container>
    </div>
  )
}

const GET_HIGH_DIVIDENDS = gql`
  {
    highDividends {
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
