# L10n.js

Localization (L10n) mapping and information with support for over 140 localizations.

Information provided by script includes language fallbacks, language name and locale name, text direction (ltr or rtl), and character set (charset).

## Including L10n.js (in the browser)
```html
<script src="L10n.js"></script>
```

## Including L10n.js (in NodeJS or RequireJS)
```javascript
var L10n = require('L10n');
```

## Usage
```javascript
var locale = new L10n('spa');

locale.get(); // 'spa'
locale.set('eng');
locale.get(); // 'eng'

locale.map('eng'); // 'en'
locale.map('fre'); // 'fr'
locale.map('spa'); // 'sp'

locale.info(); // {language: 'English (United States)', locale: 'eng', fallback: 'eng', charset: 'utf-8', direction: 'ltr'}
locale.info('en_us'); // {language: 'English (United States)', locale: 'en_us', fallback: 'eng', charset: 'utf-8', direction: 'ltr'}

// Some variations for country-level language codes
locale.info('en_us');
locale.info('en_US');
locale.info('en-us');
locale.info('EN-US');

// Information given by L10n.prototype.info(...);
locale.info('en_us').language // 'English (United States)'
locale.info('en_us').locale // 'en_us'
locale.info('en_us').fallback // 'eng'
locale.info('en_us').charset // 'utf-8'
locale.info('en_us').direction // 'ltr'
```