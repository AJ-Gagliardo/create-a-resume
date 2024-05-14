export default function MapExperience({ experience }) {
  // if (!experience.lenght) {
  //   return <div>Insert experience here</div>;
  // }
  return (
    <div>
      {experience.map((indvExp, index) => (
        <div key={index}>
          <h3>{indvExp.companyName}</h3>
          <div className="experienceDateLoc">
            <p className="position">{indvExp.position}</p>
            <p>
              {indvExp.start} - {indvExp.end}
            </p>
            <p>{indvExp.location}</p>
          </div>
          <p>{indvExp.description}</p>
        </div>
      ))}
    </div>
  );
}
