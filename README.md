
**Extension:** Google chrome color picker extension with only javascript and html css.

# ST SABBIR (devlopersabbir)

This is fully free and usefull color picker. We some time use Color zila and any others extension for pick any color inside our browser tab.
But do you know? we can definetly create like this extension only using html, css and javascript.

##### Anyway, let's jump to the code.
> Open your cmd/windows terminal. prace `windows + r` then type `cmd`

### Follow stap by stap
* `--create dir` - Firstly we need to create a directory where we will create our extension. For example I create a STSabbir directory in my desktop.
* `--open vs code` - Open root directory in your code editor ~~which code editor your like to use~~
* `--JSON file` - Create a new `manifest.json` file in your root directory.

## Copy this code and put in your `manifest.json` file.
```
{
  "name": "Color picker",
  "description": "This is google chrome extesion.",
  "version": "0.0.2",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_title": "Color picker"
  },
  "permissions": ["activeTab", "scripting", "tabs"],
  "options_page": "options.html",
  "icons": {
    "16": "img.png"
  }
}
```
* `--Required file` - Create all of required file which we already call into our `manifest.json` file.
> Like `"service_worker": "background.js"` `"default_popup": "popup.html"` `"options_page": "options.html"`
* `--Icons` - You need to must use icon that is mandetory with this format.
```
"icons": {
  "16": "icon16.png",
  "48": "icon48.png",
  "128": "icon128.png"
}
```
