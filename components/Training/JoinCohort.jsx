const JoinCohort = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Blue line at top */}
        <div className="w-full h-2 bg-[#4FA0E3] rounded-full mb-16" />

        <h2 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] mb-6">
          Ready to join the next cohort?
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
          Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet
          convallis. Vitae elit ante nibh eu mattis lobortis.
        </p>

        <a 
          href="/join"
          className="inline-flex items-center px-8 py-3 bg-[#E94E5C] hover:bg-[#d13848] text-white rounded-full font-medium transition-colors"
        >
          Join The Next Cohort
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default JoinCohort;
