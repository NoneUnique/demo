const NextButton = () => {
    return (
      <button
        aria-label="Next testimonial"
        className="ThreadTestimonialCarousel_right right-0"
        type="button"
      >
        <span className="css-1w2llpl" style={{ display: 'block', color: 'var(--lns-color-body)' }}>
          <svg viewBox="0 0 24 24" fill="none" width="1.5em" height="1.5em">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.293 7.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.586 12l-3.293-3.293a1 1 0 010-1.414z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    );
  };
  
  export default NextButton;
  