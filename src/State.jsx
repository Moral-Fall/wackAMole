import { cearteContext, useContext, UseState, useRef, useEffect } from "react"

//     useEffect(() => { 
//         // code that we want to run
//         console.log("The Count is:",  count);

//         // reurn => { THIS IS WHERE CLEAN UP FUNCTION GOES
//             console.log("I am being cleaned up")
//         }
//     }, [count]) this is where dependancies go
// }

const numOfHoles = 9
const timeLimit = 15

const GameContext = createContext();

export function GameProvider({child})
    const [field, setField] = useState(makeField());
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState([]);
    const [playing, setPlaying] = useState(false);

    const [timer, setTimer] = useState(timeLimit);
    const timer = useRef();
