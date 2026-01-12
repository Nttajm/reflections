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