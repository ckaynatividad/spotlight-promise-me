/**
 * TODO:
 * use .then and async/fetch
 */

export async function randomTen() {
    const resp = await fetch('https://animechan.vercel.app/api/quotes')
    const data = await resp.json()
    return data
}

export function randomTen2() {
    fetch('https://animechan.vercel.app/api/quotes')
    .then(resp => resp.json())
    .then(quotes => console.log(quotes))
}
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
