import { tours } from '../data';
const Tour = () => {
  return (
    <div className='section-center featured-center'>
      {tours.map(({ id, image, date, title, location, duration, cost }) => {
        return (
          <article className='tour-card' key={id}>
            <div className='tour-img-container'>
              <img src={image} className='tour-img' alt={title} />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{title}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  {location}
                </p>
                <p>{duration} days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Tour;
