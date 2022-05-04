const checkLogBody = (body) => {
  return Array.isArray(body.logs) ? body.logs[0] : body;
};

const isBackend = (origin) => {
  if (origin === 'Backend') return true;
  if (origin === 'Frontend') return false;
  if (origin === 'All' || origin === '') return { $not: { $type: 'null' } };
};

module.exports = { checkLogBody, isBackend };
