const router = (req, res) => {
  console.log(req.url, req.method, req.headers);

  res.statusCode = 200;
  res.end();
}

export default router;