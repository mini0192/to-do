import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import Ttl from './Ttl';

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
            <img className='logoImg' src='logo.png'/>
            <p>Microphone: {listening ? 'on' : 'off'}</p>

            {/* 음성 듣기 SpeechRecognition.startListening()
            음성 듣기 중지 SpeechRecognition.stopListening()
            음성 듣기 초기화 resetTranscript()
            음성 데이터 transcript */}

            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={SpeechRecognition.startListening}>
                Start
            </button>

            <p>{transcript}</p>
            <Ttl text={ transcript }/>
        </div>
    );
}

export default Listen;
