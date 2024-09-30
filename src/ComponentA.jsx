
import ComponentB from './ComponentB';

import { createContext } from "react";


export const Usercontext = createContext();

function ComponentA () {
    return (
        <div className="box">
            <h2>Hello Guest...!</h2>
            <Usercontext.Provider>
                <ComponentB />
            </Usercontext.Provider>
        </div>
    );
}

export default ComponentA;