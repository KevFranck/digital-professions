import { useState, useEffect } from 'react'
import jobsData from './data/jobs.json'
import JobCard from './components/JobCard'
import FilterButtons from './components/FilterButtons'
import ThemeToggle from './components/ThemeToggle'
import JobModal from './components/JobModal'
import useLocalStorage from './hooks/useLocalStorage'
import Footer from './components/Footer';
function App() {
  const [jobs, setJobs] = useState(jobsData)
  const [filter, setFilter] = useState('All')
  const [selectedJob, setSelectedJob] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //const [favorites, setFavorites] = useState([])
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  // Get unique domains for filter buttons
  const domains = ['All', ...new Set(jobsData.map(job => job.domain))]

  // Filter jobs based on selected domain
  useEffect(() => {
    if (filter === 'All') {
      setJobs(jobsData)
    } else {
      setJobs(jobsData.filter(job => job.domain === filter))
    }
  }, [filter])

  const handleCardClick = (job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const toggleFavorite = (jobId) => {
    setFavorites(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId) 
        : [...prev, jobId]
    )
  }

  return (
    <div className="min-h-screen bg-base-100">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Digital Professions</h1>
          <ThemeToggle />
        </div>
        <p className="mt-2 text-lg">Explore careers in the digital world</p>
      </header>

      <main className="container mx-auto py-6 px-4">
        <FilterButtons 
          domains={domains} 
          currentFilter={filter} 
          setFilter={setFilter} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {jobs.map(job => (
            <JobCard 
              key={job.id}
              job={job}
              onClick={() => handleCardClick(job)}
              isFavorite={favorites.includes(job.id)}
              onToggleFavorite={() => toggleFavorite(job.id)}
            />
          ))}
        </div>
      </main>

<Footer />
      {isModalOpen && (
        <JobModal 
          job={selectedJob}
          isFavorite={favorites.includes(selectedJob?.id)}
          onToggleFavorite={() => toggleFavorite(selectedJob.id)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App