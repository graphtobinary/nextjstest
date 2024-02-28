import FlexBox from 'components/FlexBox';
import TextField from 'components/TextField';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Games Oye</title>
      </Head>
      <FlexBox height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <TextField as="h1" fontSize={36}>
          Coming Soon
        </TextField>
      </FlexBox>
    </>
  );
}
