const mapbtn = document.getElementById("map-btn");


const darkmode = () => {
    console.log("클릭");
    const body = document.body;
    body.classList.toggle("dark-mode");
}

mapbtn.addEventListener("click", darkmode);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages : 'en,ja,ko,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }

  