import bannerimg from '../assets/bannerimg.jpg'

export default function Banner(){

    return(
        <div className='banner'>
            <img src={bannerimg} alt="Banner Image" className='bannerImage' />
            <div className='bannerText'>
                <h1>Welcome to the Lost and Found App</h1>
                <p>Did you lose something? Search for it here</p>
            </div>

        </div>
    );


}