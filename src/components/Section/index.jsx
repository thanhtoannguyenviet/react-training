import './index.css';

const Section = (props) => {
    const {title, icon, children} = props;
    return (
        <div className="section">
            <h2 className="title">{icon} {title}</h2>
            {children}
        </div>
    );
}

export default Section;