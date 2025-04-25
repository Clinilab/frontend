export async function onRequest({ request }) {
    try {
      const url = new URL(request.url);
      const proxyPath = url.pathname.replace(/^\/backend/, "");
      const targetUrl = "https://backend-j5m6.onrender.com" + proxyPath;
  
      const proxyRequest = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.method !== "GET" && request.method !== "HEAD" ? request.body : null,
        redirect: "follow",
      });
  
      const response = await fetch(proxyRequest);
  
      return new Response(response.body, {
        status: response.status,
        headers: response.headers,
      });
  
    } catch (error) {
      return new Response("Error en el proxy: " + error.message, { status: 502 });
    }
  }
  