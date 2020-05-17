import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 80vw;
    max-width: 700px;
    margin: 0 auto;
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const Card = styled.div`
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px;
`

const Link = styled.a`
    color: #000;
    margin: 10px 10px;
    padding: 5px;
	text-decoration: none;
	font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
`

function App() {
  	return (
		<Container>
			<Card>
				<h1>Hey! Adam Azad is a Sulaimani-based leader, speaker, web developer and more <span role="img" aria-label="luck">🍀</span></h1>
				<p>Adam is also a start-upper and an Information Technology student with a minor in International Studies at the American University of Iraq (AUIS) in Sulaimani, Iraq.</p>
				<p>He is a freelance web developer and digital entrepreneur with several years of experience in the field. In 2011, at the age of 16, with a business partner from Sweden, he started his first online start-up project.</p>
				<p>Since 2017, Adam is Affiliate and Project Officer with the Center of Archaeology and Cultural Heritage of his AUIS, a cutting-edge research centre, employing the newest digital technologies to save the cultural heritage of Iraq.</p>
				<p>An innovative project manager, Adam is currently focusing his researches in the FinTech and decentralized finance (DeFi) ecosystems. His next bid is building products around the ecosystem.</p>
				<p>
					<Link title="Let's work together" href="mailto:adam@adamazad.com">Email</Link>  
					<Link title="Let's network" href="https://linkedin.com/in/adamazad">LinkedIn</Link> 
					<Link title="Let's build something awesome" href="https://github.com/adamazad">Github</Link>   
					<Link title="Tweet me something" href="https://twitter.com/adamzazad">Twitter</Link>   
					<Link title="Follow me travel blog" href="https://instagram.com/adamazad">Instagram</Link>   
				</p>
			</Card>
      	</Container>
  	);
}

export default App;