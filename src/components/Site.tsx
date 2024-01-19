import React from 'react';
import styles from './Site.module.css'
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThree';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './pages/Error404';
import styled from 'styled-components';
import { S } from './pages/__styled'
import { Page } from './pages/Page';
import { dataState } from '../dataState/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'page/0'}>PAGE-1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'page/1'}>PAGE-2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'page/2'}>PAGE-3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'} />} />

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages} />} />

                        {/* <Route path={'/page1'} element={<PageOne />} />
                        <Route path={'/page2'} element={<PageTwo />} />
                        <Route path={'/page3'} element={<PageThree />} /> */}

                        <Route path={'/*'} element={<Navigate to={'/pageError404'} />} />
                        <Route path={'/pageError404'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};