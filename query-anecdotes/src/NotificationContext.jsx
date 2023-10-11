/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const NotificationReducer = (state, action) => {
    switch(action.type){
        case 'VOTE':
            return `anecdote '${action.content}' voted`
        case 'CREATE':
            console.log('action', action)
            return `anecdote '${action.content}' created`
        case 'ERROR':
            return 'anecdote too short, must be 5 or more characters'
        case 'RESET':
            return ''
        default: return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(NotificationReducer, '')

    return(
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const notiAndDispatch = useContext(NotificationContext)
    return notiAndDispatch[0]
}
export const useNotificationDispatch = () => {
    const notiAndDispatch = useContext(NotificationContext)
    return notiAndDispatch[1]
}


export default NotificationContext