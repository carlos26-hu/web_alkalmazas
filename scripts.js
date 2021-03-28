let currentPhoto = 0;
let currentPhotoOld = 0;

let imagesData =[
    {
        photo: 'image/1.webp',
        thumb: 'image/thumbnails/1.jpg',
        title: 'Méh a virágon',
        description: 'Itt a tavasz'
    },

    {
        photo:'image/2.webp',
        thumb: 'image/thumbnails/2.jpg',
        title: 'Tengerpart',
        description: 'Séta a tengerbe'
    },

    {
    photo:'image/3.webp',
    thumb: 'image/thumbnails/3.jpg',
    title: 'Harmat',
    description: 'Harmatcseppek a virágon'
    },

    {
        photo:'image/4.webp',
        thumb: 'image/thumbnails/4.jpg',
        title: 'Naplemente',
        description: 'Naplemente a tavak felett'
    },


    {
        photo:'image/5.webp',
        thumb: 'image/thumbnails/5.jpg',
        title: 'Sziklafal',
        description: 'Tenger mossa a aziklafalat'
    },

    {
        photo:'image/6.jpg',
        thumb: 'image/thumbnails/6.jpg',
        title: 'Napraforgó',
        description: 'Virágzó napraforgó mező'
    },

    {
        photo:'image/7.webp',
        thumb: 'image/thumbnails/7.jpg',
        title: 'Tigris',
        description: 'Fehér bundájú bengáli tigris'
    }
]
let loadPhoto = (photoNumber) => {
$('#photo').attr("src",imagesData[photoNumber].photo)
$('#photo-title').text(imagesData[photoNumber].title)
$('#photo-description').text(imagesData[photoNumber].description)
}

function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

imagesData.forEach(loadThumbnails)
$(`.thumbnail[data-idx="${currentPhoto}"]`).css({"box-shadow": "0 4px 8px black"})

$('#arrow-right').click(() => {
        if (currentPhoto == imagesData.length-1) {
            currentPhotoOld = currentPhoto;
            currentPhoto = 0;
        }
        else {
            currentPhotoOld = currentPhoto;
            currentPhoto++;}
            loadPhoto(currentPhoto);
            activeThumbnail(currentPhoto,currentPhotoOld);
    });

$('#arrow-left').click(() => {
        if (currentPhoto !== 0) {
            currentPhotoOld = currentPhoto;
            currentPhoto--; 
        }
        else {
            currentPhotoOld = currentPhoto;
            currentPhoto = imagesData.length-1;}
            loadPhoto(currentPhoto);
            activeThumbnail(currentPhoto,currentPhotoOld);
    });
loadPhoto(currentPhoto);
activeThumbnail(currentPhoto,currentPhotoOld);

$(".thumbnail").click(function(event) {
    currentPhotoOld = currentPhoto;
    currentPhoto = parseInt($(event.target).attr("data-idx"));
    activeThumbnail(currentPhoto,currentPhotoOld);
    loadPhoto(currentPhoto);
})

function activeThumbnail (activeIndex,activeIndexOld) {
    $(`.thumbnail[data-idx="${activeIndexOld}"]`).css("top", "0")
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("top", "20px")
   

}