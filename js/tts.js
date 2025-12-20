document.addEventListener("DOMContentLoaded", function() {
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
        console.log("Text-to-speech not supported.");
        return;
    }

    var synth = window.speechSynthesis;
    var speaking = false;
    var paused = false;
    var currentUtterance = null;

    // Create the floating button
    var btn = document.createElement("button");
    btn.id = "tts-button";
    btn.innerHTML = '<span class="tts-icon">🔊</span> <span class="tts-text">Listen</span>';
    btn.title = "Listen to this page";
    document.body.appendChild(btn);

    // Style is handled in css/tts.css, but we add basic positioning here just in case
    // (Actually, better to keep it all in CSS)

    btn.addEventListener("click", function() {
        if (speaking) {
            if (paused) {
                synth.resume();
                paused = false;
                updateButtonState("playing");
            } else {
                synth.pause();
                paused = true;
                updateButtonState("paused");
            }
        } else {
            // Start speaking
            var content = document.querySelector(".md-content__inner");
            if (!content) return;

            // Clean up text: remove icons and emojis
            var text = getCleanText(content);

            if (text.trim().length === 0) return;

            speak(text);
        }
    });

    function getCleanText(element) {
        // Clone the element to avoid modifying the actual DOM
        var clone = element.cloneNode(true);

        // Remove known icon classes (MkDocs Material uses .twemoji, FontAwesome, etc.)
        // Also remove permalinks and copy buttons
        var selectorsToRemove = [
            '.twemoji', 
            '.icon', 
            '.fa', '.fas', '.far', '.fab', 
            '.headerlink', 
            '.md-clipboard'
        ];
        
        var elementsToRemove = clone.querySelectorAll(selectorsToRemove.join(','));
        elementsToRemove.forEach(function(el) {
            el.remove();
        });

        var text = clone.innerText;

        // Regex to remove Unicode emojis and symbols
        var emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}]/gu;
        
        text = text.replace(emojiRegex, '');

        return text;
    }

    function speak(text) {
        // Cancel any current speech
        synth.cancel();

        var utterance = new SpeechSynthesisUtterance(text);
        
        // Detect language roughly (default to page lang or en)
        // MkDocs Material sets <html lang="...">
        var lang = document.documentElement.lang || 'en';
        utterance.lang = lang;

        // Optional: Select a better voice if available
        // var voices = synth.getVoices();
        // ... logic to pick voice ...

        utterance.onstart = function() {
            speaking = true;
            paused = false;
            updateButtonState("playing");
        };

        utterance.onend = function() {
            speaking = false;
            paused = false;
            updateButtonState("stopped");
        };

        utterance.onerror = function() {
            speaking = false;
            paused = false;
            updateButtonState("stopped");
        };

        synth.speak(utterance);
        currentUtterance = utterance;
    }

    function updateButtonState(state) {
        if (state === "playing") {
            btn.innerHTML = '<span class="tts-icon">⏸</span> <span class="tts-text">Pause</span>';
            btn.classList.add("tts-playing");
        } else if (state === "paused") {
            btn.innerHTML = '<span class="tts-icon">▶</span> <span class="tts-text">Resume</span>';
            btn.classList.remove("tts-playing");
        } else {
            btn.innerHTML = '<span class="tts-icon">🔊</span> <span class="tts-text">Listen</span>';
            btn.classList.remove("tts-playing");
        }
    }

    // Handle page visibility change (stop audio if user leaves tab?)
    // document.addEventListener("visibilitychange", function() {
    //     if (document.hidden && speaking) {
    //         synth.pause();
    //         paused = true;
    //         updateButtonState("paused");
    //     }
    // });
    
    // Handle navigation (MkDocs instant loading might not reload the script)
    // We need to re-attach or reset if the content changes.
    // Material for MkDocs emits a custom event when location changes.
    // However, since this script is loaded once, the button persists.
    // We just need to make sure we stop speaking on navigation.
    
    // If using navigation.instant, we might need to hook into location changes
    // But for simplicity, let's just stop speaking when the URL changes if possible.
    // Or rely on the user to stop it.
    
    // A simple way to handle "instant" navigation:
    // The button is appended to body, so it stays. 
    // But we should cancel speech on navigation.
    var pushState = history.pushState;
    history.pushState = function() {
        pushState.apply(history, arguments);
        synth.cancel();
        speaking = false;
        paused = false;
        updateButtonState("stopped");
    };
    
    window.addEventListener('popstate', function() {
        synth.cancel();
        speaking = false;
        paused = false;
        updateButtonState("stopped");
    });
});
