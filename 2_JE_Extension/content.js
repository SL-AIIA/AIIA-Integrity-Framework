// AIIA Anchor v1.3 - Clean & Stable
(function () {
    'use strict';


    console.log('%cAIIA Anchor v1.3 loaded', 'color:#22c55e; font-weight:bold');


    function createAnchorButton() {
        if (document.getElementById('aiia-anchor-btn')) return;


        const btn = document.createElement('button');
        btn.id = 'aiia-anchor-btn';
        btn.innerHTML = '🔒 Anchor';
        btn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            z-index: 2147483647;
            padding: 12px 20px;
            background: #22c55e;
            color: white;
            border: none;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
            font-size: 14px;
        `;


        btn.addEventListener('click', () => {
            const input = document.querySelector('textarea, [contenteditable="true"], input[type="text"]');
            
            if (!input) {
                alert("Could not find the chat input box. Try focusing on the input area first.");
                return;
            }


            const userText = input.value || input.textContent || '';
            
            if (!userText.trim()) {
                alert("Please type something first before anchoring.");
                return;
            }


            if (confirm(`Anchor this intent?\n\n"${userText.substring(0, 120)}${userText.length > 120 ? '...' : ''}"`)) {
                localStorage.setItem('aiia_current_anchor', JSON.stringify({
                    text: userText,
                    time: Date.now()
                }));
                alert("✅ Intent Anchored Successfully!\n\nYou can now send your message.");
            }
        });


        document.body.appendChild(btn);
        console.log('%cAIIA Button added', 'color:#22c55e');
    }


    function init() {
        setTimeout(createAnchorButton, 1000);
        setTimeout(createAnchorButton, 3000);
        setTimeout(createAnchorButton, 6000);
    }


    init();


    // Re-attempt when page content changes
    new MutationObserver(init).observe(document.body, { 
        childList: true, 
        subtree: true 
    });


})();