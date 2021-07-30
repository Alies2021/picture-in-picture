// selecting the elements from html
const video = document.querySelector('#video');
const startBtn = document.querySelector('#start-button');
const chooseBtn = document.querySelector('#choose-button');

// prompting to user select a stream 
const selectMediaStream = async () => {
    try {
        const videoStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = videoStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log(error);
    }
} 



// on load

// the choose button allows the user to choose a video
chooseBtn.addEventListener('click', selectMediaStream);

// the start button allows the user to start picture in picture
startBtn.addEventListener('click', async function() {
    // disable the button
    this.disabled = true;
    // request for picture in picture
    await video.requestPictureInPicture();
    // reset or enable the button
    this.disabled = false;
})

