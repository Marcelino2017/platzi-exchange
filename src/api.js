/* const url = 'api.coincap.io/v2';

function getAssets() {
    return fetch (`${url}/assets?limit=20`)
        .then((result) => {
            result.json()
        })
        .then((res) => {
            res.data
        })
    
}

export default {
    getAssets
} */
const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`,  {
        mode: "cors",
        method: "GET",
        headers: {
            Accept: "application/json",
        },
   })
   .then(res => res.json())
   .then(res => res.data)
}

function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`)
      .then(res => res.json())
      .then(res => res.data)
}

function getAssetHistory(coin) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
    .then(res => res.json())
    .then(res => res.data)
}


export default {
  getAssets,
  getAsset,
  getAssetHistory
}
