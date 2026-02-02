import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Home Page</h1>

      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp7030260.jpg"
            alt="Dress 1"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Summer Dress</h3>
            <p>Elegant and comfortable</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/5633830.jpg"
            alt="Dress 2"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Party Wear</h3>
            <p>Perfect for special occasions</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://as2.ftcdn.net/jpg/12/31/69/91/1000_F_1231699197_YuyTamQO0D9q6cN8aqiH43CU8yZ2XFuW.jpg"
            alt="Dress 3"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Traditional Dress</h3>
            <p>Classic & stylish</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
