console.log('firebase file');

 // Firebase 설정 객체 : 내 firebase에 대한 정보
 const firebaseConfig = {
    apiKey: "AIzaSyC-GI_v9GfQTrRDV87FUqAWuYHUlLpvlmY",
    authDomain: "fir-test-e5559.firebaseapp.com",
    databaseURL: "https://fir-test-e5559-default-rtdb.firebaseio.com",
    projectId: "fir-test-e5559",
    storageBucket: "fir-test-e5559.appspot.com",
    messagingSenderId: "240591586400",
    appId: "1:240591586400:web:2909c0fecfffe971e52f05" // 내꺼 firebase 사이트 주소 맞는지 확인하기
  };

  // Firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase의 실시간 데이터베이스
  const database = firebase.database()

  // Firebase에 데이터 쓰기
  const writeUserData = (userId, name, email)=>{      // 내가 쓰는 매개변수만 이해하면 됨!!!
    firebase.database().ref('users/'+userId).set({    // userId 안에 users의 database 저장 (ref는 reference참조 의미)
        name : name,
        email : email
    }) 
  }

    // firebase에 있는 데이터 읽기
    const readUserData = (userId)=>{
        const userRef = firebase.database().ref('users/')   // 'users/' 라는 경로의 참조를 가져옴

        userRef.once('value').then((res)=>{
            const data = res.val()
            console.log(data);
        })
    }


/* Mission!
 1. addUserBtn 이라는 id를 가진 버튼 클릭 시
 2. 사용자가 input에 입력한 세개의 데이터를 각각 console창에 찍어보기
 3. 02.JS실전폴더 -> ex04 참고
*/   


addUserBtn = document.getElementById('addUserBtn')
let frm = document.frm.elements   // elements라고 하면 일일이 id명으로 호출 안해도 됨! 또다른 방법일뿐

addUserBtn.addEventListener('click',()=>{
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);

    writeUserData(frm[0].value, frm[2].value, frm[1].value)
})
   // 이 코드는 이해해서 적을 줄 알아야함

let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click', ()=>{
    console.log('유저가져오기 ck');
    readUserData('gonaeun')
})
