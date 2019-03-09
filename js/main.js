const funnyAnimals = [
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image1.jpg' } },
    { animal: "dog", attr: { name: "Billy", age: 5, coatColor: "white", altContent:"funny dog", image: './images/image2.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image3.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image4.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image5.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image6.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image7.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image8.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image9.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image10.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image11.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image12.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image13.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image14.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image15.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image16.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image17.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image18.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image19.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image20.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image21.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image22.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image23.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image24.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image25.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image26.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image27.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image28.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image29.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image30.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image31.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image32.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image33.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image34.jpg' } },
    { animal: "cat", attr: { name: "Lily", age: 5, coatColor: "red", altContent:"funny cat", image: './images/image35.jpg' } },
]

let container = document.querySelector('.container');

function buildImageBlocks(element, items) {
    const tagName = 'div';
    items.forEach(function(item) {
      const imageBlock = document.createElement(tagName);
      element.appendChild(imageBlock);
      imageBlock.classList.add('imageBlock');
      const img = document.createElement('img');
      imageBlock.appendChild(img);
      img.src = item.attr.image;
      // img.onload = function(){console.log("there is a picture")};
      img.onerror = function(){img.src = './images/stub.png' };        
    });
}
buildImageBlocks(container, funnyAnimals);


function turnAroundPicture(e) {
  e.target.style.transform ="rotateY(180deg)";
  e.target.style.transition="4s";
  setTimeout(function(){
    fadeSrc(e);
  }, 2000)
}
function fadeSrc(e){
  e.target.src = "none";
}
const images = document.querySelectorAll('img');
console.log(images);
images.forEach(image => image.addEventListener('click', turnAroundPicture))