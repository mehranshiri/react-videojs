# React player using VideoJs and Resolution Switcher

React video player with multiple source qualities (1080p, 720p, etc) and the ability to switch between them while playing the video.

# Requirements
* [React 15.6 or higher](https://www.reactjs.org/)

* [videojs Library in react](https://docs.videojs.com/index.html)

# Installation
Packages required to be installed globally if the recommended example app is generated:

- [`videojs`](https://www.npmjs.com/package/video.js)

```console
$ npm install video.js
```

- [`videojs-resolution-switcher`](https://www.npmjs.com/package/videojs-resolution-switcher)

```console
$ npm install videojs-resolution-switcher
```

# Getting Started

This component is based on react `class component`, you should set your video sources with different qualities in bellow structure in `constructor` function:

```javascript
        this.state = {
            sources: [
                {
                    src: require('../../asset/video-1.mp4'),
                    type: 'video/mp4',
                    label: '360p'
                },
                {
                    src: require('../../asset/video-2.mp4'),
                    type: 'video/mp4',
                    label: '480p'
                },
                {
                    src: require('../../asset/video-3.mp4'),
                    type: 'video/mp4',
                    label: '720p'
                }
            ]
        };
```

As default. I preset video resolution on the highest quality: `default: 'high'`, but you can change it to `low`.

# Style for video player

Add these `CSS` styles to your project for better appearence of the video player.

```css
.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before, .vjs-icon-pause:before {
  content: "\f103";
  font-family: 'VideoJS';
}

.video-js .vjs-mute-control .vjs-icon-placeholder:before, .vjs-icon-volume-high:before {
  content: "\f107";
  font-family: 'VideoJS';
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before, .vjs-icon-play:before {
  content: "\f101";
  font-family: 'VideoJS';
}

.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before, .vjs-icon-picture-in-picture-enter:before {
  content: "\f121";
  font-family: 'VideoJS';
}



.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before, .vjs-icon-fullscreen-enter:before {
  content: "\f108";
  font-family: 'VideoJS';
}

.vjs-menu-button {
  display: inline-flex;
  justify-content: center;
}

.vjs-resolution-button-staticlabel {
  font-family: 'VideoJS' !important;
  position: absolute;
  top: 0;
  display: inherit;
}
```


