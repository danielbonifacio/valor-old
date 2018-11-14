const RequestData  = (title, data) => ({
  ...data,
  _page: {
    title,
  },
});

module.exports = RequestData;
