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
                // QRコードのスキャンが成功した場合
                console.log("QRコードスキャン結果:", result.value);

                let qr_data = result.value; // 10進数AAAAAAAAAAAAAAAA

                try {
                   
 //let cc = await sendQRValueToAPI_2(qr_data); // sendQRValueToAPI_2関数を非同期で実行し、処理を待つ

                   // let aaa = "qr_data:" + String(cc);
                    //let aaa = String(cc);
　　　　//
	//let idTo= "idtokon"


	

			
getidToken((idToken) => {
	// sendText(idToken);	
	 sendToGas(idToken);	
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




function hukugo(text1){

let text= unicodeToText(text1);

   let shift =100;
let unicord_arr=[];
let encrypt_arr=[];

 
    for (let i = 0; i < text.length; i++) {
        
       unicoded=textToUnicode(String(text[i]))
      unicord_arr += String(Number.parseInt(unicoded)).padStart(5, '0')
      encrypt_arr += String(Number.parseInt(unicoded)-shift).padStart(5, '0')
      //let ac=unicodeToText(unicord_arr)
     //let ac_encrypt=unicodeToText(encrypt_arr)
    }

let hukugo = unicodeToText(encrypt_arr);
return hukugo

}
 
 
// ユニコードをテキストに戻す
function unicodeToText(unicodeText) {
    if (!unicodeText) {
        return '';
    }

    let text = '';
    for (let i = 0; i < unicodeText.length; i += 5) {
        const unicodeChar = parseInt(unicodeText.substr(i, 5), 10);
        text += String.fromCharCode(unicodeChar);
    }
    return text;
}



// 日本語テキストをユニコードに変換
function textToUnicode(text) {
    if (!text) {
        return '';
    }

    let unicodeText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const unicodeChar = char.charCodeAt(0);
        unicodeText += String(unicodeChar).padStart(5, '0');
    }
    return unicodeText;
}
	


function sendQRValueToAPI_2(qrValue) { // GETリクエスト
	//var apiUrl = 'https://script.google.com/macros/s/AKfycbz6RnNKVM-DoeS1ls6viVFfqpNN5sNF2KNNsCUQAqaLSSkk4RK3TryzQd5HbntZdm_m2w/exec'//+"?qrValue="+qrValue; //GET
 var apiUrl = 'https://script.google.com/macros/s/AKfycbzLb-27dtSbG7GWIzn997aKpgXfdK8kxwzVEPvwggvjBF6DO5l44H6jbrweZkpkYBvC6A/exec'//+"?qrValue="+qrValue; //GET

// var apiUrl = 'https://script.google.com/macros/s/AKfycbziLTHejlwFYPaHUWZ0QELwBoyESfJdH91qbSn3mQVQrCOxcX4T2wFDdGrOmDLh7-gZvA/exec'//+"?qrValue="+qrValue; //GET
	//var apiUrl = 'https://script.google.com/macros/s/AKfycbwTyd4Qe7yR73Y9Y2YpkKTTvdfptM5TutZQqgobSWoVCU4lDVbGsLDdvgagF-NccZ7PaQ/exec'//+"?qrValue="+qrValue; //GET
	
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








function sendToGas(idToken) { // GETリクエスト
 var apiUrl = 'https://script.google.com/macros/s/AKfycbxESJyDsWHUY1H7c3XtvNq-sEStgqoMnBNyNJrgSGJQy9lrlcoRIpVE3ceeaPvjFE1BOg/exec'//+"?qrValue="+qrValue; //GET
	
        // GETリクエストの場合、クエリパラメータとしてデータを渡す
    apiUrl += '?idToken=' + encodeURIComponent(idToken);//
    
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
            //return data; 
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





function sendToGas(idToken) {
    var apiUrl = 'https://script.google.com/macros/s/AKfycby9rGeogZ0eYDOo0HihQW4mgIOgPrxo0_2SnM0G2V6zA0hIp17hmm8qM2CclDfVNm8X/exec';

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idToken: idToken }) // idTokenをJSON形式に変換して送信
    };

    // fetch関数を使用してAPIにPOSTリクエストを送信
    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('APIレスポンスがエラーを返しました');
            }
            return response.text();
        })
        .then(data => {
            return data; 
        })
        .catch(err => {
            throw err;
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


