WebRTCex4Node
=============

WebRTC API ドラフト仕様ページの[10.1 Simple Peer-to-peer Example(EXAMPLE 4)](http://dev.w3.org/2011/webrtc/editor/webrtc.html#simple-peer-to-peer-example "simple-peer-to-peer-example")のコードを、Socket.IOを使用して実装したサンプルプログラムです。

実行手順
--------
1. まず、client.htmlに書かれているlocalhost:9000の部分を適宜修正します。
2. Socket.IOプラグインをインストールしたNode.jsサーバーでserver.jsを起動します。
3. クライアントAでclient.htmlを表示した後に、クライアントBでclient.htmlを表示します。
4. クライアントBでclient.htmlを表示したら、クライアントAの”接続”ボタンが有効になりますのでクリックします。
5. 各クライアントでカメラの使用を許可すれば、それぞれのクライアントに映像が表示されます。  
(※server.jsはクライアントが２台であること(３台以上にならないこと)が前提としており、broadcast.emitを使用して実装を簡略化しています。)
