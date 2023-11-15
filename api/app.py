import streamlit as st
import torch
from torchvision import models, transforms
from PIL import Image
from io import BytesIO

# 모델 로드 및 초기화
model = models.resnet18()
model_path = '/Users/gogowon97/PuppyPal/PUPPYPAL/models/03AiModel/unist_model/pet_recogn/model/trained_model/dog/latest.pth'
checkpoint = torch.load(model_path, map_location=torch.device('cpu'))
model.load_state_dict(checkpoint['state_dict'])
model.eval()

# 이미지 전처리 함수
def transform_image(image_bytes):
    my_transforms = transforms.Compose([
        transforms.Resize(255),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    image = Image.open(BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)

# 이미지에 대한 예측 수행 함수
def get_prediction(image_bytes):
    tensor = transform_image(image_bytes)
    outputs = model(tensor)
    _, predicted = torch.max(outputs, 1)
    return predicted.item()

# Streamlit 인터페이스 구성
st.title('반려동물 행동 분석 서비스')

uploaded_file = st.file_uploader("이미지 업로드", type=["png", "jpg", "jpeg"])
if uploaded_file is not None:
    image_bytes = uploaded_file.read()
    st.image(image_bytes, caption='Uploaded Image', use_column_width=True)
    prediction = get_prediction(image_bytes)
    st.write(f'예측 결과: {prediction}')

# Streamlit 애플리케이션 실행
if __name__ == '__main__':
    st.run()
