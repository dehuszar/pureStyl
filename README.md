# Pure-styl

pureStyl is an attempt (currently incomplete) at porting Yahoo's Pure over to Stylus.  Pure is great, but like other layout frameworks relies on littering your markup with utility classes.  As pre-processors allow you to set variables, I've converted all the utility classes over to Stylus variables so they can instead be mapped to more meaningful, semantic selectors --classes or otherwise.

This is still a work in process and should not be used for production unless you're prepared to do a bit of a haul.  Examples and more detailed explanations are forthcoming, but don't hesitate to ask if you have any questions.

I'm using Ember-CLI as my build tool and demo platform.  If you are just looking to access the stylus files, feel free to drop the "app/styles/pure/" folder into your preferred Stylus build stack and let 'er rip.  The "app.styl" file provides initial remapping examples for setting up the demos.  Since I am remapping the classes to rebuild the Pure docs which demos each class, the mileage gained from this strategy is not uber apparent.  Once the initial docs have been re-created and the library completely ported, I'll have some ninja demos that cut more to the point of the exercise.

Stay tuned.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation (This is generated docs -- I haven't tested this yet, don't take it as rote)

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* Pure: http://purecss.io
* Stylus: http://learnboost.github.io/stylus
