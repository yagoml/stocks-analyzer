import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function AppHeader() {
  return (
    <div className="d-flex align-items-center app-header">
      <Link to="good-indicators">Bons indicadores</Link>
      <Link to="good-cheap">Boas e Baratas</Link>
      <Link to="top-dividend">Top Dividendos</Link>
      <Link to="cheap">Muito Baratas</Link>
    </div>
  )
}
