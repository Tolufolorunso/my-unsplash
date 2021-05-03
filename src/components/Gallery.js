import React from 'react'

import styled from 'styled-components'
import GalleryItem from './GalleryItem'

const Gallery = ({ images, deleteHandler }) => {
  return (
    <Wrapper>
      {images.map((image, index) => {
        return (
          <GalleryItem
            image={image}
            key={image._id}
            index={index}
            deleteHandler={deleteHandler}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  /* position: relative; */
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  gap: 2em;
  grid-auto-flow: dense; */
  display: column;
  columns: 3;
  gap: 1em;

  & > * {
    break-inside: avoid;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    display: column;
    columns: 2;
    gap: 1em;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .img {
    /* position: relative; */
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .img:hover img {
    /* position: relative; */
    filter: brightness(0.5) blur(1px);
  }

  .img:hover .btn-para {
    display: block;
  }
`

export default Gallery
