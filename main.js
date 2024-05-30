const mapbtn = document.getElementById("map-btn");
const savememo = document.getElementById("save-memo");

const darkmode = () => {
    console.log("클릭");
    const body = document.body;
    body.classList.toggle("dark-mode");
}

mapbtn.addEventListener("click", darkmode);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages : 'en,ja,ko,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }

const addmemo = () =>{
    const memoInput = document.getElementById("memo-input");
    const memoList = document.getElementById("memo-list");

    if(memoInput.value.trim() !==""){
        const memoDiv = document.createElement('div');
        memoDiv.className ='memo';
        memoDiv.textContent = memoInput.value;
        memoList.appendChild(memoDiv);
        memoInput.value ='';
    }
}

savememo.addEventListener("click", addmemo);