import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react';
// import styles from '@/styles/Home.module.css'
// import styles from '@/styles/Home.css'
// '/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedText, setSelectedText] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setSelectedText(index);
  }

  return (
    <>
      <h1 className='head'>Other verticals </h1>
      <div className='container'>
        <div
          className={`img-large ${selectedImage === 0 ? '' : 'img-shrink'}`}
          onClick={() => handleImageClick(0)}
        >
          <div className={`text1 ${selectedImage === 0 ? '' : 'text-rotate1'}`} onClick={() => handleImageClick(0)}>AVIATION</div>
        </div>

        <div
          className={`img-small ${selectedImage === 1 ? 'img-expand' : ''}`}
          onClick={() => handleImageClick(1)}
        >
          <div className={`text2 ${selectedImage === 1 ? 'text-rotate' : ''}`} onClick={() => handleImageClick(1)}>FURNITURE</div>
        </div>
        <div
          className={`img-small ${selectedImage === 2 ? 'img-expand' : ''}`}
          onClick={() => handleImageClick(2)}
        >
          <div className={`text3 ${selectedImage === 2 ? 'text-rotate' : ''}`} onClick={() => handleImageClick(2)}>MASS&nbsp;TRANSIT</div>
        </div>
        <div
          className={`img-small ${selectedImage === 3 ? 'img-expand' : ''}`}
          onClick={() => handleImageClick(3)}
        >

          <div className={`text4 ${selectedImage === 3 ? 'text-rotate' : ''}`} onClick={() => handleImageClick(3)}>SEA</div>
        </div>
      </div>
      <style jsx> {`
.head{
  color:white;
  margin:14px;
  font-size:40px;
}
.container{
  display:flex;
  width:100vw;
  height:100vh;
  padding-bottom:194px;
  position:relative;
  max-width:100%;

}

.img-large{
  width:70vw;
  heigth:100vh;
  margin:right:10px;
  background-image:url("image1.png");
  background-repeate:no-repeate;
  background-position:center;
  background-size:cover;
  display:flex;
  align-items:flex-start;
  margin:10px;
  position-relative;
  transition: width 0.3s ease-in-out;
  border-radius:7%;
}
.img-shrink {
  width:calc(30vw / 3);
  height:100vh
  transform:rotate(270deg);
  border-radius:7%;
  }

.img-small{
  width:calc(30vw / 3);
  heigth:100vh;
  background-image:url("image1.png");
  background-repeate:no-repeate;
  background-position:center;
  background-size:cover;
  display:flex;
  align-items:flex-start;
  margin:10px;
  position:relative;
  transition: width 0.3s ease-in-out;
  border-radius:7%;
}
.img-expand {
  width:70vw;
  border-radius:7%;
}
.text1{
  color:white;
  bottom:257px;
  left:45px;
  font-size:50px;
  margin:10px;
  position:absolute;
}
.text2{
  color:white;
  z-index:1;
  font-size:2rem;
  transform:rotate(270deg);
  transform-origin:left bottom 0;
  bottom:55px;
  left:73px;
  position:absolute;
  font-size:50px;
  margin:10px;
}
.text3{
  color:white;
  z-index:1;
  font-size:2rem;
  transform:rotate(270deg);
  transform-origin:left bottom 0;
  bottom:55px;
  left:73px;
  position:absolute;
  font-size:50px;
  position:absolute;
}

.text4{
  color:white;
  z-index:1;
  font-size:2rem;
  transform:rotate(270deg);
  transform-origin:left bottom 0;
  bottom:55px;
  left:73px;
  position:absolute;
  font-size:50px;
}
.text-rotate1{
  transform:rotate(270deg);
  transform-origin:left bottom 0;
  bottom:258px;
  left:73px;
  position:absolute;
  font-size:50px;
}
.text-rotate{
  transform:rotate(0deg);
  transform-origin:left bottom 0;
}

`}
      </style>


    </>

  )
}
