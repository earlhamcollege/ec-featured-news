module.exports = {
  extend: 'apostrophe-widgets',
  label: 'EC Featured News',
  contextual: true,
  perPage: 50,
  beforeConstruct: function(self, options) {
    options.addFields =[
      {
        type: 'range',
        name: 'news_gradient',
        label: 'Gradient amount',
        min: 0.0,
        max: 1.0,
        step: 0.01, // optional
        def: 0.5
      },
      {
        name: 'news_title',
        label: 'Title',
        type: 'string',
        required: false
      },
      {
        name: 'news_url',
        label: 'URL to main article (optional)',
        required: false,
        type: 'string'
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
      },
      {
        name: 'news_image',
        type: 'singleton',
				widgetType: 'apostrophe-images',
				options: {
					minSize: [ 600, 300 ],
					focalPoint: true
        }
      },
      {
        name:'news_size',
        type: 'select',
        label: 'Select widget size',
        required: true,
        choices: [
          {
            label: 'Small',
            value: '1'
          },
          {
            label: 'Medium',
            value: '2'
          },
          {
            label: 'Large',
            value: '3'
          }
        ]
      }
    ].concat(options.addFields || [])
    options.arrangeFields = [
      {
        name:'content',
        label:'Content Settings',
        fields: ['news_title','news_date','news_content','news_url']
      },
      {
        name:'display',
        label: 'Display Settings',
        fields: ['news_size','news_image','news_gradient']
      }
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
