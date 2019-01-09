module.exports = {
  extend: 'apostrophe-widgets',
  label: 'EC Featured News',
  contextual: true,
  perPage: 50,
  beforeConstruct: function(self, options) {
    options.addFields =[
      {
        type: 'joinByOne',
        name: '_news',
        widthType: 'news',
        filters: {
          projection: {
            title: 1,
            slug: 1,
            type: 1,
            tags: 1,
            content: 1,
            publishedAt: 1
          }
        }
      },
      {
        type: 'range',
        name: 'news_gradient',
        label: 'Gradient amount',
        help: '0.0 is no gradient, 1.0 is full gradient',
        min: 0.0,
        max: 1.0,
        step: 0.05, // optional
        def: 0.5
      },
      {
        name: 'news_title',
        label: 'Title',
        type: 'string',
        required: true
      },
      {
        name: 'news_url',
        label: 'URL (optional)',
        help: 'Add a link to the title',
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
        required: true
      },
      {
        name: 'news_image',
        type: 'singleton',
        required: false,
        label: 'Select Image',
				widgetType: 'apostrophe-images',
				options: {
					minSize: [ 600, 300 ],
					focalPoint: true
        }
      },
      {
        name:'news_size',
        type: 'select',
        label: 'Select widget height',
        help: 'small = 200px, medium = 300px, large = 400px',
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
