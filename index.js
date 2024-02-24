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







    // LIFFの初期化
    liff.init({ liffId: '1657196041-vDWabr0g' }, () => {
        if (liff.isLoggedIn()) {
            // ユーザーがログインしている場合
            // 画像のクリックイベントを設定
            $('#customButton').click(sendIdTokenToGAS);
        } else {
            // ログインが必要な場合、ログインページを表示
            liff.login();
        }
    });

    // IDトークンをGASに送信する関数
    function sendIdTokenToGAS() {
        const idToken = liff.getIDToken();

        // IDトークンをGASに送信
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbK3X6zsJtkuBBqpfmX38h9Ofu38jRDafRklfVq89yvTvtacjtGobA/exec',
            type: 'POST',
            data: { idToken: idToken },
            success: function (response) {
                // 成功時の処理
                console.log(response);


		    
            },
            error: function (error) {
                // エラー時の処理
                console.error(error);
                alert('Failed to send ID Token to GAS.');
            }
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


