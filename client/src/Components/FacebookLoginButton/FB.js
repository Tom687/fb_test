import useFacebookSdk2 from '../../hooks/useFacebookSdk2';

export default function FB() {
  const [facebook, isFacebookReady] = useFacebookSdk2();

  const handleFacebookLogin = async () => {
    console.log(facebook);
    const response = await facebook.login()
    console.log(response)
  }

  return (
    <button type='button' onClick={handleFacebookLogin} disabled={!isFacebookReady}>Login with Facebook</button>
  )
}