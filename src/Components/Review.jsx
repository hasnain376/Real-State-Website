import aboutImage from '../assets/about.jpg';
import './Review.css'

const Review = () => {
    return <>
        <div className="review-container">
            <div className="review">
                <img src={aboutImage} />
                <div className='text'>
                    <h1>We Put People First</h1>
                    <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and&quot; and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                    </p>

                </div>
            </div>
            <div className="review-text-container">
                <div className='area '>
                    <h1>305</h1>
                    <p>Area <br /> Population</p>
                </div>
                <div className='properties'>
                <h1>1,090</h1>
                <p>Total <br /> Properties</p>
                </div>
                <div className='average'>
                <h1>209</h1>
                <p>Average <br /> House</p>
                </div>
                <div className='branches'>
                <h1>67</h1>
                <p>Total <br /> Branches</p>
                </div>
            </div>
        </div>
    </>
}
export default Review;