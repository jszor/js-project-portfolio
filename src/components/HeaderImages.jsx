import office from "../assets/header_img_1.png"
import headshot from "../assets/header_img_2.png"
import coding from "../assets/header_img_3.png"

const HeaderImages = () => {
  return (
    <div>
      <img src={office} alt="office" />
      <img src={headshot} alt="headshot" />
      <img src={coding} alt="coding" />
    </div>
  )
}

export default HeaderImages