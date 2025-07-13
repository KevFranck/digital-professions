const FilterButtons = ({ domains, currentFilter, setFilter }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {domains.map(domain => (
        <button
          key={domain}
          className={`btn btn-sm ${domain === currentFilter ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setFilter(domain)}
        >
          {domain}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons