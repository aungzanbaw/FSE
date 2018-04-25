"use strict"

let exchanges = [
  [
    {symbol: "馕馔首", price: 32.42, volume: 1231231253},
    {symbol: "今上天皇", price: 8583.32, volume: 41232},
    {symbol: "গঘঙচছজ", price: 200.42, volume: 2131233}
  ],
  [
    {symbol: "JSX", price: 123.42, volume: 123023},
    {symbol: "APPL", price: 332.32, volume: 41232},
    {symbol: "GOGL", price: 523.42, volume: 2412}
  ]
]

exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(stock)
  })
})
