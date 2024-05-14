function MapExperience({ experience }) {
  return (
    <div>
      {experience.map((indvExp, index) => (
        <div key={index}>
          <p>
            {indvExp.companyName}
            {indvExp.position}
            {indvExp.start}
            {indvExp.end}
            {indvExp.location}
            {indvExp.description}
          </p>
        </div>
      ))}
      ;
    </div>
  );
}
