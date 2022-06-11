import axios from 'axios';
import { React, useEffect, useState } from 'react';

export default function apicall() {


const [player, setPlayer] = useState();

const getplayer = async () => {
    let response = await axios.get('https://foxes78api.herokuapp.com/api/players');
    return response.status === 200 ? response.data: null;
}

const loadPlayer = async () => {
    let player = await getplayer();
    console.log(player[0].first_name, typeof player.first_name);
    console.log(player[0])
    setPlayer(player[0])
}

useEffect(() => {loadPlayer(); }, []);
return (
    <div>
        <p>Create a player</p>
        <button onClick={() => loadplayer}>Create a player</button>
    </div>
)

}

