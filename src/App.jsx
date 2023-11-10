import { useState } from "react";
import { Card } from "./components/Card";


export const App = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {/** App -> Card -> EditButton 으로 Props를 전달하고 있다 */}
            {isAdmin? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin={isAdmin}/>
        </div>
    )
}