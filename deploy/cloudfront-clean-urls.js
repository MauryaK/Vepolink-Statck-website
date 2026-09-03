function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  var uri = request.uri;
  var querystring = request.querystring || {};

  function querySuffix() {
    var pairs = [];
    for (var key in querystring) {
      if (querystring[key].multiValue) {
        var values = querystring[key].multiValue;
        for (var i = 0; i < values.length; i++) {
          pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(values[i].value));
        }
      } else if (querystring[key].value === "") {
        pairs.push(encodeURIComponent(key));
      } else {
        pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(querystring[key].value));
      }
    }
    return pairs.length ? "?" + pairs.join("&") : "";
  }

  if (host === "vepolink.com") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://www.vepolink.com" + uri + querySuffix() }
      }
    };
  }

  if (uri === "/wqms" || uri === "/wqms/") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "/water-quality-monitoring/" }
      }
    };
  }

  if (uri === "/about" || uri === "/water-quality-monitoring") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: uri + "/" }
      }
    };
  }

  var deferredRoutes = ["/login", "/support", "/ops/support"];
  for (var routeIndex = 0; routeIndex < deferredRoutes.length; routeIndex++) {
    var route = deferredRoutes[routeIndex];
    if (uri === route || uri.indexOf(route + "/") === 0) {
      return {
        statusCode: 404,
        statusDescription: "Not Found",
        headers: {
          "cache-control": { value: "no-store" },
          "content-type": { value: "text/plain; charset=utf-8" },
          "x-robots-tag": { value: "noindex, nofollow" }
        },
        body: "Not Found"
      };
    }
  }

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  }

  return request;
}
