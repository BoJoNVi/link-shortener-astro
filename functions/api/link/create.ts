export async function onRequest(context) {
  const request = context.request;

  const body = await request.json();

  const url = body.url;

  if (!url) {
    return new Response("URL is required", { status: 400 });
  }

  const id = Math.random().toString(36).substr(2, 5);

  const data = {
    id,
    url,
    created: new Date().toISOString(),
  };

  const links = context.links;

  console.log(links);

  return new Response(JSON.stringify(data), { status: 200 });
}
