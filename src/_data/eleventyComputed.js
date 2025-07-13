module.exports = {
  year: () => new Date().getFullYear(),
  permalink: (data) => {
    // Don't process drafts in production
    if (data.draft && process.env.NODE_ENV === 'production') {
      return false;
    }
    return data.permalink;
  }
};