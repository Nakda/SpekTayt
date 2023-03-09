let videoElement;

async function startCapture(dotNetHelper, resolution, framerate) { 
    try {
        if(videoElement == null) {
            videoElement = document.getElementById("video");
        }

        const options = {
            video: {
                frameRate: framerate,
                height: resolution
            }
        };

        var captureStream = await navigator.mediaDevices.getDisplayMedia(options);
        
        captureStream.getVideoTracks()[0].addEventListener('ended', async () => {
            await dotNetHelper.invokeMethodAsync("onStreamingEnded");
            stopCapture();
        });

        videoElement.srcObject = captureStream;

        dumpOptionsInfo();
        return true;
    } catch (err) {
        console.error(`Error: ${err}`);
    }
    
    return false;
  }

async function stopCapture() {
    let tracks = videoElement.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;
}

function dumpOptionsInfo() {
    let tracks = videoElement.srcObject.getTracks();
    tracks.forEach((videoTrack) => {
        console.info("Track settings:");
        console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
        console.info("Track constraints:");
        console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
    }); 
}