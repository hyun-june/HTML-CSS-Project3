# HTML-CSS-Project3
## html/css 스터디 3일차~4일차

### 3일차
구글 웹 사이트를 따라 만들면서 기본적인 css의 원리를 이해할 수 있다.

4일차에서는 약간의 자바스크립트를 이용해서 다크 모드를 만들 계획이다.

또한, Gmail 옆에 작은 지도 버튼을 만들어서 모달창으로 띄워 볼 생각인데 시간이 가능할지는 모르겠다.

1. 다크모드
2. 번역
3. 구글맵

### 4일차
1. 다크 모드를 하다가 문제가 발생했다. 맨 처음 구글 웹 사이트 따라 만들기 css를 할 때 body{display:contents}를 주고 했다. 이 덕분에 각종 요소들의 배치가 쉬웠다. 하지만 내가 하려던 다크모드는 body의 색상을 어둡게 하고 글씨 색을 바꾸는 것이였다. body{display:contents}인 상태에서는 body의 색을 줘도 변하지 않았다. 그렇기에 body의 display 속성을 없애고, 다시 자리를 배치했다. 그리고 darkmode를 적용하니 색상이 변하는 걸 확인할 수 있었다.

2. 번역은 의외로 쉽게 해결 할 수 있었다. 구글링을 통해 구글 번역을 알 수 있었고, 이를 가져와서 추가 할 수 있었다.
 
3. 기존에는 구글 맵을 모달을 통해서 띄우고싶었다. 하지만 구글 맵을 가져오려면 api가 필요했고, 당장 하기에는 무리가 있다고 생각해서 메모장 기능을 넣어보기로 했다. 간단하게 input창 텍스트의 값을 읽어서 div를 추가하는 방식으로 진행했고 이 과정에서 처음으로 appendChild라는 것을 사용해 보았다. html/css 스터디이기에 기능은 더 이상 추가하지 않고 마무리했다.
