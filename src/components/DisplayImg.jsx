import "./DisplayImg.css"


function DisplayImg({ imgSrc}) {

  let iconId = imgSrc[0].icon;
  let imgUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <>
    <div className="w-logo-con">
    <img src={imgUrl} alt="Weather" className="w-logo"/>
    </div>
    </>
  );
}

export default DisplayImg;


