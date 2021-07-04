import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { v4 } from 'uuid';

function Main() {
    const phrases = useSelector(store => store.phrases);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        phrase: "",
        uuid: ""
    });

    function handleChange(e) {
        const { name, value }= e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    function submit(e) {
        e.preventDefault();
        dispatch({ 
            type: "ADD", 
            payload: {phrase: formData.phrase, uuid: v4()}
        })
    };

    function remove(id) {
        dispatch({
            type: "REMOVE",
            payload: {uuid: id}
        });
    };

    return(
        <div>
            <form onSubmit={submit}>
                <label>Put in your fucking phrase</label>
                <input
                    name="phrase"
                    value={formData.phrase}
                    type="text"
                    onChange={handleChange}
                    placeholder="Phrase"
                />
                <button>Submit</button>
            </form>
            <ul>
                {phrases.length ? 
                phrases.map(p => 
                <li key={p.uuid}>
                    {p.phrase}
                    <button onClick={() => remove(p.uuid)}>
                        X
                    </button>
                </li>) 
                : ""}
            </ul>
        </div>
    )
}

export default Main;