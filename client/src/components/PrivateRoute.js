import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
const PrivateRoute = ({component:Component, ...rest}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const role = useSelector(state => state.authReducer.user.role)

    return (
       <Route {...rest} render ={ props=> isAuth && role =='admin' ? <Component />:
        <Redirect to='login'/>} />
    )
}

export default PrivateRoute
