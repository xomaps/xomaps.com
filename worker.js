// 官网入口收敛：非 www 主机名（apex xomaps.com 等）301 到 www，
// 避免双入口重复内容稀释搜索引擎收录；www 直接透传静态资源。
const CANONICAL_HOST = "www.xomaps.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== CANONICAL_HOST) {
      return Response.redirect(
        "https://" + CANONICAL_HOST + url.pathname + url.search,
        301,
      );
    }
    // html_handling=none 关闭了根路径 index.html 的默认映射，这里显式补上
    if (url.pathname === "/") {
      return env.ASSETS.fetch(
        new Request(new URL("/index.html", url.origin), request),
      );
    }
    return env.ASSETS.fetch(request);
  },
};
