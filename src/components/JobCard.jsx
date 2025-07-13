// src/components/JobCard.jsx
import FavoriteButton from './FavoriteButton';

const JobCard = ({ job, onClick, isFavorite, onToggleFavorite }) => {
  return (
    <div 
      className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title">{job.title}</h2>
          <FavoriteButton 
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
          />
        </div>
        <div className="badge badge-primary">{job.domain}</div>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobCard;