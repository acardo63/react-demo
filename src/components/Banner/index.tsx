import './style.css';

type BannerProps = {
    text: string
}

export default function Banner({ text }: BannerProps) {
    return (
        <div className="container">
            <div className="content">
                <h1>{text}</h1>
            </div>
            <div className="flap"></div>
        </div>
    )
}