import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import ToDo from './ToDo';

const Listen = () => {
    const {
        transcript, // 입력된 음성 데이터
        listening, // 듣기 on, off 기능
        resetTranscript, // 음성 듣기 초기화
        browserSupportsSpeechRecognition //브라우저 음성인식 지원 여부 확인(아마도?)
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className="listenPage page">
            {
            /* 음성 듣기 SpeechRecognition.startListening()
            음성 듣기 중지 SpeechRecognition.stopListening()
            음성 듣기 초기화 resetTranscript()
            음성 데이터 transcript */
            }

            <img src="mic.png" className={`micObject blackToWhite hoverObject ${listening ? "on" : ""}`} width="50" onClick={ SpeechRecognition.startListening }/>

            <p>{transcript}</p>
            <ToDo text={ transcript }/>
        </div>
    );
}

export default Listen;
