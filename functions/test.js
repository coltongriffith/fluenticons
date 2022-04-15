import parser from 'rss-parser';
export async function onRequest(context) {
    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    return new Response(JSON.stringify(feed), {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
}
