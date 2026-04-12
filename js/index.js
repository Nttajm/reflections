// ─── Episode Data ────────────────────────────────────────────────────────────
const SPOTIFY_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;

const episodes = [
    {
        number: '01',
        title: 'Reflections of the women who carried me',
        description: `In this opening episode of Reflections, Malikka opens her heart and honors the women God placed around her in seasons when she could not carry herself. These are the women who prayed when words failed, stayed when it would have been easier to walk away, and believed when hope felt fragile.

Through honest conversation, shared laughter, tears, and testimony, this episode reflects on spiritual motherhood, sisterhood, and the power of God-ordained relationships. Each woman carries a piece of Malikka\u2019s story, walking with her through darkness, healing, and transformation, not as saviors, but as vessels God used to remind her who she was when she forgot.

This episode sets the foundation for Reflections with Malikka as more than a podcast. It is a sacred space where stories are honored, healing is witnessed, and God\u2019s faithfulness is magnified through community.

If you have ever been held up by prayer, carried by grace, or strengthened by the love of women who refused to let you fall, this episode is for you.`,
        duration: '1hr 15 min',
        date: 'Jan 17, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/5zZzmGq5LXqmBvs3CMZOCR?si=SyeIj4uoRAWt6B6ACapCxA'
    },
    {
        number: '02',
        title: 'Unmasking me',
        description: `There comes a moment in every healing journey where survival isn\u2019t enough anymore, where God invites us out of performance and into presence.

In this episode, Malikka chooses to be vulnerable in front of the world, sharing her raw testimony of the masks she wore to survive, the pain she hid to stay strong, and the sacred unraveling that led her back to herself and to God. This episode sets the tone for Reflections with Malikka as a real, honest, and Spirit-led space, not built on perfection, but on truth.

Through Scripture, reflection, and vulnerable storytelling, Unmasking Me explores what it really means to live unveiled before God, and why healing can\u2019t begin until hiding ends.

This episode is an invitation to slow down, breathe, and ask yourself: What am I still hiding\u2026 and who am I without the mask?`,
        duration: '23 min',
        date: 'Jan 31, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/0aYx8J38S7U2hNPlCa9Yfx?si=y7OM1UmLTZuI84wAoc8Cpg'
    },
    {
        number: '03',
        title: 'The Blurred Line Between Recovery and Healing',
        description: `In this deeply personal and powerful episode, I unpacks the sacred in-between, the space where recovery ends and healing begins.

What happens after the behavior stops? What happens when sobriety stabilizes you, but the wounds beneath the surface still whisper? What does it mean to be rescued\u2026 but not yet fully restored?

Through raw storytelling and biblical truth, Malikka explores the difference between recovery as stabilization and healing as transformation. The space between getting clean and becoming whole. I share how grief ignited my addiction, how recovery brought me to the cross, and how healing kept me there long enough for resurrection.

This is a conversation about the unwrapping, about the layers God tends beneath the surface.

If you\u2019ve stopped the behavior but still feel the ache, you are not behind. You are being healed. This episode is for you.`,
        duration: '23 min',
        date: 'Jan 31, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/4ZRcINXrZQBRaiXhpGwtQX?si=qANN2S-8Q6G68WlXFq4mnQ'
    },
    {
        number: '04',
        title: 'Reflections of an overflowing rug',
        description: `There are things we bury. There are things we normalize. And then there are things we inherit.

In Episode 4 of Reflections with Malikka, we explore what happens when the rug can no longer contain what\u2019s been swept beneath it.

Joined by Jazmine, this deeply honest conversation examines generational trauma, silent survival patterns, emotional inheritance, and the sacred breaking points that force us to confront what we\u2019ve avoided.

This episode asks the hard questions: What have you been sweeping under your rug? What did you inherit that you\u2019ve been blaming yourself for? Has your breaking point actually been an invitation? What would happen if you stopped sweeping?

Sometimes God allows the overflow, not to expose us, but to free us. This conversation is for anyone ready to stop managing the mess and start healing from the root.

\u2728 Where Healing Meets Transformation.`,
        duration: '1hr 5min',
        date: 'Feb 28, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/0kRdSCSs2mo9SzdyRqujFm?si=JLi9qu2eSm6SNfnMfyYYdA'
    },
    {
        number: '05',
        title: 'Reflections of a Love-Starved Heart',
        description: `Beneath the surface of many of our lives lies a quiet hunger, the longing to be known, chosen, and deeply loved.

In this powerful and deeply personal episode of Reflections, Malikka opens up about the journey of discovering what it means to live with a love-starved heart. Through her testimony, she explores how early experiences, emotional wounds, and unhealthy relationship patterns can shape our understanding of love without us even realizing it.

This episode introduces the concept of the orphan spirit, a mindset rooted in fear, striving, and self-protection, and contrasts it with the truth found in Romans 8:15.

This episode invites listeners to reflect on their own hearts and consider where they may be searching for love outside of God, and how the Father\u2019s love can begin restoring those places.

Because healing begins when we realize that the love we\u2019ve been chasing\u2026 has been chasing us all along.`,
        duration: '24 min',
        date: 'Feb 28, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/4AgdsgXetWIOdpiJX475LT?si=85a3d16b98e34afa'
    },
    {
        number: '06',
        title: 'Reflections of rejections',
        description: `
    
Rejection is something we all experience…
but rarely do we stop to examine how deeply it has shaped us.

In this vulnerable and Spirit-led episode, Malikka invites you into a space of honest reflection, unpacking the emotional weight of rejection and the subtle ways it can distort identity, influence relationships, and leave us searching for worth in places we were never meant to.

Through personal reflection and spiritual insight, this episode challenges you to confront the labels you’ve carried, the validation you’ve chased, and the wounds you may have buried.

But more than that, it offers truth.

Because sometimes what felt like rejection…
was actually God’s protection.
Sometimes what felt like loss…
was divine redirection.

This episode creates space for you to pause, reflect, and begin releasing what no longer belongs to you, so you can fully step into who God says you are.

This is more than a conversation…
it’s a moment of surrender.
A moment to lay down what rejection tried to build…
and allow God to rebuild you in truth.
        `,
        duration: '25 min',
        date: 'April 12, 2026',
        spotifyUrl: 'https://open.spotify.com/episode/3cdNJ4nRQ1YEusrhCYPxpG',
    },
];

function renderEpisodes() {
    const list = document.getElementById('episode-list');
    if (!list) return;
    list.innerHTML = episodes.map(ep => `
        <div class="episode-card animate-fade-up">
            <div class="episode-number">${ep.number}</div>
            <div class="episode-info">
                <h3>${ep.title}</h3>
                <div class="episode-description">
                    <p class="description-text collapsed">${ep.description}</p>
                    <button class="read-more-btn" type="button">
                        <span class="read-more-text">Read More</span>
                        <svg class="read-more-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                </div>
                <div class="episode-meta">
                    <span>${ep.duration}</span>
                    <span>${ep.date}</span>
                </div>
                <a href="${ep.spotifyUrl}" class="episode-spotify-link" target="_blank" rel="noopener" aria-label="Listen to Episode ${ep.number} on Spotify">
                    ${SPOTIFY_ICON}
                    Listen on Spotify
                </a>
            </div>
        </div>
    `).join('');
}

renderEpisodes();

// ─── Player ───────────────────────────────────────────────────────────────────
const playerBar = document.getElementById('playerBar');
        const playerTitle = document.getElementById('playerTitle');
        const playerSubtitle = document.getElementById('playerSubtitle');
        const barAudio = document.getElementById('barAudio');
        const barSource = document.getElementById('barSource');
        const playerClose = document.getElementById('playerClose');
        const playerToggle = document.getElementById('playerToggle');
        const playerToggleIcon = document.getElementById('playerToggleIcon');
        const playerSeek = document.getElementById('playerSeek');
        const playerCurrent = document.getElementById('playerCurrent');
        const playerDuration = document.getElementById('playerDuration');
        const playerVolume = document.getElementById('playerVolume');
        const playerMute = document.getElementById('playerMute');
        const playerMuteIcon = document.getElementById('playerMuteIcon');

        function formatTime(seconds) {
            if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
            const whole = Math.floor(seconds);
            const hrs = Math.floor(whole / 3600);
            const mins = Math.floor((whole % 3600) / 60);
            const secs = whole % 60;
            if (hrs > 0) return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            return `${mins}:${String(secs).padStart(2, '0')}`;
        }

        function setToggleState(isPlaying) {
            playerToggle.setAttribute('aria-pressed', String(isPlaying));
            playerToggle.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
            playerToggleIcon.innerHTML = isPlaying
                ? '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>'
                : '<path d="M8 5v14l11-7z"/>';
        }

        function setMuteState(isMuted) {
            playerMute.setAttribute('aria-pressed', String(isMuted));
            playerMute.setAttribute('aria-label', isMuted ? 'Unmute' : 'Mute');
            playerMuteIcon.innerHTML = isMuted
                ? '<path d="M16.5 12a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12z"/><path d="M3 10v4h4l5 5V5L7 10H3z"/><path d="M19 9l2 2m0-2l-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
                : '<path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.06A4.5 4.5 0 0 0 16.5 12z"/>';
        }

        function syncTimeline() {
            const duration = barAudio.duration;
            const current = barAudio.currentTime;

            playerCurrent.textContent = formatTime(current);
            playerDuration.textContent = formatTime(duration);

            if (Number.isFinite(duration) && duration > 0) {
                const pct = Math.min(100, Math.max(0, (current / duration) * 100));
                playerSeek.value = String(pct);
            } else {
                playerSeek.value = '0';
            }
        }

        function openBottomPlayer({ src, title, subtitle }) {
            playerTitle.textContent = title || 'Now Playing';
            playerSubtitle.textContent = subtitle || 'Demo audio — replace files later';

            if (src) {
                barSource.src = src;
                barAudio.load();
                barAudio.play().then(() => {
                    setToggleState(true);
                }).catch(() => {
                    setToggleState(false);
                });
            }

            playerBar.classList.add('active');
            playerBar.setAttribute('aria-hidden', 'false');
            document.body.classList.add('has-player');

            syncTimeline();
        }

        function closeBottomPlayer() {
            barAudio.pause();
            playerBar.classList.remove('active');
            playerBar.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('has-player');

            setToggleState(false);
        }

        playerClose.addEventListener('click', closeBottomPlayer);

        playerToggle.addEventListener('click', () => {
            if (barAudio.paused) {
                barAudio.play().then(() => setToggleState(true)).catch(() => setToggleState(false));
            } else {
                barAudio.pause();
            }
        });

        playerSeek.addEventListener('input', () => {
            const duration = barAudio.duration;
            if (!Number.isFinite(duration) || duration <= 0) return;
            const pct = Number(playerSeek.value);
            barAudio.currentTime = (pct / 100) * duration;
        });

        playerVolume.addEventListener('input', () => {
            const vol = Number(playerVolume.value);
            barAudio.volume = Number.isFinite(vol) ? Math.min(1, Math.max(0, vol)) : 1;
            if (barAudio.muted && barAudio.volume > 0) {
                barAudio.muted = false;
                setMuteState(false);
            }
        });

        playerMute.addEventListener('click', () => {
            barAudio.muted = !barAudio.muted;
            setMuteState(barAudio.muted);
        });

        barAudio.addEventListener('loadedmetadata', syncTimeline);
        barAudio.addEventListener('timeupdate', syncTimeline);
        barAudio.addEventListener('play', () => setToggleState(true));
        barAudio.addEventListener('pause', () => setToggleState(false));
        barAudio.addEventListener('ended', () => setToggleState(false));
        barAudio.addEventListener('volumechange', () => {
            playerVolume.value = String(barAudio.volume);
            setMuteState(barAudio.muted);
        });

        // Initialize UI
        setToggleState(false);
        setMuteState(false);
        playerVolume.value = String(barAudio.volume || 1);
        syncTimeline();

        document.querySelectorAll('.play-btn[data-src]').forEach(btn => {
            btn.addEventListener('click', () => {
                openBottomPlayer({
                    src: btn.getAttribute('data-src'),
                    title: btn.getAttribute('data-title'),
                    subtitle: btn.getAttribute('data-subtitle')
                });
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    animateOnScroll.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Pause animations for elements below fold until they scroll into view
        document.querySelectorAll('.episodes .animate-fade-up, .about .animate-slide-left, .about .animate-slide-right, footer .animate-fade-up').forEach(el => {
            el.style.animationPlayState = 'paused';
            animateOnScroll.observe(el);
        });

        // Read More functionality for episode descriptions
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const descriptionText = this.parentElement.querySelector('.description-text');
                const readMoreText = this.querySelector('.read-more-text');
                
                if (descriptionText.classList.contains('collapsed')) {
                    // Expand
                    descriptionText.classList.remove('collapsed');
                    readMoreText.textContent = 'Read Less';
                    this.classList.add('expanded');
                } else {
                    // Collapse
                    descriptionText.classList.add('collapsed');
                    readMoreText.textContent = 'Read More';
                    this.classList.remove('expanded');
                    
                    // Scroll back to the episode title for better UX
                    const episodeCard = this.closest('.episode-card');
                    if (episodeCard) {
                        episodeCard.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }
                }
            });
        });


