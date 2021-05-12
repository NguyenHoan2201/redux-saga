import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../../actions';
function Auth() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(state=>state.auth.isLoading)
  const dispatch = useDispatch();
  const onsubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(auth.request({ userName, password }))
  }, [userName, password, dispatch]);
  return (
    <form onSubmit={onsubmit}>
      {isLoading && <div>authenticating</div>}
      <label htmlFor="userName">User name:</label>
      <input name="userName" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  )
}

export default Auth;