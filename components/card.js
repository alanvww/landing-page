import React from 'react';

const Card = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className="card">
			<div className="card-content">
				<div className="card-image">
					<div className="card-info-wrapper">
						<div className="card-info">
							<div className="card-info-title">
								<h3>Block</h3>
								<h4>Bla Bla Bla Bla Bla Bla Bla</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
Card.displayName = 'Card';

export default Card;

/*(e) => {
				const rect = e.target.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				e.target.style.setProperty('--mouse-x', `${x}px`);
				e.target.style.setProperty('--mouse-y', `${y}px`);
			}*/
