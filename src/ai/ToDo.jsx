import { useState } from "react";
import Ttl from "./Ttl";

const ToDo = (req) => {
    const text = req.text;
    const [todoList, setTodoList] = useState([]);

    const check = (chText) => {
        return todoList.indexOf(chText);
    }
    
    const addList = () => {
        if(text === "") {
            alert("한가한 친구군")
            return
        }

        if(check(text) !== -1) {
            alert("같은 값이 있어서 추가하기 귀찮아")
            return
        }

        setTodoList([text, ...todoList])
    }

    const deleteList = (getText) => {
        setTodoList(todoList.filter(t => t !== getText))
    }

    return (
        <div className="toDoPage">
            <button type="button" className="btn btn-outline-secondary inlineObject" onClick={ addList }>
                추가하기
            </button>
            <hr/>
            <div className="scrollObject">
                { todoList?.map(t => (
                    <details>
                        <summary>{ t }</summary>
                        <span><Ttl text={ t }/></span>
                        <button type="button" className="inlineObject btn btn-outline-secondary inlineObject" onClick={ () => { deleteList(t) } }>
                            삭제
                        </button>
                        <br/>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default ToDo;