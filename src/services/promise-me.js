/**
 * TODO:
 * use .then and async/fetch
 */

import { data } from "autoprefixer"

export async function randomTen() {
    const resp = await fetch('https://animechan.vercel.app/api/quotes')
    const data = await resp.json()
    return data
}

export function randomTen2() {
    const resp = fetch('https://animechan.vercel.app/api/quotes')
    .then(resp => resp.json())
    return resp;
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
