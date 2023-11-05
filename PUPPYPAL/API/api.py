from flask import Flask, request, jsonify
import torch
import torchvision.transforms as transforms
from PIL import Image
from io import BytesIO

app = Flask(__name__)

# 모델 로드
model = torch.load('model_name.pth')
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        img = Image.open(BytesIO(img_bytes))

        # 이미지 전처리 및 모델 예측 수행
        # ...

        # 결과 반환
        return jsonify({'result': prediction})

if __name__ == '__main__':
    app.run(debug=True)
