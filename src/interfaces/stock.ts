export interface Price {
  actualValue: Number
  minValue: Number
  maxValue: Number
  dividend: Number
}

export interface Stock {
  code: Number
  price: Price
  pl: Number
  pVp: Number
  roe: Number
  roa: Number
  lpa: Number
  roic: Number
  netMargin: Number
  dlPl: Number
  evEbit: Number
  cagrRevenue: Number
  currentLiquidity: Number
  cagrProfits: Number
  dlEbit: Number
  dailyLiquidity: Number
}
