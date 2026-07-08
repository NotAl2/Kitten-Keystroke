import { serveStatic } from "cloudflare:workers";

export default {
  async fetch(request, env) {
    return serveStatic(request, env);
  }
};
