import React from 'react'
import { Container } from 'react-bootstrap'
import gql from 'graphql-tag'
import StocksTable from '../../components/StocksTable'

export default function GoodCheap() {
  return (
    <div className="goodCheap">
      <Container fluid>
        <StocksTable query={GET_GOOD_CHEAP} />
      </Container>
    </div>
  )
}

const GET_GOOD_CHEAP = gql`
  {
    goodAndCheap {
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
