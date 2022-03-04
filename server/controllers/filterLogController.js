const Logs = require('../models/logs');

const filterLogController = {};

filterLogController.filter = async (req, res, next) => {
  try {
    const { level, startSearch, keyword } = req.body;
    console.log(level, startSearch, keyword);
    if (!level && !startSearch && !keyword) {
      const dataError = {
        log: 'filterLogController middleware: no target for filtering',
        status: 406,
        message: { err: 'An error occurred' },
      };
      return next(dataError);
    }

    const match = {};
    if (level) {
      match['level'] = level;
    }

    if (startSearch) {
      const range = new Date(startSearch);
      match['timestamp'] = { $gte: range };
    }

    // if (keyword){
    //   match['keyword'] = keyword;
    // }

    console.log(match);

    const data = await Logs.find(match);

    if (!data) {
      const dataError = {
        log: 'filterLogController middleware: error filtering',
        status: 406,
        message: { err: 'An error occurred' },
      };
      return next(dataError);
    }

    res.locals.filteredLogs = data;
    return next();
  } catch (err) {
    console.log(`error from filter log. Message: ${err}`);
  }
};

// { level: { $lookup: ['info', 'warn'] } }
// { timestamp: new Date('2022-02-25T03:06:23.080Z') }
// { keyword: /match.keyword/}
// { level: 'info' }
// {
//   timestamp: {
//     $lt: [
//       { $dateFromString: { dateString: '$date' } },
//       new Date('2022-02-25T03:14:07.428Z'),
//     ],
//   },
// }
// { _id: req.query._id }

module.exports = filterLogController;
