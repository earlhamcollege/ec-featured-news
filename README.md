## FEATURED NEWS WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a block for a piece
of news with a faded image background, as well as a description of the news, a date,
and a configurable link.



### GETTING STARTED
#### Prerequisites
In order to use this module, you should have:
- NPM
- ApostropheCMS
#### Installing
From within your apostrophe project directory, run
 `npm install --save ec-featured-news`

Include widget in projects' app.js file:

```
  modules: {
    'ec-featured-news': {},
    // ... other modules
}
```

### Configuration
#### Colors
In css/variables.less, colors are assigned to variable names.
These hex values can be edited without impacting the functionality. These values
are used to configure the background and content colors of the quote.


### Screenshots

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
