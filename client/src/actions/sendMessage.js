﻿const sendMessage = (msg) => {
    return {
        type: 'SEND_MESSAGE',
        msg: msg
    }
}

export default sendMessage