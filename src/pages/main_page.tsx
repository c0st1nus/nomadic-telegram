import styled from 'styled-components';
import StoryCard from './story_card';
import Head from './parts/head';
import { useEffect, useState } from 'react';

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
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        console.log('User data:', user);
        setUser(user);
    }, []);

    return (
        <Page>
            <Head />
            <StoryCard story_image={"/story1.png"} story_header={"История 1"} story_description={"Описание истории 1"} story_link='/nigg' />
            <StoryCard story_image={"/story1.png"} story_header={"История 1"} story_description={"Описание истории 1"} story_link='/nigg' />
        </Page>
    );
}