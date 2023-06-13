const errorHandler = (logEvents) => (err, req, res, next) => {
  logEvents.error(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    { metaData: err.stack }
  );
  res.status(err.status || 500);
  res.render("error");
};

module.exports = errorHandler;
