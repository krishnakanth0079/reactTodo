import DisplayTodos from '../DisplayTodos';
import Todos from '../Todos';


const Todopage = () => {
    return(
        <div style={{marginTop: "50px" }}>
            <Todos/>
            <DisplayTodos/>
        </div>
    );
};

export default Todopage;