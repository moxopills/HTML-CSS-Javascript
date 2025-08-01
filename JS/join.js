const form = document.getElementById("form")

form.addEventListener("submit", function(event){
  event.preventDefault()

  let userID = event.target.id.value
  let userPw1 = event.target.pw1.value
  let userPw2 = event.target.pw2.value
  let userName = event.target.name.value
  let userPhone = event.target.phone.value
  let userPosition = event.target.position.value
  let userEmail = event.target.email.value
  let userIntro = event.target.intro.value

  if(userID.length < 6){
    alert("아이디가 짧습니다. 6자 이상 입력해주세요.")
    return
  }

  if(userPw1 !== userPw2){
    alert("비밀번호가 일치하지 않습니다.")
    return
  }

  document.body.innerHTML = ""
  document.write(`<p>${userID}님 환영합니다! </p>`)
  document.write(`<p>입력하신 정보는 다음과 같습니다.</p>`)
  document.write(`<p> 이름: ${userName} </p>`)
  document.write(`<p> 전회번호: ${userPhone} </p>`)
  document.write(`<p> 원하는 직무: ${userPosition} </p>`)

})