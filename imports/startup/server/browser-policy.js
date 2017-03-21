import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
