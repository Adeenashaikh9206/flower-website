import Image from "next/image";
import "../style/flower.css"
const Flower =() => {
    return(
      <div id="flower">
        <section className="flowers-section">
        <h2 className="flowers-heading">Fresh Flowers</h2>
        <div className="flowers-container">
          <div className="flower-row">
            <div className="flower-box">
              <Image
                src="/rose.avif"
                alt="Flower 1"
                width={200}
                height={150}
              />
              <h3>Rose</h3>
              <p>$10</p>
            </div>
            <div className="flower-box">
              <Image
                src="/lilly.avif"
                alt="Flower 2"
                width={200}
                height={150}
              />
              <h3>Lily</h3>
              <p>$15</p>
            </div>
            <div className="flower-box">
            <Image
              src="/sun.avif"
              alt="Flower 3"
              width={200}
              height={150}
            />
            <h3>Sunflower</h3>
            <p>$20</p>
          </div>
        </div>
        <div className="flower-row">
          <div className="flower-box">
            <Image
              src="/daisy.avif"
              alt="Flower 4"
              width={200}
              height={150}
            />
            <h3>Daisy</h3>
            <p>$12</p>
          </div>
          <div className="flower-box">
            <Image
              src="/tulip.avif"
              alt="Flower 5"
              width={200}
              height={150}
            />
 <h3>Tulip</h3>
            <p>$18</p>
          </div>
          <div className="flower-box">
            <Image
              src="/voilet.avif"
              alt="Flower 6"
              width={200}
              height={150}
            />
            <h3>Violet</h3>
            <p>$25</p>
          </div>
        </div>
        <div className="flower-row">
          <div className="flower-box">
            <Image
              src="/orchid.avif"
              alt="Flower 7"
              width={200}
              height={150}
            />
            <h3>Orchid</h3>
            <p>$30</p>
          </div>
          <div className="flower-box">
            <Image
              src="/car.avif"
              alt="Flower 8"
              width={200}
              height={150}
            />
<h3>Carnation</h3>
            <p>$22</p>
          </div>
          <div className="flower-box">
            <Image
              src="/chry.avif"
              alt="Flower 9"
              width={200}
              height={150}
            />
            <h3>Chrysanthemum</h3>
            <p>$28</p>
          </div>
        </div>
      </div>
    </section>
    </div>

  
    )
}

export default Flower;