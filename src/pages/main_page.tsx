import styled from 'styled-components';
import StoryCard from './story_card';
import Head from './parts/head';
import Footer from './parts/footer';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

declare global {
    class User {
        username: string;
        id: number;
        photo_url?: string;

        constructor(username: string, id: number, photo_url?: string);
    }
}

export {};

const Page = styled.div`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
`;

export const MainPage = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        console.log('User data:', user);
        setUser(user);
    }, []);

    return (
        user ? (
            <Page>
                <Head />
                <StoryCard story_image={"/story1.png"} story_header={"История 1"} story_description={"Описание истории 1"} story_link='/nigg' />
                <StoryCard story_image={"/story1.png"} story_header={"История 1"} story_description={"Описание истории 1"} story_link='/nigg' />
                <Footer />
            </Page>
        ) : (
            <Loading />
        )
    );
}