import Image from "next/image";
import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const {data: movie = []} = useMovieList()
  const {data: favorites = []} = useFavorites()
  const {isOpen, closeModal} = useInfoModal() 

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList data={movie} title={"Trending Now"} />
        <MovieList data={favorites} title="My List" />
      </div>
    </>
  );
}
