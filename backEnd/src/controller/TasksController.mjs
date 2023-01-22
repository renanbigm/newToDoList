// import server from "../../server.mjs";

const create = (req, res) => {
  // return new Promise((resolve, reject) => {
    let buffer = '';
    
    req.on('data', (chunk) => {
        buffer += chunk;
      });

      req.on('end', (chunk) => {
        if (chunk) {
          buffer += chunk;
        }
        res.writeHead(200, 'ok');
        res.write(buffer);

        res.end('its done');
        // resolve();
      });
    
  // });
}

export default create;

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