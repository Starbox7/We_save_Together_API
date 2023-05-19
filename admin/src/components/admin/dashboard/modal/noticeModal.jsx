import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import authStore from '../../../../store/authStore';
import cookieService from '../../../../data/storage/cookie';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  width: 70%;
  max-width: 800px;
  min-height: 70%;
  padding: 40px;
  border-radius: 15px;
  z-index: 1001;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 200px;
  width: 100%;
`;

const UploadButton = styled.button`
  background-color: #3498db;
  color: white;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const ImageInfo = styled.p`
  margin: 0;
  padding: 0;
`;

function Modal({ closeModal }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const id = authStore((state) => state.signData.id);

  const handleImageUpload = (e) => {
    setImages([...e.target.files]);
  };

  /** ------------------------------------------------------------- */
  const handlePostSubmit = async () => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append('images', image);
    });
    formData.append('id', id);
    formData.append('title', title);
    formData.append('content', content);

    const token = cookieService.getTokens();

    try {
      alert('check');
      const response = await axios.post('http://127.0.0.1:5001/notice/write', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      });
      if (response.status === 201) {
        alert('게시글이 성공적으로 업로드되었습니다.');
        closeModal();
      } else {
        alert('게시글 업로드에 실패하였습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('게시글 업로드에 실패하였습니다.');
    }
  };
  /** ------------------------------------------------------------- */

  return (
    <ModalContainer>
      <ModalOverlay onClick={closeModal} />
      <ModalContent>
        <h2>게시글 작성</h2>
        <InputContainer>
          <Label>제목</Label>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>내용</Label>
          <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>이미지 업로드</Label>
          <Input type="file" multiple onChange={handleImageUpload} />
        </InputContainer>
        <ImageContainer>
          <p>{images.length}개의 이미지가 선택되었습니다.</p>
          {images.map((image, index) => (
            <ImageInfo key={index}>
              {index + 1}. {image.name}
            </ImageInfo>
          ))}
        </ImageContainer>
        <UploadButton onClick={handlePostSubmit}>게시글 업로드</UploadButton>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
