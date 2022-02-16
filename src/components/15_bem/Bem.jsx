import "./Bem.css";

// Block elements
function Bem() {
    return (
		<>
			<div className="about">
			<div className="about__body">
				<div className="about__header">
					<div className="about__title title">ABOUT</div>
					<div className="about__text">We specialize in contemporary, functional, and stunning websites with design that really brings that "WOW" factor. 
In our design process, we make sure to stay one step ahead of the latest trends, 
never forgetting to abide by key web standards.</div>
				</div>
				<div className="about__row">
					<div className="about__column">
						<div className="item-about">
							<div className="item-about__icon">
								<img src="img/about/01.png" alt="" />
							</div>
							<div className="item-about__title">WEB</div>
							<div className="item-about__text">We tend to deliver unique and functional design, through innovation and creativity.</div>
						</div>
					</div>
					<div className="about__column">
						<div className="item-about">
							<div className="item-about__icon">
								<img src="img/about/02.png" alt="" />
							</div>
							<div className="item-about__title">iOS AND ANDROID</div>
							<div className="item-about__text">We seek to bring new businesses and customers closer together through valuable insights and proper targeting.</div>
						</div>
					</div>
					<div className="about__column">
						<div className="item-about">
							<div className="item-about__icon">
								<img src="img/about/03.png" alt="" />
							</div>
							<div className="item-about__title">MARKETING</div>
							<div className="item-about__text">We’ll help you establish the right goals and build the right paths. Success depends on setting the right intention.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    );
}

export default Bem;
