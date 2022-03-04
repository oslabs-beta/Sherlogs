const Logs = require('../models/logs');

const filterLogController = {};

filterLogController.filter = async (req, res, next) => {
  console.log('req body', req.body);
  try {
    const { levels, startSearch, keyword } = req.body.data;

    // if (!level && !startSearch && !keyword) {
    //   const dataError = {
    //     log: 'filterLogController middleware: no target for filtering',
    //     status: 406,
    //     message: { err: 'An error occurred' },
    //   };
    //   return next(dataError);
    // }

    console.log(
      'level: ',
      levels,
      'start search: ',
      startSearch,
      'keyword: ',
      keyword
    );
    const match = {};
    if (levels) {
      match['level'] = levels;
    }

    if (startSearch) {
      const range = new Date(startSearch);
      match['timestamp'] = { $gte: range };
    }

    if (keyword) {
      match['$text'] = { $search: keyword };
    }

    console.log('match: ', match);

    const data = await Logs.find(match);

    if (!data) {
      res.locals.noMatchFound =
        'filterLogController middleware: no match for filtering';
    }

    res.locals.filteredLogs = data;
    return next();
  } catch (err) {
    const filterError = {
      log: 'filterLogController middleware: error running filter middleware',
      status: 400,
      message: { err: 'An error occurred' },
    };
    return next(filterError);
  }
};

module.exports = filterLogController;
