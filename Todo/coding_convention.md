## HTML

DOCTYPE
<!doctyype html>을 사용한다.
TITLE
타이틀의 하위 섹션명의 구분자는 ‘ | ‘ 을 사용한다.
ex: <title>이디야 | 음료</title>


색인
H1 : 로고명
H2 : 메인메뉴, 본문, 이용약관 등
H3 : 세부 컨텐츠, 핵심 컨텐츠 등
H4 : 서브 컨텐츠


주석표기
수정작업 시 주석처리
마크업 수정 시, 수정부분을 표기하는 주석은 다음과 날짜를 기입하여 사용한다.
ex: <!-— 2020-02-10 —>


들여쓰기
들여쓰기는 tab 1번의 크기만큼 허용한다.


Attribute 우선순위
속성 순서
1 rel
2 type
3 href, src
4 width, height
5 target
6 id
7 name
8 class
9 style
10 title, alt
11 기타 attribute




## CSS


CSS 컨벤션
상단에  @charset  ‘utf-8’을 표기한다.
link 속성은 rel, type, href 순서로 표기한다. 	
<link rel=“stylesheet” type=“text/css” href=“yozm_common.css” /> <!-- reset, common요소 -->
	 <link rel=“stylesheet” type=“text/css” href=“yozm_top.css” /> <!-- 콘텐츠관련 -->
   
   
CSS선택자는 class로 핸들링을 하며, 태그네임으로 핸들링 하지 않는다.
CSS 작성 시 Indentation Depth 는 3 Depth 까지 허용하며, 2 Depth 만을 사용하는 것을 권장한다.


z-index 값 적용 가이드
		z-index 수치 간격은 10단위로 적용
		스니펫에서는 z-index를 기본값(10)으로 지정하고, 해당 서비스마다 z-index를 재정의해서 사용
    
    
스타일선언 규칙
1 display
2 overflow
3 float
4 position
5 z-index
6 width & height
7 margin & padding
8 border
9 font
10 background
11 etc (color, text-decoration


font 속성 순서
font-weight > font-size > line-height > font-family 순서로 선언한다.


background-position 속성값은 숫자로 선언한다.
background-position: left top


### IR 기법 컨벤션
Phark Method (권장)
이미지로 대체할 엘리먼트에 배경이미지를 설정하고 글자는 text-indent를 이용하여 화면 바깥으로(-9999px만큼 내어 쓰기) 빼내어 보이지 않게 하는 방법으로 사용한다.
css { display: overflow; width:1px; height:1px; text-indent:-9999px }


WA IR (권장)
이미지로 대체할 엘리먼트에 배경이미지를 설정하고 글자는 span 태그로 감싼 후 z-index:-1을 이용하여 화면에 안보이게 처리
클릭 부분에는 button, a을 둘 다 사용한다.


참고: 다음
