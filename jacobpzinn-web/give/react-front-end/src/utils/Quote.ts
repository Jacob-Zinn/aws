export default {

    getQuote: function (matchWord: string): Promise<string> {

        return getQuote(matchWord);


        function getQuote(matchWord: string): Promise<string> {
            const api_url = `https://api.quotable.io/random?tags=`;
            const url = api_url.concat((matchWord).replace(/[^a-z]/gi, ""));
            // .concat(`|friendship`);

            return returnMessage(url).then((quote => { return quote })).catch(() => { return "" });
        }

        async function returnMessage(url: string): Promise<string> {
            console.log("entering")
            return getapi(url)
                .then((quote) => {
                    return quote[`content`];
                })
                .catch((error) => {
                    return getapi(`https://api.quotable.io/random?tags=friendship`)
                        .then((quote) => {
                            // returning surefire quote
                            return quote['content'];
                        })
                        .catch((error) => {
                            console.log(`getapi Error: ${error.message}`);
                            return ""
                        });
                });
        }

        async function getapi(url: string): Promise<any> {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw Error(response.statusText);
            }
        }

    },
    getRandomInt: function (max: any) {
        return Math.floor(Math.random() * max);
    }
}