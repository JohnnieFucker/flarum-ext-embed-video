import { extend } from 'flarum/common/extend';
import Button from 'flarum/forum/components/Button';
import CommentPost from 'flarum/forum/components/CommentPost';
import TextEditor from 'flarum/forum/components/TextEditor';

import { playerData, extensions } from './extensions';
import EmbedVideoModal from './components/EmbedVideoModal';

app.initializers.add('johnniefucker-embed-video', app => {
    extend(TextEditor.prototype, 'controlItems', function (items) {
        if (!app.forum.attribute('embedVideoCreate')) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            'JohnniefuckerEmbedVideo',
            m(Button, {
                icon: 'fas fa-video',
                class: 'Button Button--icon',
                onclick: () => app.modal.show(EmbedVideoModal, { editor: editor }),
                oncreate: vnode => $(vnode.dom).tooltip()
            }, app.translator.trans('johnniefucker-embed-video.forum.button_tooltip_title'))
        );
    });

    const loadPlayers = containers => {
        for (const p of containers) {
            const videoUrl = p.dataset.url;
            const videoType = p.dataset.type;
            const liveMode = p.dataset.live;
            const qualities = p.dataset.qualities;

            let qualitySwitching = [];

            if (qualities) {
                if (videoUrl) {
                    qualitySwitching.push({
                        name: 'default',
                        url: videoUrl,
                        type: videoType
                    });
                }

                qualities.split(',').forEach(q => {
                    const qData = q.split(';');
                    qualitySwitching.push({
                        name: qData[0],
                        url: qData[1],
                        type: qData.length < 3 ? 'auto' : qData[2]
                    });
                });
            }

            const isQualitySwitching = app.forum.attribute('embedVideoQualitySwitching') && qualitySwitching.length > 0;

            new DPlayer({
                container: p,
                live: liveMode === 'true' ? true : false,
                theme: app.forum.attribute('embedVideoTheme') || '#b7daff',
                logo: app.forum.attribute('embedVideoLogo') || '',
                lang: app.forum.attribute('embedVideoLang') || '',
                airplay: app.forum.attribute('embedVideoAirplay') || false,
                hotkey: app.forum.attribute('embedVideoHotkey') || false,
                video: !isQualitySwitching ? {
                    url: videoUrl,
                    type: videoType,
                    customType: {
                    }
                } : { quality: qualitySwitching, defaultQuality: 0 }
            });
        }
    };

    const loadScript = extension => {
        return new Promise(resolve => {
            const script = document.createElement('script');
            script.src = extension.url;
            script.onload = resolve;
            document.body.appendChild(script);
        });
    };

    extend(CommentPost.prototype, 'oncreate', function () {
        const containers = this.element.querySelectorAll('.dplayer-container');

        if (containers.length) {
            const initPlayer = new Promise(resolve => {
                if (playerData.loaded) {
                    const interval = setInterval(async () => {
                        if (window.DPlayer) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 1000);
                } else {
                    playerData.loaded = true;
                    loadScript(playerData).then(() => resolve());
                }
            }).then(() => {
                return new Promise(resolve => {
                    const extensionsPromise = new Promise(resolveExtensions => {
                        extensions.forEach(ex => {
                            if (ex.loaded) {
                                const interval = setInterval(() => {
                                    if (ex.window) {
                                        clearInterval(interval);
                                    }
                                }, 1000);
                            }

                            if (app.forum.attribute(`embedVideo${ex.attributeName}`) && !ex.loaded) {
                                ex.loaded = true;
                                loadScript(ex);
                            }
                        });

                        resolveExtensions();
                    });

                    extensionsPromise.then(() => resolve());
                });
            });

            initPlayer.then(() => loadPlayers(containers));
        }
    });
});
