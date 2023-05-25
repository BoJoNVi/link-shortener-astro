export function onRequest(context) {
  const params = context.params;

  const linkId = params.linkId;

  // Redirect user to google.com
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://google.com",
    },
  });
}
