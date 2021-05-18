import React from 'react';
import 'video.js/dist/video-js.css'
import 'videojs-resolution-switcher/lib/videojs-resolution-switcher.css'
const videojs = require('video.js').default;

export default class Player extends React.Component {

    constructor(props) {
        super(props);

        // Source files structure
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

        // Instantiate resolution switcher
        if (window) window.videojs = videojs;
        require('videojs-resolution-switcher');

    };
}


componentDidMount()
{

    // instantiate Video.js
    this.player = videojs(
        this.videoNode, {
            plugins: {
                videoJsResolutionSwitcher: {
                    default: 'high',
                    dynamicLabel: false
                },
            },
            ...this.props
        }, () => {
            let player = this.player;
            player.updateSrc(this.state.sources);
            player.on('resolutionchange', function () {
                console.info('Source changed to %s', player.src());
            });
            console.log('onPlayerReady', this)
        });
}

componentDidUpdate(prevProps, prevState, snapshot)
{
    if (this.props.sources != this.state.sources) {
        this.setState({
            sources: this.props.sources
        });
        // instantiate Video.js
        this.player = videojs(
            this.videoNode, {
                plugins: {
                    videoJsResolutionSwitcher: {
                        // default: this.props.sources[this.props.sources.length - 1].label,
                        default: 'high',
                        dynamicLabel: false
                    },
                },
                ...this.props
            }, () => {
                let player = this.player;
                player.updateSrc(this.state.sources);
                player.on('resolutionchange', function () {
                    console.info('Source changed to %s', player.src());
                });
                console.log('onPlayerReady', this)
            });
    }
}

// destroy player on unmount
componentWillUnmount()
{
    if (this.player) {
        this.player.dispose()
    }
}

// wrap the player in a div with a `data-vjs-player` attribute
// so videojs won't create additional wrapper in the DOM
// see https://github.com/videojs/video.js/pull/3856
render()
{
    return (
        <div>
            <div data-vjs-player>
                <video
                    autoPlay={false}
                    {...this.props}
                    ref={node => this.videoNode = node}
                    className='video-js vjs-16-9 vjs-big-play-centered'>
                </video>
            </div>
        </div>
    )
}
}