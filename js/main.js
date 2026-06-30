const cryptoData = [
{id: "bitcoin",name: "Bitcoin",symbol: "BTC",price_usd: 67234.50,market_cap_usd: 1320000000000,percent_change_24h: 2.34,
image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
},
{id: "ethereum",name: "Ethereum",
symbol: "ETH",
price_usd: 3456.78,
market_cap_usd: 415000000000,
percent_change_24h: -1.23,
image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
},
{
id: "tether",
name: "Tether",
symbol: "USDT",
price_usd: 1.00,
market_cap_usd: 112000000000,
percent_change_24h: 0.01,
image: "https://assets.coingecko.com/coins/images/325/large/Tether.png"
},
{
id: "bnb",
name: "BNB",
symbol: "BNB",
price_usd: 598.75,
market_cap_usd: 89000000000,
percent_change_24h: 1.56,
image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2.png"
},
{
id: "solana",
name: "Solana",
symbol: "SOL",
price_usd: 172.30,
market_cap_usd: 75000000000,
percent_change_24h: -3.45,
image: "https://assets.coingecko.com/coins/images/4128/large/solana.png"
},
{
id: "ripple",
name: "XRP",
symbol: "XRP",price_usd: 0.62,
market_cap_usd: 34000000000,
percent_change_24h: 1.89,
image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png"
},
{
id: "cardano",
name: "Cardano",
symbol: "ADA",
price_usd: 0.45,
market_cap_usd: 15800000000,
percent_change_24h: 5.67,
image: "https://assets.coingecko.com/coins/images/975/large/cardano.png"
},
{
id: "dogecoin",
name: "Dogecoin",
symbol: "DOGE",
price_usd: 0.1523,
market_cap_usd: 21500000000,
percent_change_24h: -0.89,
image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png"
},
{
id: "polkadot",
name: "Polkadot",
symbol: "DOT",
price_usd: 7.89,
market_cap_usd: 10800000000,
percent_change_24h: -0.78,
image: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png"
},
{
id: "chainlink",
name: "Chainlink",
symbol: "LINK",
price_usd: 14.56,
market_cap_usd: 8500000000,
percent_change_24h: 3.21,
image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png"
},
{
id: "avalanche",
name: "Avalanche",symbol: "AVAX",
price_usd: 38.92,
market_cap_usd: 14500000000,
percent_change_24h: -2.10,
image: "https://assets.coingecko.com/coins/images/12559/large/avalanche.png"
},
{
id: "shiba-inu",
name: "Shiba Inu",
symbol: "SHIB",
price_usd: 0.00002345,
market_cap_usd: 13800000000,
percent_change_24h: 8.76,
image: "https://assets.coingecko.com/coins/images/11939/large/shiba.png"
},
{
id: "matic",
name: "Polygon",
symbol: "MATIC",
price_usd: 0.72,
market_cap_usd: 6700000000,
percent_change_24h: 4.32,
image: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png"
},
{
id: "litecoin",
name: "Litecoin",
symbol: "LTC",
price_usd: 72.45,
market_cap_usd: 5400000000,
percent_change_24h: -1.45,
image: "https://assets.coingecko.com/coins/images/2/large/litecoin.png"
},
{
id: "uniswap",
name: "Uniswap",
symbol: "UNI",
price_usd: 7.23,
market_cap_usd: 5400000000,
percent_change_24h: 0.56,
image: "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png"
},
{
id: "cosmos",name: "Cosmos",
symbol: "ATOM",
price_usd: 8.91,
market_cap_usd: 3500000000,
percent_change_24h: -2.78,
image: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png"
},
{
id: "filecoin",
name: "Filecoin",
symbol: "FIL",
price_usd: 8.12,
market_cap_usd: 3900000000,
percent_change_24h: 6.34,
image: "https://assets.coingecko.com/coins/images/12817/large/filecoin.png"
},
{
id: "theta",
name: "Theta Network",
symbol: "THETA",
price_usd: 2.34,
market_cap_usd: 2300000000,
percent_change_24h: 1.23,
image: "https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png"
},
{
id: "vechain",
name: "VeChain",
symbol: "VET",
price_usd: 0.03456,
market_cap_usd: 2500000000,
percent_change_24h: -0.34,
image: "https://assets.coingecko.com/coins/images/1167/large/VeChain.png"
},
{
id: "algorand",
name: "Algorand",
symbol: "ALGO",
price_usd: 0.18,
market_cap_usd: 1500000000,
percent_change_24h: 0.78,
image: "https://assets.coingecko.com/coins/images/4380/large/algorand.png"
}
];


const contenedor = document.querySelector('.container');

function pintarMonedas(datos){
    contenedor.innerHTML = "";

    datos.forEach(coin => {
        const clase = coin.percent_change_24h >= 0 ? "positive" : "negative";
        const flecha = coin.percent_change_24h >= 0 ? "▲" : "▼";
        
        contenedor.innerHTML+= `
        <div class="card">
            <img src="${coin.image}" alt="${coin.name}">
            <h2>${coin.name}</h2>
            <p>${coin.symbol}</p>
            <p>Precio: ${formatPrice(coin.price_usd)}</p>
            <p>${formatCapital(coin.market_cap_usd)}</p>
            <p class="${clase}">
                ${flecha}${coin.percent_change_24h}%
            </p>
        </div> 
        `;
    });
}
const buscador = document.querySelector("#search");
pintarMonedas(cryptoData);

buscador.addEventListener('input', () => {
    const texto = buscador.value.toLowerCase();

    const resultado = cryptoData.filter(coin => 
    coin.name.toLowerCase().includes(texto) ||
    coin.symbol.toLowerCase().includes(texto)
    );
    
    pintarMonedas(resultado);

});


function formatPrice(price){
    if (price >= 1) {
        return price.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        return `${price.toFixed(8)}`;
    }
}

function formatCapital(capital) {
    if (capital >= 1_000_000_000_000) {
        return `$${(capital / 1_000_000_000_000).toFixed(2)}T`;
    }

    if (capital >= 1_000_000_000) {
        return `$${(capital / 1_000_000_000).toFixed(2)}B`;
    }

    return `$${(capital / 1_000_000).toFixed(2)}M`;
}