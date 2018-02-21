# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps
   shareable links valid even if the base character data is changed.
 
The version in this repo is built for characters from the [Touhou Project](https://en.wikipedia.org/wiki/Touhou_Project)
game series, but the sorter can be easily edited to create any custom sorter desired.

## Creating your own Sorter
TODO(execfera): Document

## Known Issues

* Does not work with CloudFlare's Rocket Loader.
