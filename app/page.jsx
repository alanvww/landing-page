'use client';

import { React, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Card from '../components/card';

export default function Home() {
	const element1 = useRef(null);
	const element2 = useRef(null);
	const element3 = useRef(null);
	let element4 = useRef();
	let element5 = useRef();
	let element6 = useRef();

	useEffect(() => {}, []);

	return (
		<div
			className="cards"
			onMouseMove={(e) => {
				let rect1, rect2, rect3;
				if (!element1.current) return;
				else rect1 = element1.current.getBoundingClientRect();
				if (!element2.current) return;
				else rect2 = element2.current.getBoundingClientRect();
				if (!element3.current) return;
				else rect3 = element3.current.getBoundingClientRect();

				let x1 = e.clientX - rect1.left,
					y1 = e.clientY - rect1.top;

				element1.current.style.setProperty('--mouse-x', `${x1}px`);
				element1.current.style.setProperty('--mouse-y', `${y1}px`);

				let x2 = e.clientX - rect2.left,
					y2 = e.clientY - rect2.top;

				element2.current.style.setProperty('--mouse-x', `${x2}px`);
				element2.current.style.setProperty('--mouse-y', `${y2}px`);

				let x3 = e.clientX - rect3.left,
					y3 = e.clientY - rect3.top;

				element3.current.style.setProperty('--mouse-x', `${x3}px`);
				element3.current.style.setProperty('--mouse-y', `${y3}px`);
			}}
		>
			<Card ref={element1}></Card>
			<Card ref={element2}></Card>
			<Card ref={element3}></Card>
		</div>
	);
}
