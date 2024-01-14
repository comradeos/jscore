export async function GET(request) {
    const data = {
        message: 'Hello world!'
    };

    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST(request) {
    const data = await request.json();
    return new Response(data.name);
}