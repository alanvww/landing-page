'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	const element1 = useRef(null);
	const element2 = useRef(null);
	const element3 = useRef(null);

	const Card = React.forwardRef((props, ref) => {
		return (
			<div ref={ref} className="card">
				<div className="card-content">
					<div className="card-image"></div>
					<div className="card-info-wrapper">
						<div className="card-info">
							<div className="card-info-title">
								<h3>{props.name}</h3>
								<h4>{props.link}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});
	Card.displayName = 'Card';

	const links = [
		{
			name: 'Youtube',
			link: 'https://www.youtube.com/',
		},
		{
			Dribbble: ['', ''],
		},
		{
			Github: ['', ''],
		},
	];

	let mouseCardEffect = (e) => {
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
	};

	return (
		<>
			<h1 className="headLine">{`Alan's Links`}</h1>
			<div className="cards" onMouseMove={mouseCardEffect}>
				<Card name={links[0].name} link={links[0].link} ref={element1}></Card>
				<div ref={element2} className="card">
					<div className="card-content">
						<div className="card-image">
							<Image
								className="logo"
								src={'/linkedin-in.svg'}
								alt="Picture of the author"
								layout="fill"
							/>
						</div>

						<div className="card-info-wrapper">
							<div className="card-info">
								<div className="card-info-title">
									<h3>LinkedIn</h3>
									<h4>{`Alan's LinkedIn`}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Card ref={element3}></Card>
			</div>
		</>
	);
}
