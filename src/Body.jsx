import Listen from './ai/Listen';

const Body = () => {
    return (
        <div className= "body mainPage">
            <div className='logoSection'>
                <img className='logoImg' src="cat.png"/>
                <p><strong>Example</strong>: "찬장에 있는 사료 훔치기</p>
            </div>
            <div className="mainSection">
                <Listen />
            </div>
        </div>
    );
}

export default Body;