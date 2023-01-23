// import server from "../../server.mjs";

export const create = async (req, res) => {
  // return new Promise((resolve, reject) => {
    console.log('entrei em create')
    let buffer = '';
    
    req.on('data', (chunk) => {
        buffer += chunk;
      });

    await req.on('end', (chunk) => {
      if (chunk) {
        buffer += chunk;
      }
      // res.writeHead(200, 'ok');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
      res.write(buffer);

      res.end();
      // resolve();
    });
    
  // });
}

export const findAll = (_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.end('chamou get');
}

export const options = (_req, res) => {
  res.statusCode = 204;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);
  res.end();
};

// server.on('request', (req, res) => {
  // console.log(http.METHODS);
  // console.log(req.headers)
  // const path = url.parse(req.url, true); // path.pathname, path.search, path.query
  // const decoder = new StringDecoder('utf-8');
  // let buffer = '';
  
  // req.on('data', (chunk) => {
  //     // console.log('data --->', chunk);
  //     // console.log('decoded --->', buffer += chunk);
  //     buffer += chunk;
  //   });

  //   req.on('end', (chunk) => {
  //     // console.log(req.body);
  //     console.log(req.method);
  //     console.log(chunk);
  //     if (chunk) {
  //       buffer += chunk;
  //     }
  //     res.writeHead(200, 'ok');
  //     res.write(buffer);

  //     res.end('its done');
  //   });
    
    // res.writeHead(200, 'OK');
    // console.log(req.url);
  // console.log(util.inspect(path.query));
  // res.write(util.inspect(path.query));
  // res.end('Done');
// });