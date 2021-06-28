import { useDispatch } from 'react-redux';
import { renderMainLayout } from '../layout/MainLayout/MainLayout';
import { doLogin } from '../store/authentication/authentication.action';
import { NextPage } from '../types/common';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(doLogin.request({ username: 'abc', password: 'abc' }))}>Test</button>;
};

Home.renderLayout = renderMainLayout;

export default Home;
