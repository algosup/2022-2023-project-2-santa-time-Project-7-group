function googleTranslateElementInit() {
    let language = Navigator.language;
    new google.translate.TranslateElement({
        pageLanguage: language
    }, 'google_translate_element');
}