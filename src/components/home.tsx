import firstDunk from '../resources/gallary/FountainDunk1.png'

const Home = () => {
    return(
        <div id="home" className='home-container'>
            <h1>Welcome to My Website!</h1>
            <div className="home-card">
                <figure>
                    <div className="home-image-container">
                        <img src={firstDunk.src}/>
                    </div>
                    <figcaption><strong>&uarr;</strong></figcaption>
                    <figcaption>That is me!</figcaption>
                </figure>
                <div className="home-description">
                    <h4>About Me!</h4>
                    <p>
                        My name is Garrett James Bridger Chollett. <br/>
                        I'm a student at Trinit University, studying computer science and mathematics.<br/>
                        My consentrations lie in both web development and data science.
                    </p>
                </div>
            </div>
            <p className='scroller'>Scroll For More<br/>&darr;</p>
        </div>
    )
}

export default Home