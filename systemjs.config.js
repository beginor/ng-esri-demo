/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // paths serve as alias
    paths: {
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the dist folder
      'app': 'src',
      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      'tslib': 'npm:tslib/tslib.js',
      // rxjs
      'rxjs': 'npm:rxjs',
      // ng-bootstrap
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    },
    packages: {
      'rxjs': { defaultExtension: 'js' },
      'app': { main: 'main.js', defaultExtension: 'js', format: 'cjs' }
    }
  });
})(this);
