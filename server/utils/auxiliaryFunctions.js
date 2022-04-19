const checkLogBody = (body) => {
  return Array.isArray(body.logs) ? body.logs[0] : body;
};

const isBackend = (origin) => {
  if (origin === 'backend') return true;
  if (origin === 'frontend') return false;
  if (origin === 'all' || origin === '') return { $not: { $type: 'null' } };
};

module.exports = { checkLogBody, isBackend };
