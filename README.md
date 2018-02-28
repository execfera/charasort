# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set.

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.
 
The version in this repo is built for characters from the [Touhou Project](https://en.wikipedia.org/wiki/Touhou_Project)
game series, but the sorter can be easily edited to create any custom sorter desired.

## Related Sorters
Several others have created other sorters based on other concepts and series, see them [here](https://github.com/execfera/charasort/wiki)!

## Creating Your Own Sorter
This is a list of things you need to change for your sorter, for each file.

 * `index.html`
   * Sorter name: Change under `starting start button` and the `<title>` tags.
   * Starting banner images: 120px x 180px, under `left sort image` and `right sort image`.
   * OpenGraph tags: `og:site_name`, `og:description` and `og:image` will show up on embeds when linked to social media such as Facebook, Twitter and Discord.
   * Sorter info: Insert whatever you like under the `info` tag.
   * Website icon: Remember to get your own `favicon.ico`!

 * `src/js/data.js`

    Change `imageRoot` if you are not uploading your images to imgur.

 * `src/js/data/YYYY-MM-DD.js`

    Creating your own set of data is relatively simple. First, change the `dataSetVersion` date to the date when you are creating the dataset. Example: `dataSetVersion = 2018-02-20`. The actual filename does not matter, it is just for your own easy reference.
    
    Further down, each file comprises of two sets of data: `characterData` and `options`.

    `characterData` is an array of objects filled with character data. Its layout is as follows.

    ```
    {
      name: string,
      img: string,
      opts: {
        key1: boolean | string[],
        key2: boolean | string[],
        ...
      }
    }
    ```

    Parameters:

    * `name`: The name of the character to be displayed. **Required.**
    * `img`: An image filename of the character, in 120px x 180px, to be added to `imageRoot` in `data.js`. **Required.**
    * `opts`: An object of 'options' that will be used to filter out characters that will be used. Further explanation below. **Required.**

    Example:

    ```
    {
      name: "Flandre Scarlet",
      img: "OhaDcnc.png",
      opts: {
        series: ["book", "EoSD", "StB"],
        stage: ["ex"],
        loli: true
      }
    }
    ```

    `options` is an array of objects that can take either two forms. The first form is a **Basic Filter**. The Basic Filter, when selected, removes any character that matches its criteria. Its layout is as follows.

    ```
    {
      name: string,
      key: string,
      tooltip?: string, // optional
      checked?: boolean, // optional
    }
    ```

    Parameters:

    * `name`: The name of the option to be displayed. **Required.**
    * `key`: A shorthand reference, used to refer to it in the character data. **Required.**
    * `tooltip`: Some optional information that appears when you hover over the option. If not provided, defaults to the option's name.
    * `checked`: If set to `true`, this option will be checked when your sorter starts. If not provided, defaults to `false`.

    Example:

    ```
    {
      name: 'Filter Lolis',
      key: 'loli',
      tooltip: 'Check this if you want to remove lolis from being listed.'
      checked: true,
    }
    ```

    In this example, checking this option would remove the example 'Flandre Scarlet' above from the list of sorted characters, since she has `loli` set to `true`. The `checked` option is true, so in this sorter, it would be enabled by default.

    The second form is a **Nested Inclusion Filter**. The Nested Inclusion Filter has a few sub-options under it. When selected, any options under it that are *not* selected will be excluded from the sort. Its layout is similar to the Basic Filter, except with an extra `sub` part, which lists the sub-options.

    ```
    {
      name: string,
      key: string,
      tooltip?: string, // optional
      checked?: boolean, // optional
      sub: [
        {
          name: string,
          key: string,
          tooltip?: string, // optional
          checked?: boolean, // optional
        },
        {
          name: string,
          key: string,
          tooltip?: string, // optional
          checked?: boolean, // optional
        },
        ...
      ]
    }
    ```

    This option will be often the only one you may need, since it is easy to use it for filtering by series.

    Example:

    ```
    {
      name: 'Filter by Series Appearance',
      key: 'series',
      tooltip: 'Check this if you want to filter out certain series.'
      checked: true,
      sub: [
        { name: 'Books & CDs', key: 'book' },
        { name: 'Embodiment of Scarlet Devil', key: 'EoSD' },
        { name: 'Perfect Cherry Blossom', key: 'PCB' },
      ]
    }
    ```

    In this case, this would create a "Filter by Series Appearance" option, with the three listed sub-options. "Flandre Scarlet" above has both `book` and `EoSD` under `series`, so unless you uncheck both "Books & CDs" and "Embodiment of Scarlet Devil", she would still appear in the sort.

## Updating Your Own Sorter

When you need to add more characters to your sorter, you must create a new data file with a new date, and include it in your `index.html` file under the `<script src="src/js/data.js"></script>` line, while keeping your previous data files also included. 

The script will automatically get the latest version, but will retain the previous versions in case someone keeps a shareable link from one of the previous versions.

## Credits

 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
