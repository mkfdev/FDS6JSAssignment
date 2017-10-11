// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.예를 들어 s가 'hello world'
// 라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

//주의) 문자열 전체의 짝 / 홀수 인덱스가 아니라 단어(공백을 기준) 별로 짝 / 홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  //splitStr 공백을 기준으로 쪼갠다(단어단위)
  var splitStr = s.split(' ');
  var word;
  var oneChar;
  var result = '';

  for (var i = 0; i < splitStr.length; i++) {
    word = splitStr[i];

    //oneChar 한단어를 한글자씩 쪼갠다
    oneChar = word.split('');

    for (var j = 0; j < oneChar.length; j++) {

      //짝수일때 대문자, 홀수일때 소문자
      result = (j % 2 === 0) ? oneChar[j].toUpperCase() : oneChar[j];
      //결과값(한 글자씩)을 배열에 넣는다.
      oneChar[j] = result;
      //한 단어를(문자열) join
      word = oneChar.join(''); //'My'
    }
    //i=0 : 'My',  i=1 : 'NaMe'...
    splitStr[i] = word;
  }
  //for문을 다돌고 splitStr 배열의 요소들을 공백과 함께 join
  return splitStr.join(" ");

}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'