"use strict"

let stocks = [
  {symbol: "JSX", price: 123.42, volume: 123023},
  {symbol: "APPL", price: 332.32, volume: 41232},
  {symbol: "GOGL", price: 523.42, volume: 2412}
]

let allStockSymbols =
  stocks
    .filter(function (stock) {
      return stock.price >= 150
    })
    .map(function(stock){
      return stock.symbol
    })

allStockSymbols.forEach(function(stock) {
  console.log(stock)
})
