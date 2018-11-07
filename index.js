module.exports = {
  extend: 'apostrophe-widgets',
  label: 'EC Featured News',
  contextual: true,
  perPage: 50,
  beforeConstruct: function(self, options) {
    options.addFields =[
      {
        name: 'news_title',
        label: 'Title',
        type: 'string',
        required: false
      },
      {
        name: 'news_content',
        label: 'Description',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        required: true,
        options: {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ],
            limit: 1000
        }
      },
      {
        name: 'news_date',
        label: 'Date',
        type: 'string',
        required: false
      }
    ].concat(options.addFields || [])
    options.arrangeFields = [
    ].concat(options.arrangeFields || [])
  },
  construct: function (self, options) {
    var superPushAssets = self.pushAssets;

    self.pushAssets = function() {
      superPushAssets();
      self.pushAsset('stylesheet','always');
      self.pushAsset('stylesheet','custom');
    }
  }
};
