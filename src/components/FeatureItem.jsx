import Padlock from "../assets/images/padlock.png";

const FeatureItem = ({image, title, description})=>{
    return (
        <article className="feature-item">
            <div className="feature-icon" aria-hidden="true"><img className="padlock" src={image}
                                                                  alt="padlock"/></div>
            <div>
                <h3><a href="#" className="feature-link">{title}</a></h3>
                <p>{description}</p>
            </div>
        </article>
    )
}
export default FeatureItem