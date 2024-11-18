import { Login } from '@/page-components/Auth';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Yazar Girişi</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
