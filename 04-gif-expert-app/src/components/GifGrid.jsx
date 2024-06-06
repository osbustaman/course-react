import { GifItem } from './GifItem';
import { useFechGifs } from '../hooks/useFechGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFechGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <p>Loading...</p>
            }
                                                                                                  
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
            

    )
}
