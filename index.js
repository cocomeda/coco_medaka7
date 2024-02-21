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




function openQRCodeReader() {
    liff.scanCode()
        .then(async result => {
            if (result.value) {
                const qrValue = result.value;

			
//getidToken((idToken) => {
	//sendText(idToken); 
  //sendQRValueToAPI(idToken); 
//});

		    
                await sendQRValueToAPI(qrValue); // QRコードデータをGASに送信

		    
            liff.closeWindow(); // LiFFウィンドウを閉じる
            } else {
                console.log('QRコードが見つかりませんでした。');
            }
        })
        .catch(error => {
            console.error('QRコード読み取り中にエラーが発生しました:', error);
        });
}

async function sendQRValueToAPI(idToken) {
    
	const apiUrl = 'https://script.google.com/macros/s/AKfycbxJQRNu_FB1xepUnJxTfdKgvcsfQT9_YSD4co0lbwazTCeStl5oxiInzKm2iggK_XHG/exec';
    
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












function openQRCodeReader22() {
    liff.scanCode()
        .then(async result => {
            if (result.value) {
                // QRコードのスキャンが成功した場合
                console.log("QRコードスキャン結果:", result.value);

                let qr_data = parseInt(result.value, 10); // 10進数

                try {
                    let cc = await sendQRValueToAPI_2(qr_data); // sendQRValueToAPI_2関数を非同期で実行し、処理を待つ


			
                    //let bb = qr_data * niti + ji * hun;
                    //let aaa = "qr_data:" + bb + cc;

                    //sendText(aaa);

			
getidToken((idToken) => {
  sendQRValueToAPI_2(idToken); 
});




			
                } catch (err) {
                    console.error('Error sending QR value to API:', err);
                }
            }
        })
        .catch(err => {
            console.error(err);
        });
}





function sendQRValueToAPI_2(qrValue) { // GETリクエスト
	var apiUrl = 'https://script.google.com/macros/s/AKfycbzx3bk1O_ko5bF8aCk5x2Gq5Y5a_nG9rGEeAvUJDUibs-Sht8yZMl4WKFAx9AFDqJpx/exec'//+"?qrValue="+qrValue; //GET
	
        // GETリクエストの場合、クエリパラメータとしてデータを渡す
    apiUrl += '?qrValue=' + encodeURIComponent(qrValue);//
    
    var options = {
        method: 'get',
	    contentType: 'application/json'
	    
    };

    // fetch関数を使用してAPIにGETリクエストを送信
    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('APIレスポンスがエラーを返しました');
            }
            //return response.json(); // JSON形式でレスポンスを解析して返す
	　　return response.text(); // JSON形式でレスポンスを解析して返す
        })
        .then(data => {
            return data; 
		
        })
        .catch(err => {
            throw err;
        });
}








function sendQRValueToAPI_3(qrValue) {
    var apiUrl = 'https://script.google.com/macros/s/AKfycbwlD6sdD2sRF3-HJSeFz2DcgWDxKBPw3tOoPq0e8U-MkPAjxtDayJzd9ij7DcEChtxs/exec'; // POST

    var options = {
        method: 'post', // POSTリクエストを送信
        headers: {
            'Content-Type': 'application/json' // リクエストヘッダーでコンテンツタイプを指定
        },
        body: JSON.stringify({ qrValue: qrValue }) // リクエストボディにデータをJSON形式で含める
    };

    // fetch関数を使用してAPIにPOSTリクエストを送信
    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('APIレスポンスがエラーを返しました');
            }
            //return response.json(); // JSON形式でレスポンスを解析して返す
            return response.text(); // レスポンスをテキスト形式で解析して返す
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            throw err;
        });
}








function sendToGas1() { // POSTリクエスト
	
 //const idT = liff.getIDToken(); // IDトークン
const idT = "aa" // IDトークン	
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwee6lOh4CXUutPP0NRzFTv9eTbP7H66NWzP5R-hY1Khj0eNl5G5XpBSQ9HDJ19wqjH/exec',
        type: 'POST',
        data: { idToken: idT },
        success: function(response) {
            console.log(response); // 成功時の処理
            // LIFFのウィンドウを閉じる
            liff.closeWindow();
        },
        error: function(error) {
            console.error(error); // エラー時の処理
            alert('Failed to send ID Token to GAS.');
        }
    });

	  
}









function getidToken(callback) {
    liff.init({ liffId: '1657196041-vDWabr0g' }, () => {
        if (liff.isLoggedIn()) {
            const idToken = liff.getIDToken(); // IDトークン

            callback(idToken); // コールバック関数を使用してIDトークンを返す

		
        } else {
            liff.login();
        }
    });
}





