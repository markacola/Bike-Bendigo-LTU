// eslint-disable-next-line no-unused-vars
module.exports = function(data, connection, hook) {
  if (
    !connection.user || data._id.toString() !== connection.user._id.toString()
  ) {
    return false;
  }
  return data;
};
