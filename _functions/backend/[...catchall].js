export async function onRequest({ request }) {
    const url = new URL(request.url);
    const proxyPath = url.pathname.replace("/backend", "/backend"); // se mantiene igual
    const targetUrl = "https://backend-j5m6.onrender.com" + proxyPath;
  
    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual",
    });
  
    return await fetch(proxyRequest);
  }
  