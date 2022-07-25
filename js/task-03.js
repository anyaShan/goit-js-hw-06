const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGalleryEl = document.querySelector('.gallery');

const markup = images
  .map(
    image => `<li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}">
    </li>`,
  )
  .join('');

listGalleryEl.insertAdjacentHTML('beforeend', markup);

// const templateImages = ({ url, alt }) => <img src="${url}" alt="{alt}" />;

// const markup = images
//   .map(image => {
//     const itemGalleryEl = document.createElement('li');
//     itemGalleryEl.append(templateImages);
//     return itemGalleryEl;
//   })
//   .join('');
