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

        
         //sendIdTokenToGAS()
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
//sendQRValueToAPI(idToken); // QRコードデータとIDトークンをGASに送信
      sendIdTokenToGAS(idToken); // QRコードデータとIDトークンをGASに送信 
     //sendText(idToken);
       
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







function sendIdTokenToGAS(idToken) {
  

    // IDトークンをGASに送信
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbw9thHA0RBqLuiQZEK3X6zsJtkuBBqpfmX38h9Ofu38jRDafRklfVq89yvTvtacjtGobA/exec',
        type: 'POST',
        data: { idToken: idToken },
        success: function (response) {
            // 成功時の処理
            console.log(response);
           // displayMessage(response); // レスポンスメッセージを表示
         // displayData(response);
           sendText(idToken); 
        },
        error: function (error) {
            // エラー時の処理
            console.error(error);
            alert('Failed to send ID Token to GAS.');
        }
    });
}



function sendText(text) {
    // sendMessages(text);
// }

// LINEトーク画面上でメッセージ送信
// function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {  
        liff.closeWindow();
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}



async function getidToken() {
    return new Promise((resolve, reject) => {
        liff.init({ liffId: '1657196041-vDWabr0g' }, () => {
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
