import { SignUp } from '@/page-components/Auth';
import Head from 'next/head';

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Üye Ol</title>
      </Head>
      <SignUp />
    </>
  );
};

export default SignupPage;
