import { Box } from "@chakra-ui/react";
import type { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Chat from "../components/Chat/Chat";
import Auth from "../components/Auth/Auth";

const Home: NextPage = () => {
  const { data } = useSession();

  console.log("HERE IS DATA", data);

  return <Box>{data?.user ? <Chat /> : <Auth />}</Box>;
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
