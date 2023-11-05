이폴더에 프론트엔드 파일들을 추가해주세요.

예시)
#progect.js
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('http://your-api-server.com/predict', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // 결과를 웹 페이지에 표시
    document.getElementById('result').textContent = data.result;
})
.catch(error => {
    console.error(error);
});
