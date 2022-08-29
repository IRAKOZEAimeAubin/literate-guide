// GETTING THE DATA
async function getRates () {
    document.getElementById( 'result' ).innerHTML = '';
    try {
        const selected = document.getElementById( 'currency' );
        const currency = selected.options[ selected.selectedIndex ].text;
        const res = await axios.get( `https://open.er-api.com/v6/latest/${currency}` );
        const data = res.data;
        for ( const keys in data.rates ) {
            document.getElementById( 'result' ).innerHTML += `
            <tr>
                <td>+${keys}</td>
                <td>${data.rates[keys]}</td>
                <td>${data.time_last_update_utc}</td>
                <td>${data.time_next_update_utc}</td>
            </tr>`
        }
    } catch ( error ) {
        console.log( error );
    }
}

document.getElementById( 'currency' ).addEventListener( 'change', getRates );
window.addEventListener( 'load', getRates );