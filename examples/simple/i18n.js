const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const detector = {
  name: 'always-serve-german',
  lookup: (req, res, options) => {
    // You can add anything here (import custom files, etc.)
    return 'de';
  },
  // This method is optional
  cacheUserLanguage: (lng, options) => {
    // options -> are passed in options
    // lng -> current language, will be called after init and on changeLanguage

    // store it
  }
};


module.exports = new NextI18Next({
  otherLanguages: ['de'],
  // Comment out the line below to use language detection
  // lng: 'en',
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  debug: true,
  detection: {
    order: ['always-serve-german'],
  },
  customDetectors: [detector],
})
