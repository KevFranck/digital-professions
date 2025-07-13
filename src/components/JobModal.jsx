import FavoriteButton from './FavoriteButton';

const JobModal = ({ job, isFavorite, onToggleFavorite, onClose }) => {
  if (!job) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl relative">
        <button 
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          {/* SVG close icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Rest of your modal content remains the same */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <div className="badge badge-primary mt-1">{job.domain}</div>
          </div>
          <FavoriteButton 
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
            size="md"
          />
        </div>

        <div className="divider"></div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Description</h3>
            <p>{job.description}</p>
          </div>

          <div>
            <h3 className="font-semibold">Average Salary</h3>
            <p>{job.salary}</p>
          </div>

          <div>
            <h3 className="font-semibold">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.stack.map(tech => (
                <div key={tech} className="badge badge-outline">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Primary Responsibilities</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;