
!!! **NOT STABLE** !!!, still a playground. There's a lot to refactor and develop.

**Don't consider stable** until this notice is gone.

# e-Gov
Hi, I'm e-Gov.

I'm created as a demonstration which purpose is:

1. to show what would a well-working electronic governance system look like to its users
1. to hint the required automatisation for a well-working electronic governance
1. to show that how would a well-working electronic governance system help communication between people


# Technical notes

### Getting started
Run:

```sh
npm install
bower install
webpack
python3 -m http.server # or python -m SimpleHTTPServer 
```

Go to http://127.0.0.0:8000/


### Implementation details
1. still just static pages
1. uses `bower` for fronend package manager
1. uses `webpack` for javascript loading, packing and minimizing
1. uses `angular` directives with a project-specific directive factory
1. uses `SCSS` for styling and `JavaScript` for scripting.
1. uses google material design as basis for its UI and UX.
1. uses `fontcustom` to automatically generate icon fonts from svgs.
1. uses `LumX` module for its partial implementation of Google Material Design.
1. borrows styling from the `Polymer` project to improve upon `LumX`

See [RESEARCH.md](RESEARCH.md) for more details.

#### File structure highlights

```
egov
├── bower.json         // descriptor of external frontend dependencies 
├── index.html         // login screen
├── dash.html          // egov dashboard screen
├── LICENSE
├── RESEARCH.md        // research notes
└── static
    ├── element
    │   ├── ....       // pseudo-webcomponents written as angular directives
    ├── font
    │   └── egov-icons // project-sepecific icon font
    ├── img
    │   ├── vectors    // svgs for icon font
    │   └── <other images>
    ├── lib
    │   ├── ....       // external frontend dependencies
    ├── script         // app-specific javascripts
    └── style          // app-specific SCSS and overrides of external dependencies styling
        └── lumx-breakdown //
```