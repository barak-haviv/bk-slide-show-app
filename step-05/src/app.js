document.querySelectorAll('ul.navbar-nav .nav-link').forEach(link => {
    link.addEventListener(
        'click',
        () => onChangePage(link.getAttribute('id'))
    );
});

let currentPageID;
const onChangePage = linkID => {
    if (currentPageID) {
        const oldList = document.querySelector(`#${currentPageID}`).classList;
        oldList.add('d-none');
    }

    linkID = linkID ?? 'home-page-link';
    currentPageID = linkID.replace('-link', '');
    const newList = document.querySelector(`#${currentPageID}`).classList;
    newList.remove('d-none');
}
onChangePage();

const pictureData = [{
    name: 'OHR.LongsPeak_ROW9098186381_1920x1080.jpg',
    title: 'Longs Peak, Rocky Mountain National Park',
    copyright: 'Andrew R. Slaton/Tandem Stills + Motion',
    description: 'One of the 53 "fourteeners" in Colorado—mountains that exceed 14,000 feet—Longs Peak still manages to reach higher into the heavens than any other mountain in Rocky Mountain National Park at 14,259 feet. Thousands of climbers set off every year to attempt the summit. Some climbers will try to reach the peak of every fourteener in the US during their lifetimes—that\'s 96 different mountains.',
    featured: '2022-07-28'
}, {
    name: 'OHR.NoctilucentClouds_ROW9144099035_1920x1080.jpg',
    title: 'Noctilucent clouds',
    copyright: 'ljphoto7/Getty Images',
    description: 'It\'s around this time of year when some lucky people get to witness these rare, wondrous clouds. Known as noctilucent, or "night-shining," clouds, they\'re the highest clouds in our sky and are only visible during summer. They\'re made up of icy dust glowing at the edge of space, roughly 50 miles above the planet\'s surface. The trick to seeing them is to gaze up into the sky at twilight, when sunlight is not reaching the Earth\'s surface, but is still shining through the high-altitude noctilucent clouds. These clouds occur more often at high latitudes but have been seen lower than 50° north and south.',
    featured: '2022-07-31'
}, {
    name: 'OHR.HickmanBridge_ROW9566895207_1920x1080.jpg',
    title: 'Happy birthday, Capitol Reef National Park',
    copyright: 'Tim Fitzharris/Minden Pictures',
    description: 'You won"t find a lot of solitude on the Hickman Bridge Trail, a 1.7-mile route in Capitol Reef National Park that leads to this magnificent natural arch. The trail is used by hikers, runners, and nature lovers drawn by incredible rock formations, gullies, and remnants from the ancient Fremont Culture civilization. Hickman Bridge itself is one of the best-known geologic features of the park.',
    featured: '2022-08-02'
}, {
    name: 'OHR.SpiralHill_ROW7328923046_1920x1080.jpg',
    title: 'Bay Marker Lookout, Sydney Olympic Park, Australia',
    copyright: 'ai_yoshi/Getty Images',
    description: 'It\'s an easy, circular trail to the Bay Marker Lookout, but you have to make it under your own steam—sorry, no cars allowed. This is one of the five Sydney Olympic Park Markers, cone-shaped earth mounds installed for the 2000 Olympics in Australia. They are cleverly placed to look from the air like the Australian flag\'s Southern Cross. From the ground, the Bay Marker gives a stunning full-360-degree view of Wentworth Common—a large grassy park—and the larger Olympic Park and stadium. You can also look over Homebush Bay (the community and the body of water) to the north. It"s a dramatic melding of urban landscape, the city skyline, the wetlands and greenery, rivers, and beaches.',
    features: '2022-07-12'
}];

let currentPictureIndex = 0;

const updateCounter = offset => {
    offset = Number(offset);
    if (!offset) { return; } //0, undefined

    if (offset > 0) {
        currentPictureIndex = (currentPictureIndex + offset) % pictureData.length;
        return;
    } 

    currentPictureIndex += offset;
    while (currentPictureIndex < 0) {
        currentPictureIndex += pictureData.length;
    }
};

const renderPicture = () => {
    const data = pictureData[currentPictureIndex];
    const dataContainer = document.querySelector('#data-container');
    const img = dataContainer.querySelector('img');
    img.src = `images/uploads/${data.name}`;
    img.alt = data.name;
    dataContainer.querySelector('header').innerText = data.title;
    dataContainer.querySelector('#image-description').innerText = data.description;
    dataContainer.querySelector('#image-featured').innerText = data.featured;
    dataContainer.querySelector('#image-copyright').innerText = data.copyright;
};

document.querySelector('#slider-prev-btn').addEventListener(
    'click',
    () => {
        updateCounter(-1);
        renderPicture();
    }
);
document.querySelector('#slider-next-btn').addEventListener(
    'click',
    () => {
        updateCounter(1);
        renderPicture();
    }
);
renderPicture();
