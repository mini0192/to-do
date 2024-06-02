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
        <img className="inlineObject blackToWhite hoverObject" style={{marginRight:"20px"}}width="30" src="speaker.png" onClick={handleSpeak}/>
    );
};

export default Ttl;