const Ttl = (req) => {
    console.log(req.text);
    
    function speakText(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    function handleSpeak() {
        speakText(req.text);
    };


    return (
        <div className="ttlPage page">
            <button onClick={handleSpeak}>음성 재생</button>
        </div>
    );
};

export default Ttl;