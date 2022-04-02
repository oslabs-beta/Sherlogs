module.exports = {
  checkLogBody(body) {
    return Array.isArray(body.logs) ? body.logs[0] : body;
  },
};
