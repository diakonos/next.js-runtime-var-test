import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function TestPage() {
  return <p>Runtime var: {publicRuntimeConfig.runtimeVar}</p>;
}

TestPage.getInitialProps = async () => ({});
