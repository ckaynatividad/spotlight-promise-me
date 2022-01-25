/**
 * TODO:
 * use .then and async/fetch
 */

import { data } from "autoprefixer"

export async function randomTen() {
    const resp = await fetch('https://animechan.vercel.app/api/quotes')
    const data = await resp.json()
    return console.log(data)
}

export function randomTen2() {
    const resp = fetch('https://animechan.vercel.app/api/quotes')
    .then(resp => resp.json())
    .then(quotes => console.log(quotes))
    return resp
}
/**
 * TODO:
 */
export async function fetchNeko() {
    const resp = await fetch('https://nekos.best/api/v1/nekos')
    const data = await resp.json()
    return console.log(data);
}
export function fetchNeko2() {
    const resp = fetch('https://nekos.best/api/v1/nekos')
    .then(resp => resp.json())
    .then(nekos => console.log(nekos))
    return resp;
}


/**
 * TODO:
 */
export async function fetchEmoji() {
    const resp = await fetch('https://emojihub.herokuapp.com/api/all')
    const data = await resp.json()
    return console.log(data)
}
export function fetchEmoji2() {
    const resp = fetch('https://emojihub.herokuapp.com/api/all')
    .then(resp => resp.json())
    .then(films => console.log(films))
    return resp;
}
/**
 * TODO:
 */
export async function fetchArt() {
    const resp = await fetch('https://emojihub.herokuapp.com/api/all')
    const data = await resp.json()
    return console.log(data)
}
export function fetchArt2() {
    const resp = fetch('https://emojihub.herokuapp.com/api/all')
    .then(resp => resp.json())
    .then(art => console.log(art))
    return resp
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
