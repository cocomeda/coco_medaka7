var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

   let today = new Date();
    console.log(today);

     let nen=today.getFullYear();
     let tuki=today.getMonth()+1;
     let niti=today.getDate();
     let ji=today.getHours();
     let hun=today.getMinutes();
    let byou =today.getSeconds();


$(function () {
    // 送信
    $('#form1').submit(function () {
  
        var s_code = $('input[name="serialcode"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});
        
    let msg={};
    
       msg = ["code：" + s_code] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});





async function openQRCodeReader() {
    try {
        const result = await liff.scanCode();
        if (result.value) {
            const qrValue = result.value;


// getidToken()を呼び出し、Promiseを使用してIDトークンを取得する
getidToken()
    .then(idToken => {
        // IDトークンを使用して何かを行う
        console.log(idToken);
sendQRValueToAPI(idToken); // QRコードデータとIDトークンをGASに送信
       
    })
    .catch(error => {
        // エラーハンドリング
        console.error(error);
    });


           
           

            liff.closeWindow(); // LiFFウィンドウを閉じる
        } else {
            console.log('QRコードが見つかりませんでした。');
        }
    } catch (error) {
        console.error('QRコード読み取り中にエラーが発生しました:', error);
    }
}



async function sendQRValueToAPI(idToken) {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxX81FPKsJkEr3ZWsM2j03-Heofgk4554XF8Lljl1IoN9UE9jLCgg98cZON_7P2rgp9/exec';
   
    //var apiUrl = 'https://script.google.com/macros/s/AKfycby_2FhHltY1T3pACSrP6qc-MUObEkHbrpD7H-wcDESsuigWU1cer1aQcJDb-yDK3CR4/exec';//Post
 //var apiUrl = 'https://script.google.com/macros/s/AKfycbx88we0Cplyh97X1ty_rOpNP7OrXG9JiXMhmyB-uFfSIHlA1qci9xcvRLmdIalasEYu/exec';//GET


   
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idToken: idToken })
    };
    
    const response = await fetch(apiUrl, options);
    
    if (!response.ok) {
        throw new Error('APIレスポンスがエラーを返しました');
    }
    
    const responseData = await response.text();
    console.log('APIレスポンス:', responseData);
}








async function getidToken() {
    return new Promise((resolve, reject) => {
        liff.init({ liffId: '2001269046-RZ90vdYB' }, () => {
            if (liff.isLoggedIn()) {
                const idToken = liff.getIDToken(); // IDトークン
                resolve(idToken); // Promiseを解決してIDトークンを返す
            } else {
                liff.login();
                reject(new Error('User not logged in')); // ログインしていない場合はエラーを返す
            }
        });
    });
}　